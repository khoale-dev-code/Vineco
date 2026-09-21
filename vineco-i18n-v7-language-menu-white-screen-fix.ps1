$ErrorActionPreference = "Stop"

# ============================================================
# VinEco I18N V7
# Fix language menu white-screen/runtime crash
# Windows PowerShell 5.1 / PowerShell 7 safe
# ============================================================

$projectRoot = (Get-Location).Path
$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$backupRoot = Join-Path $env:TEMP "vineco-i18n-v7-backup-$timestamp"
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

$scopePath = Join-Path $projectRoot "src\i18n\I18nScope.jsx"
$headerPath = Join-Path $projectRoot "src\components\layout\Header.jsx"
$switcherPath = Join-Path $projectRoot "src\components\layout\LanguageSwitcher.jsx"

$targetFiles = @(
    "src\i18n\I18nScope.jsx",
    "src\components\layout\Header.jsx",
    "src\components\layout\LanguageSwitcher.jsx"
)

$protectedFiles = @(
    "src\data\productCatalog.js",
    "src\pages\ProductsPage.jsx",
    "src\pages\ProductDetailPage.jsx",
    "src\styles\pages\product-detail.css",
    "src\data\serviceContent.js",
    "src\pages\ServicePage.jsx"
)

function Assert-FileExists {
    param([string]$FilePath)

    if (-not (Test-Path -LiteralPath $FilePath -PathType Leaf)) {
        throw "Required file not found: $FilePath"
    }
}

function Get-FileSha {
    param([string]$RelativePath)

    $fullPath = Join-Path $projectRoot $RelativePath
    Assert-FileExists $fullPath
    return (Get-FileHash -LiteralPath $fullPath -Algorithm SHA256).Hash
}

function Read-Utf8Text {
    param([string]$FilePath)
    return [System.IO.File]::ReadAllText($FilePath, [System.Text.Encoding]::UTF8).Replace("`r`n", "`n")
}

function Write-Utf8Text {
    param(
        [string]$FilePath,
        [string]$Content
    )
    [System.IO.File]::WriteAllText($FilePath, $Content, $utf8NoBom)
}

Write-Host ""
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host " VINECO I18N V7 - LANGUAGE MENU WHITE-SCREEN FIX" -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "Project : $projectRoot"
Write-Host "Backup  : $backupRoot"
Write-Host ""

Assert-FileExists (Join-Path $projectRoot "package.json")
foreach ($relativePath in $targetFiles) {
    Assert-FileExists (Join-Path $projectRoot $relativePath)
}

$protectedHashes = @{}
foreach ($relativePath in $protectedFiles) {
    $protectedHashes[$relativePath] = Get-FileSha $relativePath
}

New-Item -ItemType Directory -Path $backupRoot -Force | Out-Null
foreach ($relativePath in $targetFiles) {
    $sourcePath = Join-Path $projectRoot $relativePath
    $backupPath = Join-Path $backupRoot $relativePath
    $backupDirectory = Split-Path -Parent $backupPath

    New-Item -ItemType Directory -Path $backupDirectory -Force | Out-Null
    Copy-Item -LiteralPath $sourcePath -Destination $backupPath -Force
}

try {
    Write-Host "[1/6] Replacing I18nScope with runtime-safe implementation..." -ForegroundColor Yellow

    $scopeCode = @'
import { cloneElement, isValidElement } from "react";
import { useTranslation } from "react-i18next";
import { normalizeTranslationKey } from "./index";

const HOST_TRANSLATABLE_PROPS = new Set([
  "aria-label",
  "alt",
  "placeholder",
  "title",
]);

const SKIP_CUSTOM_PROPS = new Set([
  "className",
  "style",
  "src",
  "srcSet",
  "sizes",
  "href",
  "to",
  "id",
  "name",
  "type",
  "value",
  "defaultValue",
  "method",
  "target",
  "rel",
  "role",
  "htmlFor",
  "loading",
  "decoding",
  "referrerPolicy",
  "viewBox",
  "fill",
  "stroke",
  "d",
  "width",
  "height",
  "key",
  "ref",
  "dangerouslySetInnerHTML",
  "icon",
  "image",
  "imageFit",
  "imagePosition",
  "mediaPosition",
  "contain",
  "end",
  "mobile",
  "dark",
]);

const REACT_PORTAL_TYPE = Symbol.for("react.portal");

function isReactPortal(value) {
  return Boolean(
    value &&
      typeof value === "object" &&
      value.$$typeof === REACT_PORTAL_TYPE,
  );
}

function isPlainObject(value) {
  if (!value || typeof value !== "object") return false;

  const prototype = Object.getPrototypeOf(value);

  return (
    prototype === Object.prototype ||
    prototype === null
  );
}

function translateString(
  value,
  i18n,
  namespaces,
  language,
) {
  const key = normalizeTranslationKey(value);

  if (!key || language === "en") {
    return value;
  }

  for (const ns of namespaces) {
    if (i18n.exists(key, { ns, lng: language })) {
      const translated = i18n.t(key, {
        ns,
        lng: language,
      });

      const leading =
        value.match(/^\s*/)?.[0] || "";

      const trailing =
        value.match(/\s*$/)?.[0] || "";

      return (
        leading +
        String(translated) +
        trailing
      );
    }
  }

  return value;
}

function localizeArray(
  value,
  i18n,
  namespaces,
  language,
  propName,
  seen,
) {
  if (seen.has(value)) {
    return seen.get(value);
  }

  const next = [];
  seen.set(value, next);

  for (const item of value) {
    next.push(
      localizeValue(
        item,
        i18n,
        namespaces,
        language,
        propName,
        seen,
      ),
    );
  }

  return next;
}

function localizeObject(
  value,
  i18n,
  namespaces,
  language,
  seen,
) {
  if (seen.has(value)) {
    return seen.get(value);
  }

  const next = {};
  seen.set(value, next);

  for (const [key, item] of Object.entries(value)) {
    next[key] = SKIP_CUSTOM_PROPS.has(key)
      ? item
      : localizeValue(
          item,
          i18n,
          namespaces,
          language,
          key,
          seen,
        );
  }

  return next;
}

function localizeValue(
  value,
  i18n,
  namespaces,
  language,
  propName = "",
  seen = new WeakMap(),
) {
  if (typeof value === "string") {
    return translateString(
      value,
      i18n,
      namespaces,
      language,
    );
  }

  if (
    value === null ||
    value === undefined ||
    typeof value !== "object"
  ) {
    return value;
  }

  // React Portals are runtime objects, not translatable data.
  // Iterating/cloning a Portal as a plain object can crash React.
  if (isReactPortal(value)) {
    return value;
  }

  if (Array.isArray(value)) {
    return localizeArray(
      value,
      i18n,
      namespaces,
      language,
      propName,
      seen,
    );
  }

  if (isValidElement(value)) {
    return localizeElement(
      value,
      i18n,
      namespaces,
      language,
      seen,
    );
  }

  // Only recurse into plain application data.
  // Preserve DOM nodes, refs, class instances, Map/Set and
  // other runtime objects by identity.
  if (
    isPlainObject(value) &&
    !SKIP_CUSTOM_PROPS.has(propName)
  ) {
    return localizeObject(
      value,
      i18n,
      namespaces,
      language,
      seen,
    );
  }

  return value;
}

function localizeElement(
  element,
  i18n,
  namespaces,
  language,
  seen,
) {
  if (!isValidElement(element)) {
    return element;
  }

  const isHost =
    typeof element.type === "string";

  const nextProps = {};

  for (
    const [key, value] of
    Object.entries(element.props || {})
  ) {
    if (key === "children") {
      nextProps.children =
        localizeValue(
          value,
          i18n,
          namespaces,
          language,
          key,
          seen,
        );

      continue;
    }

    if (isHost) {
      nextProps[key] =
        HOST_TRANSLATABLE_PROPS.has(key)
          ? localizeValue(
              value,
              i18n,
              namespaces,
              language,
              key,
              seen,
            )
          : value;

      continue;
    }

    nextProps[key] =
      SKIP_CUSTOM_PROPS.has(key)
        ? value
        : localizeValue(
            value,
            i18n,
            namespaces,
            language,
            key,
            seen,
          );
  }

  return cloneElement(
    element,
    nextProps,
  );
}

export default function I18nScope({
  namespaces = ["common"],
  children,
}) {
  const nsList =
    Array.isArray(namespaces)
      ? namespaces
      : [namespaces];

  const { i18n } =
    useTranslation(nsList);

  const language = String(
    i18n.resolvedLanguage ||
      i18n.language ||
      "en",
  )
    .toLowerCase()
    .split(/[-_]/)[0];

  if (language === "en") {
    return children;
  }

  return localizeValue(
    children,
    i18n,
    nsList,
    language,
    "children",
    new WeakMap(),
  );
}
'@

    Write-Utf8Text -FilePath $scopePath -Content ($scopeCode.TrimStart() + "`n")

    Write-Host "[2/6] Making Header mobile Portal translation-safe..." -ForegroundColor Yellow

    $header = Read-Utf8Text $headerPath

    $portalWrappedMarker = "? createPortal(`n          <I18nScope namespaces={[`"common`",`"products`"]}>"

    if (-not $header.Contains($portalWrappedMarker)) {
        $portalStart = "? createPortal(`n          <div`n            role=`"dialog`""
        $portalStartReplacement = "? createPortal(`n          <I18nScope namespaces={[`"common`",`"products`"]}>`n          <div`n            role=`"dialog`""

        if (-not $header.Contains($portalStart)) {
            throw "Could not find expected createPortal start marker in Header.jsx."
        }

        $header = $header.Replace($portalStart, $portalStartReplacement)

        $portalEnd = "          </div>,`n          document.body,`n        )"
        $portalEndReplacement = "          </div>`n          </I18nScope>,`n          document.body,`n        )"

        if (-not $header.Contains($portalEnd)) {
            throw "Could not find expected createPortal end marker in Header.jsx."
        }

        $header = $header.Replace($portalEnd, $portalEndReplacement)
        Write-Utf8Text -FilePath $headerPath -Content $header
    }
    else {
        Write-Host "Header Portal already wrapped; skipping duplicate patch." -ForegroundColor DarkGray
    }

    Write-Host "[3/6] Making LanguageSwitcher transition race-safe..." -ForegroundColor Yellow

    $switcher = Read-Utf8Text $switcherPath

    $oldSelect = @'
  function selectLanguage(value) {
    if (!SUPPORTED_LANGUAGES.includes(value)) return;
    if (value !== current) void i18n.changeLanguage(value);
    closeMenu();
  }
'@

    $newSelect = @'
  async function selectLanguage(value) {
    if (!SUPPORTED_LANGUAGES.includes(value)) return;

    const shouldChange =
      value !== current;

    // Close first so the language re-render cannot race with
    // an open popover/focus transition.
    setOpen(false);

    if (shouldChange) {
      try {
        await i18n.changeLanguage(value);
      } catch (error) {
        console.error(
          "[VinEco i18n] Failed to change language:",
          error,
        );
      }
    }

    window.requestAnimationFrame(() => {
      triggerRef.current?.focus({
        preventScroll: true,
      });
    });
  }
'@

    if (-not $switcher.Contains("async function selectLanguage(value)")) {
        if (-not $switcher.Contains($oldSelect.TrimEnd())) {
            throw "Could not find expected selectLanguage block in LanguageSwitcher.jsx."
        }

        $switcher = $switcher.Replace($oldSelect.TrimEnd(), $newSelect.TrimEnd())
        Write-Utf8Text -FilePath $switcherPath -Content $switcher
    }
    else {
        Write-Host "LanguageSwitcher already uses safe async transition; skipping duplicate patch." -ForegroundColor DarkGray
    }

    Write-Host "[4/6] Validating runtime safety invariants..." -ForegroundColor Yellow

    $scopeCheck = Read-Utf8Text $scopePath
    $headerCheck = Read-Utf8Text $headerPath
    $switcherCheck = Read-Utf8Text $switcherPath
    $appCheck = Read-Utf8Text (Join-Path $projectRoot "src\app\App.jsx")

    if (-not $scopeCheck.Contains('const REACT_PORTAL_TYPE = Symbol.for("react.portal");')) {
        throw "Validation failed: React Portal guard missing from I18nScope."
    }

    if (-not $scopeCheck.Contains('if (isReactPortal(value))')) {
        throw "Validation failed: I18nScope does not preserve React Portals."
    }

    if (-not $scopeCheck.Contains('"ref",')) {
        throw "Validation failed: I18nScope must skip ref props."
    }

    if (-not $scopeCheck.Contains('function isPlainObject(value)')) {
        throw "Validation failed: plain-object guard missing."
    }

    if (-not $scopeCheck.Contains('new WeakMap()')) {
        throw "Validation failed: cycle protection missing."
    }

    if (-not $headerCheck.Contains("<I18nScope namespaces={[`"common`",`"products`"]}>`n          <div`n            role=`"dialog`"")) {
        throw "Validation failed: mobile Portal content is not wrapped in I18nScope."
    }

    $portalCount = ([regex]::Matches($headerCheck, 'createPortal\(')).Count
    if ($portalCount -ne 1) {
        throw "Validation failed: expected exactly one createPortal() in Header.jsx; found $portalCount."
    }

    if (-not $switcherCheck.Contains('async function selectLanguage(value)')) {
        throw "Validation failed: LanguageSwitcher safe select function missing."
    }

    if (-not $switcherCheck.Contains('await i18n.changeLanguage(value);')) {
        throw "Validation failed: LanguageSwitcher does not await language change."
    }

    if (-not $switcherCheck.Contains('window.requestAnimationFrame')) {
        throw "Validation failed: focus restore is missing."
    }

    if (-not $appCheck.Contains('HashRouter')) {
        throw "Validation failed: HashRouter invariant failed."
    }

    Write-Host "React Portal safety      : PASS" -ForegroundColor Green
    Write-Host "I18nScope object safety  : PASS" -ForegroundColor Green
    Write-Host "Language switch sequence : PASS" -ForegroundColor Green
    Write-Host "HashRouter               : PASS" -ForegroundColor Green

    Write-Host "[5/6] Verifying approved Product/Service files were not changed..." -ForegroundColor Yellow

    foreach ($relativePath in $protectedFiles) {
        $afterHash = Get-FileSha $relativePath

        if ($afterHash -ne $protectedHashes[$relativePath]) {
            throw "Protected file changed unexpectedly: $relativePath"
        }
    }

    Write-Host "Protected files: PASS" -ForegroundColor Green

    Write-Host "[6/6] Running production build..." -ForegroundColor Yellow

    Push-Location $projectRoot
    try {
        & npm.cmd run build

        if ($LASTEXITCODE -ne 0) {
            throw "npm run build failed with exit code $LASTEXITCODE."
        }
    }
    finally {
        Pop-Location
    }

    Write-Host ""
    Write-Host "============================================================" -ForegroundColor Cyan
    Write-Host " VINECO I18N V7 COMPLETED" -ForegroundColor Green
    Write-Host "============================================================" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Portal runtime crash fix : PASS" -ForegroundColor Green
    Write-Host "Language menu state      : PASS" -ForegroundColor Green
    Write-Host "Mobile menu translation  : preserved" -ForegroundColor Green
    Write-Host "HashRouter               : preserved" -ForegroundColor Green
    Write-Host "Product/Service layout   : unchanged" -ForegroundColor Green
    Write-Host "Build                    : PASS" -ForegroundColor Green
    Write-Host "Backup                   : $backupRoot"
    Write-Host ""
    Write-Host "Next:" -ForegroundColor Cyan
    Write-Host "npm run dev -- --force"
    Write-Host "Then use Ctrl + Shift + R in Chrome."
}
catch {
    Write-Host ""
    Write-Host "Patch/build failed. Restoring backup..." -ForegroundColor Red

    foreach ($relativePath in $targetFiles) {
        $backupPath = Join-Path $backupRoot $relativePath
        $destinationPath = Join-Path $projectRoot $relativePath

        if (Test-Path -LiteralPath $backupPath) {
            Copy-Item -LiteralPath $backupPath -Destination $destinationPath -Force
        }
    }

    Write-Host "Restore complete: $backupRoot" -ForegroundColor Yellow
    throw
}
