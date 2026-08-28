param(
  [string]$ProjectRoot = "D:\Downloads\vineco-static-react-v2\vineco-static-react-v2"
)

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "============================================================" -ForegroundColor DarkGreen
Write-Host " VINECO - HOME HERO / MENU / IMAGE FIX V3" -ForegroundColor Green
Write-Host " NO LAYOUT REDESIGN" -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor DarkGreen

$root = [System.IO.Path]::GetFullPath($ProjectRoot)

$homePath = Join-Path $root "src\pages\HomePage.jsx"
$headerPath = Join-Path $root "src\components\layout\Header.jsx"

foreach ($path in @($homePath, $headerPath)) {
  if (!(Test-Path -LiteralPath $path -PathType Leaf)) {
    throw "Missing required file: $path"
  }
}

# ------------------------------------------------------------
# IMPORTANT:
# Remove only the accidentally copied patch file from project root.
# Keep the master patch in D:\Downloads, outside Vite's watch tree.
# ------------------------------------------------------------

$strayPatch = Join-Path $root "VINECO-HOME-HERO-MENU-IMAGE-FIX.ps1"

if (Test-Path -LiteralPath $strayPatch -PathType Leaf) {
  try {
    Remove-Item -LiteralPath $strayPatch -Force
    Write-Host "Removed stray root patch to avoid Vite EBUSY:" -ForegroundColor Yellow
    Write-Host "  $strayPatch" -ForegroundColor DarkGray
  }
  catch {
    Write-Host "Could not remove stray root patch." -ForegroundColor Yellow
    Write-Host "Stop npm run dev, delete it manually, then rerun this script." -ForegroundColor Yellow
    throw
  }
}

# ------------------------------------------------------------
# HERO ASSET RESOLUTION
# Preferred: the requested home-hero-main.webp
# Fallback: the ACTUAL old hero asset used by the rollback source.
# ------------------------------------------------------------

$preferredHeroDisk = Join-Path $root "public\images\home\home-hero-main.webp"
$preferredHeroWeb = "/images/home/home-hero-main.webp"

$legacyHeroDisk = Join-Path $root "public\images\pinterest-preview\pin-06.jpg"
$legacyHeroWeb = "/images/pinterest-preview/pin-06.jpg"

if (Test-Path -LiteralPath $preferredHeroDisk -PathType Leaf) {
  $heroWebPath = $preferredHeroWeb
  Write-Host ""
  Write-Host "Hero asset:" -ForegroundColor Cyan
  Write-Host "  Using requested home-hero-main.webp" -ForegroundColor Green
}
elseif (Test-Path -LiteralPath $legacyHeroDisk -PathType Leaf) {
  $heroWebPath = $legacyHeroWeb
  Write-Host ""
  Write-Host "Hero asset:" -ForegroundColor Cyan
  Write-Host "  home-hero-main.webp is not present." -ForegroundColor Yellow
  Write-Host "  Using the actual old Hero asset: pin-06.jpg" -ForegroundColor Green
}
else {
  throw @"
Neither Hero asset exists:
  $preferredHeroDisk
  $legacyHeroDisk

Restore one of these files before running the patch.
"@
}

$stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$backupDir = Join-Path $root (".vineco-backups\home-hero-menu-image-v2-" + $stamp)

New-Item -ItemType Directory -Force -Path (Join-Path $backupDir "src\pages") | Out-Null
New-Item -ItemType Directory -Force -Path (Join-Path $backupDir "src\components\layout") | Out-Null

Copy-Item -LiteralPath $homePath `
  -Destination (Join-Path $backupDir "src\pages\HomePage.jsx") `
  -Force

Copy-Item -LiteralPath $headerPath `
  -Destination (Join-Path $backupDir "src\components\layout\Header.jsx") `
  -Force

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

function Restore-Files {
  Copy-Item `
    -LiteralPath (Join-Path $backupDir "src\pages\HomePage.jsx") `
    -Destination $homePath `
    -Force

  Copy-Item `
    -LiteralPath (Join-Path $backupDir "src\components\layout\Header.jsx") `
    -Destination $headerPath `
    -Force
}

function Replace-Required {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Text,

    [Parameter(Mandatory = $true)]
    [string]$Old,

    [Parameter(Mandatory = $true)]
    [string]$New,

    [Parameter(Mandatory = $true)]
    [string]$Label
  )

  if (-not $Text.Contains($Old)) {
    throw "Could not find expected block: $Label"
  }

  return $Text.Replace($Old, $New)
}


function Replace-RegexFirst {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Text,

    [Parameter(Mandatory = $true)]
    [string]$Pattern,

    [Parameter(Mandatory = $true)]
    [string]$Replacement,

    [System.Text.RegularExpressions.RegexOptions]$Options =
      [System.Text.RegularExpressions.RegexOptions]::None
  )

  $regex = New-Object `
    System.Text.RegularExpressions.Regex(
      $Pattern,
      $Options
    )

  return $regex.Replace(
    $Text,
    $Replacement,
    1
  )
}

try {
  Write-Host ""
  Write-Host "[1/5] Fixing Hero content exactly to client brief..." -ForegroundColor Cyan

  $homeSource = [System.IO.File]::ReadAllText($homePath).Replace("`r`n", "`n")

  # ----------------------------------------------------------
  # Headline
  # ----------------------------------------------------------

  $homeSource = Replace-RegexFirst `
    -Text $homeSource `
    -Pattern 'titleLine1:\s*"[^"]*",' `
    -Replacement 'titleLine1: "Crafted By Nature,",'

  $homeSource = Replace-RegexFirst `
    -Text $homeSource `
    -Pattern 'titleLine2:\s*"[^"]*",' `
    -Replacement 'titleLine2: "Perfected By Us",'

  # ----------------------------------------------------------
  # Description / sub-headline
  # ----------------------------------------------------------

  $homeSource = Replace-RegexFirst `
    -Text $homeSource `
    -Pattern '(?s)description:\s*"VinEco is a premier Vietnam-based manufacturer.*?worldwide[.,]?",' `
    -Replacement (
      'description:' + "`n" +
      '      "VinEco is a premier Vietnam-based manufacturer and global exporter of high-quality pet products made from natural materials, bringing safe, durable, and eco-friendly solutions to pets worldwide",'
    )

  $homeSource = Replace-RegexFirst `
    -Text $homeSource `
    -Pattern '(?s)subDescription:\s*"Crafted from 100% natural, sustainable coffee wood.*?Amazon FBA sellers\.",' `
    -Replacement (
      'subDescription:' + "`n" +
      '      "Crafted from 100% natural, sustainable coffee wood from the Central Highlands. Safe, durable, and eco-friendly chew toys designed for global pet brands, start up, and Amazon FBA sellers.",'
    )

  # ----------------------------------------------------------
  # Hero image source:
  # do NOT require a missing path.
  # ----------------------------------------------------------

  $homeSource = Replace-RegexFirst `
    -Text $homeSource `
    -Pattern 'image:\s*"[^"]*(?:home-hero-main\.webp|pin-06\.jpg)"' `
    -Replacement ('image: "' + $heroWebPath + '"') `
    -Options ([System.Text.RegularExpressions.RegexOptions]::IgnoreCase)

  # If the regex above did not catch a highly modified version,
  # replace the explicit current references too.
  $homeSource = $homeSource.Replace(
    'image: "/images/home/home-hero-main.webp"',
    'image: "' + $heroWebPath + '"'
  )

  $homeSource = $homeSource.Replace(
    'image: "/images/pinterest-preview/pin-06.jpg"',
    'image: "' + $heroWebPath + '"'
  )

  Write-Host "  Hero copy fixed" -ForegroundColor Green
  Write-Host "  Hero source: $heroWebPath" -ForegroundColor Green

  Write-Host ""
  Write-Host "[2/5] Stabilizing image framing without changing layout..." -ForegroundColor Cyan

  # Main Hero:
  # - keep object-cover because it is a background/lifestyle image
  # - shift focus to the right where the dogs are
  # - remove hover scale that makes the image appear to jump
  $homeSource = Replace-RegexFirst `
    -Text $homeSource `
    -Pattern 'className="absolute inset-0 h-full w-full object-cover [^"]*opacity-90[^"]*"' `
    -Replacement 'className="absolute inset-0 h-full w-full object-cover object-[68%_center] opacity-95"'

  $homeSource = Replace-RegexFirst `
    -Text $homeSource `
    -Pattern '<div className="absolute inset-0 bg-gradient-to-r [^"]*" />' `
    -Replacement '<div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/96 via-[#FAF8F5]/76 to-transparent" />'

  # Side product image:
  # preserve full object instead of cropping it.
  $homeSource = Replace-RegexFirst `
    -Text $homeSource `
    -Pattern 'className="aspect-\[4/3\] h-full w-full object-cover object-center[^"]*"' `
    -Replacement 'className="aspect-[4/3] h-full w-full object-contain object-center p-3"'

  # Add focal points to the three current product images.
  if (
    $homeSource.Contains('image: "/images/home/product-classic-chew.webp",') -and
    -not $homeSource.Contains('imagePosition: "object-[50%_50%]"')
  ) {
    $homeSource = $homeSource.Replace(
      '      image: "/images/home/product-classic-chew.webp",',
      '      image: "/images/home/product-classic-chew.webp",' + "`n" +
      '      imagePosition: "object-[50%_50%]",'
    )
  }

  if (
    $homeSource.Contains('image: "/images/home/product-gorilla-chew.webp",') -and
    -not $homeSource.Contains('imagePosition: "object-[50%_46%]"')
  ) {
    $homeSource = $homeSource.Replace(
      '      image: "/images/home/product-gorilla-chew.webp",',
      '      image: "/images/home/product-gorilla-chew.webp",' + "`n" +
      '      imagePosition: "object-[50%_46%]",'
    )
  }

  if (
    $homeSource.Contains('image: "/images/home/product-rope-toy.webp",') -and
    -not $homeSource.Contains('imagePosition: "object-[50%_42%]"')
  ) {
    $homeSource = $homeSource.Replace(
      '      image: "/images/home/product-rope-toy.webp",',
      '      image: "/images/home/product-rope-toy.webp",' + "`n" +
      '      imagePosition: "object-[50%_42%]",'
    )
  }

  # Replace only the ProductCard image class.
  $homeSource = Replace-RegexFirst `
    -Text $homeSource `
    -Pattern 'className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-\[1\.04\]"' `
    -Replacement 'className={`h-full w-full object-cover ${product.imagePosition || "object-center"}`}'

  [System.IO.File]::WriteAllText(
    $homePath,
    $homeSource,
    $utf8NoBom
  )

  Write-Host "  Hero zoom removed" -ForegroundColor Green
  Write-Host "  Hero focal point shifted right" -ForegroundColor Green
  Write-Host "  Side image uses contain" -ForegroundColor Green
  Write-Host "  Product cards keep original dimensions" -ForegroundColor Green

  Write-Host ""
  Write-Host "[3/5] Fixing Header menu..." -ForegroundColor Cyan

  $headerSource = [System.IO.File]::ReadAllText($headerPath).Replace("`r`n", "`n")

  # Shared mobile navigation data: remove OEM / ODM.
  $headerSource = Replace-RegexFirst `
    -Text $headerSource `
    -Pattern '(?s)\s*\{\s*label:\s*"OEM / ODM",\s*to:\s*"/oem-odm",\s*\},' `
    -Replacement ''

  # Navigation data Contact -> Contact Us.
  $headerSource = $headerSource.Replace(
    'label: "Contact",',
    'label: "Contact Us",'
  )

  # Desktop top navigation: remove OEM / ODM only.
  $headerSource = Replace-RegexFirst `
    -Text $headerSource `
    -Pattern '(?s)\s*<NavLink to="/oem-odm">\s*OEM / ODM\s*</NavLink>' `
    -Replacement ''

  # Desktop Contact -> Contact Us.
  $headerSource = Replace-RegexFirst `
    -Text $headerSource `
    -Pattern '(<NavLink to="/contact">\s*)Contact(\s*</NavLink>)' `
    -Replacement '$1Contact Us$2'

  if (-not $headerSource.Contains("Get Free Sample")) {
    throw "Header CTA 'Get Free Sample' was not found."
  }

  [System.IO.File]::WriteAllText(
    $headerPath,
    $headerSource,
    $utf8NoBom
  )

  Write-Host "  Home | About Us | Product | Service | FAQ | Contact Us" -ForegroundColor Green
  Write-Host "  CTA: Get Free Sample" -ForegroundColor Green

  Write-Host ""
  Write-Host "[4/5] Validating..." -ForegroundColor Cyan

  $finalHome = [System.IO.File]::ReadAllText($homePath)
  $finalHeader = [System.IO.File]::ReadAllText($headerPath)

  foreach ($requiredText in @(
    "Crafted By Nature,",
    "Perfected By Us",
    "VinEco is a premier Vietnam-based manufacturer and global exporter of high-quality pet products made from natural materials, bringing safe, durable, and eco-friendly solutions to pets worldwide",
    "Crafted from 100% natural, sustainable coffee wood from the Central Highlands. Safe, durable, and eco-friendly chew toys designed for global pet brands, start up, and Amazon FBA sellers.",
    $heroWebPath,
    "object-[68%_center]"
  )) {
    if (-not $finalHome.Contains($requiredText)) {
      throw "Home validation failed: $requiredText"
    }
  }

  if ($finalHeader.Contains('<NavLink to="/oem-odm">')) {
    throw "Header still contains desktop OEM / ODM."
  }

  foreach ($requiredText in @(
    "Home",
    "About Us",
    "Product",
    "Service",
    "FAQ",
    "Contact Us",
    "Get Free Sample"
  )) {
    if (-not $finalHeader.Contains($requiredText)) {
      throw "Header validation failed: $requiredText"
    }
  }

  Write-Host "  Validation passed" -ForegroundColor Green

  Write-Host ""
  Write-Host "[5/5] Production build..." -ForegroundColor Cyan

  Push-Location $root
  try {
    & npm run build

    if ($LASTEXITCODE -ne 0) {
      throw "npm run build failed."
    }
  }
  finally {
    Pop-Location
  }

  Write-Host ""
  Write-Host "============================================================" -ForegroundColor Green
  Write-Host " HOME HERO / MENU / IMAGE V3 COMPLETE - BUILD OK" -ForegroundColor Green
  Write-Host "============================================================" -ForegroundColor Green

  Write-Host ""
  Write-Host "Hero used:" -ForegroundColor Cyan
  Write-Host "  $heroWebPath"

  Write-Host ""
  Write-Host "Backup:" -ForegroundColor Cyan
  Write-Host "  $backupDir"

  Write-Host ""
  Write-Host "Start Vite AFTER this script exits:" -ForegroundColor Cyan
  Write-Host "  npm run dev -- --host"
}
catch {
  Write-Host ""
  Write-Host "PATCH FAILED" -ForegroundColor Red
  Write-Host $_.Exception.Message -ForegroundColor Red

  Restore-Files

  Write-Host "HomePage.jsx and Header.jsx restored." -ForegroundColor Yellow
  throw
}
