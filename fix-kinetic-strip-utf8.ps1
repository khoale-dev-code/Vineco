Set-Location "D:\freetime\khang-portfolio"

$ErrorActionPreference = "Stop"

chcp 65001 > $null

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[Console]::InputEncoding = $utf8NoBom
[Console]::OutputEncoding = $utf8NoBom
$OutputEncoding = $utf8NoBom

$appPath = Join-Path (Get-Location) "src\App.jsx"
$cssPath = Join-Path (Get-Location) "src\index.css"

if (!(Test-Path $appPath)) {
    throw "Khong tim thay src\App.jsx"
}

if (!(Test-Path $cssPath)) {
    throw "Khong tim thay src\index.css"
}

Copy-Item $appPath "$appPath.before-kinetic-encoding-fix" -Force
Copy-Item $cssPath "$cssPath.before-kinetic-encoding-fix" -Force

$app = [System.IO.File]::ReadAllText(
    $appPath,
    [System.Text.Encoding]::UTF8
)

# Replace the text-based Unicode separator inside the kinetic strip
# with an empty visual element. This avoids future mojibake/UTF-8 issues.
$pattern = '(<span className="kinetic-item"[^>]*>\{item\})<i>[^<]*</i>(</span>)'
$replacement = '$1<i className="kinetic-separator" aria-hidden="true" />$2'

$updatedApp = [regex]::Replace(
    $app,
    $pattern,
    $replacement
)

if ($updatedApp -eq $app) {
    Write-Host "Khong match duoc kinetic separator bang regex. Thu fallback..." -ForegroundColor Yellow

    $updatedApp = $updatedApp.Replace(
        '<i>✦</i>',
        '<i className="kinetic-separator" aria-hidden="true" />'
    )

    $updatedApp = $updatedApp.Replace(
        '<i>âœ¦</i>',
        '<i className="kinetic-separator" aria-hidden="true" />'
    )
}

[System.IO.File]::WriteAllText(
    $appPath,
    $updatedApp,
    $utf8NoBom
)

$css = [System.IO.File]::ReadAllText(
    $cssPath,
    [System.Text.Encoding]::UTF8
)

$css = [regex]::Replace(
    $css,
    '(?s)/\* === KINETIC UTF8 FIX START === \*/.*?/\* === KINETIC UTF8 FIX END === \*/',
    ''
).TrimEnd()

$newCss = @'

/* === KINETIC UTF8 FIX START === */

/*
  Do not use a text character such as ✦ here.
  The separator is drawn with CSS, so Windows/Git/Vercel encoding
  can no longer turn it into mojibake like "âœ¦".
*/

.kinetic-item .kinetic-separator {
  display: inline-block;
  width: 6px;
  height: 6px;
  flex: 0 0 6px;
  margin-left: 12px;
  border-radius: 1px;
  background: rgba(255,255,255,.58);
  transform: rotate(45deg);
  transform-origin: center;
  font-size: 0;
  line-height: 0;
}

.kinetic-item:hover .kinetic-separator {
  background: rgba(255,255,255,.92);
}

/* Keep the marquee clean on small screens */
@media (max-width: 699px) {
  .kinetic-item {
    gap: 18px;
    padding: 13px 10px;
    font-size: 9px;
    letter-spacing: .15em;
  }

  .kinetic-item .kinetic-separator {
    width: 5px;
    height: 5px;
    flex-basis: 5px;
    margin-left: 8px;
  }
}

/* === KINETIC UTF8 FIX END === */
'@

$css = $css + "`r`n`r`n" + $newCss + "`r`n"

[System.IO.File]::WriteAllText(
    $cssPath,
    $css,
    $utf8NoBom
)

Write-Host ""
Write-Host "==============================================" -ForegroundColor Cyan
Write-Host " KINETIC TEXT ENCODING FIX COMPLETE" -ForegroundColor Green
Write-Host "==============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Da bo ky tu Unicode text separator va thay bang CSS diamond." -ForegroundColor Yellow
Write-Host "Loi hien thi 'a.../mojibake' se khong con phu thuoc encoding nua." -ForegroundColor Yellow
Write-Host ""
Write-Host "Chay tiep:" -ForegroundColor Cyan
Write-Host "npm run build"
Write-Host "npm run dev -- --force"
Write-Host ""
