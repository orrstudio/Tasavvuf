# Prompt for restructuring the Tasavvuf website

## Project Overview
- **Type**: Multi-page website using plain HTML/CSS.
- **Technical components**:
  - `index.html` — menu only (large buttons, like the current `MenuPageDIV`).
  - `pages/` — subfolders for each menu section.
  - `css/main.css` — main styles.
  - `css/icons.css` — **optimized** local styles for icons (only used ones).
  - `fonts/` — local fonts and icon-fonts (optimized to include only used glyphs).
  - `scripts/` — local non-navigation scripts (jQuery is removed if not needed).

- **Resource Management (Local & Optimized)**:
  - **No CDNs**: All external libraries (jQuery, Font Awesome, etc.) must be downloaded, localized, and optimized.
  - **CSS Purge**: Remove all unused CSS rules from icon libraries. Keep only used ones: `bi-list`, `fa-radio`, `fa-tv`, `fa-globe`, and brands (`facebook`, `instagram`, `tiktok`, `youtube`).
  - **JS Cleanup**: If `scripts/date.js` doesn't require jQuery, do not include jQuery in the project.

- **Core Architecture**:
  - `index.html` — acts as the main landing page/menu.
  - `pages/` — structured subdirectories containing individual section pages.
  - **Single Source of Truth**: Content for each page is extracted from specific `id` blocks in the original `index.html`.

- **Formatting Rules**:
  - **Language**: Turkish for all user-facing content (headings, meta, text).
  - **Comments**: Russian for internal code comments.
  - **Naming**: English for all technical identifiers (filenames, folders, classes, ids).

---

## Technical Details & Examples

### 1. Base Layout (Master Template)
All pages in `pages/` must follow this exact structure to ensure consistency.

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{PAGE_NAME} – TASAVVUFİ HAYAT</title>
    
    <!-- Paths must be relative to the file depth -->
    <link rel="stylesheet" href="../../css/icons.css"> 
    <link rel="stylesheet" href="../../css/main.css">
</head>
<body>
    <div class="GeneralDIV">
        <!-- Persistent Navigation: Original .menuBTN style -->
        <div class="navbarDiv">
            <nav class="navbar">
                <a href="../../index.html" class="menuBTN">
                    &nbsp;<i class="bi bi-list"></i>&nbsp;
                </a>
            </nav>
        </div>

        <!-- Section Content -->
        <div class="ContentContainer">
            <!-- Heading from {ID_PageNameDIV} -->
            <!-- Content from {ID_DIV} -->
        </div>
    </div>
    
    <!-- Included only if required by the section -->
    <script src="../../scripts/date.js"></script>
</body>
</html>
```

### 2. Menu Transformation (index.html)
Convert JavaScript-driven buttons into standard HTML links.

**Before (Current):**
```html
<button onclick="GorevFunctionON()">ÖNSÖZ</button>
```

**After (New):**
```html
<a href="pages/tasavvuf/onsoz.html" class="button">ÖNSÖZ</a>
```
*Note: Use the `.button` class to maintain the existing visual style of the large buttons.*

### 3. Path Management
All resource paths (images, CSS, JS) must be adjusted based on the directory depth.

| File Location | Path to CSS/Pict | Path to Home |
| :--- | :--- | :--- |
| `index.html` | `css/`, `pict/` | `index.html` |
| `pages/tasavvuf/onsoz.html` | `../../css/`, `../../pict/` | `../../index.html` |
| `pages/diger/about.html` | `../../css/`, `../../pict/` | `../../index.html` |

### 4. Internal Link Migration
The original content contains elements that trigger JavaScript functions for navigation. These MUST be converted to standard HTML links.

**Rules:**
- Find all attributes like `onclick="FunctionName()"` or `onclick="BtnMENU()"`.
- Replace the parent tag (or the tag itself) with an `<a>` tag.
- Map functions to their new file paths.
- Remove all JS-only attributes: `onclick`, `onmouseover`, `cursor:pointer`, etc.

**Example Conversion:**
- **Before:** `<span onclick="GorevFunctionON()" style="cursor:pointer; color:blue;">Read Preface</span>`
- **After:** `<a href="../../pages/tasavvuf/onsoz.html" style="color:blue;">Read Preface</a>`

### 5. Media Path Correction
When content is moved from `index.html` to a subfolder (e.g., `pages/tasavvuf/onsoz.html`), all image paths must be updated.

**Rule:**
- Replace `src="pict/filename.png"` with `src="../../pict/filename.png"`.
- This applies to all `<img>`, `<source>`, and CSS `url()` references found within the extracted content.

---

## What needs to be done

### 1. File Structure
```text
index.html
pages/
  tasavvuf/ (onsoz.html, mihr_vakfi.html, gorevler.html, vird.html, esmaul_husna.html)
  namazlar/ (farz_namazlar.html, hacet_namaz.html, hamd_sekur.html, ...)
  dualar/ (namaz_dualari.html, tovebe_istigfar.html, ...)
  diger/ (sosyal_medya.html, mobil_apps.html, about.html, ...)
css/ (main.css, icons.css)
fonts/ (local fonts)
scripts/ (date.js)
pict/ (images)
```

### 2. Section Extraction Mapping
- **ÖNSÖZ**: Extract from `id="GorevPageNameDIVON"` (heading) and `id="GorevDIVON"` (content).
- **MİHR VAKFI**: Extract from `id="GorevPageNameDIVMV"` and `id="GorevDIVMV"`.
- **NAMAZLAR**: Extract from `id="PageNameDIV{X}"` and `id="NamazDIV{X}"`.
- **DUALAR**: Extract from `id="DuaPageNameDIV{X}"` and `id="DuaDIV{X}"`.
- **ABOUT**: Extract from the global footer of the current `index.html`.

### 3. External Links
Links to `mihr.com` or other external domains must use `target="_blank" rel="noopener noreferrer"`.

---

## Validation Checklist
1. **Navigation**: Does the menu button on every page lead back to `index.html`?
2. **Visuals**: Are CSS and images loading correctly using relative paths?
3. **Responsive**: Does the site look good on mobile devices (viewport meta check)?
4. **Optimization**: Are `icons.css` and `fonts/` stripped of unused resources?
5. **No Errors**: Are there any console errors related to missing jQuery or navigation?
6. **Naming**: Are all new files/folders named in lowercase English?
7. **Localization**: Is all text in Turkish and all code comments in Russian?