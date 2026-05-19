# Prompt for restructuring the Tasavvuf website

## Project Overview
- **Type**: Multi-page website using plain HTML/CSS.
- **Technical components**:
  - `index.html` — menu only (large buttons, like the current `MenuPageDIV`).
  - `pages/` — subfolders for each menu section; each subfolder contains HTML files for each button except those that link to external URLs.
  - `pages/diger/about.html` — page with information from the footer.
  - `css/main.css` — all styles, including media queries for responsiveness.
  - `fonts/` — local fonts.
  - `scripts/` — non-navigation scripts (e.g., `date.js`).
- **Architecture**:
  - `index.html` — menu only (list of large buttons).
  - `pages/` — each file represents a separate section (ÖNSÖZ, MİHR VAKFI, GÖREVLER, etc.).
  - In each section file:
    - **Hamburger button** (icon like the current menu button) in the top-right corner, linking back to `index.html`.
    - Section content (text, links, images) — taken from the corresponding block of the current `index.html`.
  - `pages/diger/about.html` contains information from the footer.
- **Formatting rules**:
  - **Site language**: all content in Turkish (headings, meta tags, text).
  - **Comments**: code comments (HTML, CSS, JS) should be in Russian.
  - **Naming**: file names, folder names, class names, ids — English only.

## What needs to be done

### 1. Create file structure
```text
index.html
pages/
  tasavvuf/
    onsoz.html
    mihr_vakfi.html
    gorevler.html
    vird.html
    esmaul_husna.html
  namazlar/
    farz_namazlar.html
    hacet_namaz.html
    ...
  dualar/
    namaz_dualari.html
    ...
  diger/
    sosyal_medya.html
    mobil_apps.html
    takvim.html
    yazili_eserler.html
    kur_an_kerim.html
    sohbetler.html
    soru_cevaplar.html
    about.html
css/
  main.css
fonts/
  NotoSerif-Regular.woff2
  ...
scripts/
  date.js           ← example non-navigation script (include only where needed)
```

### 2. Make `index.html` – menu only (copy current menu from `MenuPageDIV` and replace JavaScript functions with regular links)

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <title>TASAVVUFİ HAYAT</title>
  <link rel="stylesheet" href="CSS/Main.css">
  <!-- Scripts NOT included in index.html – they are included only where needed -->
</head>
<body>
  <!-- Menu – copied from current MenuPageDIV -->
  <div class="GroupButton">
    <!-- TASAVVUF -->
    <p class="aPageName"><br>TASAVVUF</p>
    <a href="pages/tasavvuf/onsoz.html" class="GroupButton button">ÖNSÖZ</a>
    <a href="pages/tasavvuf/mihr_vakfi.html" class="GroupButton button">MİHR VAKFI</a>
    <a href="pages/tasavvuf/gorevler.html" class="GroupButton button">GÖREVLER</a>
    <a href="pages/tasavvuf/vird.html" class="GroupButton button">VİRD</a>
    <a href="pages/tasavvuf/esmaul_husna.html" class="GroupButton button">ESMAÜL HÜSNA</a>
  </div>

  <div class="GroupButton">
    <!-- NAMAZLAR -->
    <p class="aPageName">NAMAZLAR</p>
    <a href="pages/namazlar/farz_namazlar.html" class="GroupButton button">FARZ NAMAZLAR</a>
    <a href="pages/namazlar/hacet_namaz.html" class="GroupButton button">HACET NAMAZI</a>
    <a href="pages/namazlar/hamd_sekur.html" class="GroupButton button">HAMD VE ŞÜKÜR</a>
    <a href="pages/namazlar/tovebe_namaz.html" class="GroupButton button">TÖVBE NAMAZI</a>
    <a href="pages/namazlar/istihafe_namaz.html" class="GroupButton button">İSTİHARE NAMAZI</a>
  </div>

  <div class="GroupButton">
    <!-- DUALAR -->
    <p class="aPageName">DUALAR</p>
    <a href="pages/dualar/namaz_dualari.html" class="GroupButton button">NAMAZ DUALARI</a>
    <a href="pages/dualar/tovebe_istigfar.html" class="GroupButton button">TÖVBE VE İSTİĞFAR</a>
    <a href="pages/dualar/sofra_dualari.html" class="GroupButton button">SOFRA DUALARI</a>
    <a href="pages/dualar/diger_dualar.html" class="GroupButton button">DİGER DUALAR</a>
  </div>

  <div class="GroupButton">
    <!-- DİGER (including HAKKIMIZDA) -->
    <p class="aPageName">DİGER</p>
    <a href="pages/diger/sosyal_medya.html" class="GroupButton button">SOSYAL MEDYA</a>
    <a href="pages/diger/mobil_apps.html" class="GroupButton button">MOBILE APPS</a>
    <a href="pages/diger/takvim.html" class="GroupButton button">TAKVİM</a>
    <a href="pages/diger/yazili_eserler.html" class="GroupButton button">YAZILI ESERLER</a>
    <a href="pages/diger/kur_an_kerim.html" class="GroupButton button">KUR'ÂN-I KERİM</a>
    <a href="pages/diger/sohbetler.html" class="GroupButton button">SOHBETLER</a>
    <a href="pages/diger/soru_cevaplar.html" class="GroupButton button">SORU ve CEVAPLAR</a>
    <a href="pages/info/about.html" class="GroupButton button">HAKKIMIZDA</a>
  </div>
</body>
</html>
```

> **Important:** The `button` class is added to links so they are styled like the current buttons via `.GroupButton button`. If necessary, add a `.button` selector with the same styles in CSS.

### 3. Create each section file (example `pages/tasavvuf/onsoz.html`)

**Exact selectors and content from `index.html`**
- **ÖNSÖZ**: copy the block with `id="GorevDIVON"` and the heading `id="GorevPageNameDIVON"`.
- **MİHR VAKFI**: copy the block with `id="GorevDIVMV"` and the heading `id="GorevPageNameDIVMV"`.
- **GÖREVLER**: copy the block with `id="GorevDIVGG"` and the heading `id="GorevPageNameDIVGG"`.
- **VİRD**: copy the block with `id="GorevDIVVR"` and the heading `id="GorevPageNameDIVVR"`.
- **ESMAÜL HÜSNA**: copy the block with `id="GorevDIVES"` and the heading `id="GorevPageNameDIVES"`.
- **NAMAZ section**: for each `NamazFunctionX` button, copy the `id="NamazDIVX"` block and `id="PageNameDIVX"` heading.
- **DUA section**: similarly `DuaFunctionX` → `id="DuaDIVX"` + `id="DuaPageNameDIVX"`.
- **DİGER section**: similarly `DigerFunctionX` → `id="DigerDIVX"` + `id="DigerPageNameDIVX"`.

**Notes on DİGER buttons**:
- The `TAKVİM`, `KUR'ÂN-I KERİM`, `SOHBETLER`, `SORU ve CEVAPLAR` buttons open external URLs (mihr.com) — they have no internal content. Add them as regular menu links (`<a href="URL" target="_blank" rel="noopener noreferrer">`) so that clicking opens the external site in a new window.

**Example actual content for `onsoz.html`** (from `index.html`):
```html
<div class="content">
  <p>&nbsp; &nbsp; Sevgili okuyucular, Allah ile O'nun en kıymetli yaratığı olan insan arasındaki en büyük
  ilişki
  ... (full text of `GorevDIVON`)
  </p>
</div>
```

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <title>ÖNSÖZ – TASAVVUFİ HAYAT</title>
  <link rel="stylesheet" href="../css/main.css">
  <!-- Include scripts only if needed on this page -->
  <!-- Example: if date is needed -->
  <script src="../scripts/date.js"></script>
</head>
<body>
  <!-- Hamburger button → returns to index.html (menu) -->
  <a href="../index.html" class="home-btn">
    <!-- Hamburger icon — Unicode character ☰ -->
    ☰
  </a>

  <div class="content">
    <!-- ÖNSÖZ content taken from the corresponding block of the current index.html -->
    … (text, links, images) …
  </div>

  <!-- Footer is not included – its content moved to about.html -->
</body>
</html>
```

> **Section content** – copy the corresponding block from the current `index.html` (e.g., for ÖNSÖZ it's the block with `id="GorevDIVON"` and the associated heading `GorevPageNameDIVON`).  
> All external links (e.g., to `mihr.com`) must open in a new window: `target="_blank" rel="noopener noreferrer"`.  
> **Hamburger icon**: use Unicode character ☰

> **Note about resources**: if the project is missing `fonts/` and `scripts/` directories, they must be created. The `date.js` file is created only if it is actually needed for functionality.

### 4. Update `main.css`

**Copy current button styles and add new ones**
- Copy current button styles from `.GroupButton button` and apply to the `.button` class.
- Add styles for the hamburger button `.home-btn` (as shown below).

```css
/* Copy current button styles from .GroupButton button */
.button {
   background-color: #21262D;
   border: 0.05em solid #8B949E;
   border-radius: 0.5em;
   color: #8B949E;
   width: 90%;
   display: inline-block;
   text-align: center;
   font-size: 2.7em;
   padding: 0.25em 0 0.25em 0;
   margin: 0 0 0.2em 0;
   text-decoration: none; /* for links */
}
.button:hover {
   background-color: #555;
   color: #fff;
}

/* Styles for hamburger button */
.home-btn {
   position: fixed;
   top: 10px;
   right: 10px; /* on the right, like current menu button */
   background-color: #21262D;
   border: 0.05em solid #8B949E;
   border-radius: 0.5em;
   color: #8B949E;
   padding: 8px 12px;
   font-size: 1.5em; /* approximately 24px */
   text-decoration: none;
   z-index: 1000;
}
.home-btn:hover {
   background-color: #555;
   color: #fff;
}

/* Responsiveness (example) */
@media (max-width: 768px) {
   .button, .home-btn {
     font-size: 2em;
     padding: 6px 10px;
   }
}
```

### 5. Create page `pages/diger/about.html`

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <title>Hakkımızda – TASAVVUFİ HAYAT</title>
  <link rel="stylesheet" href="../css/main.css">
  <!-- Include scripts only if needed -->
  <script src="../scripts/date.js"></script>
</head>
<body>
  <!-- Hamburger button → returns to index.html (menu) -->
  <a href="../index.html" class="home-btn">
    ☰
  </a>

  <div class="content">
    <!-- Information from the footer of the current index.html (in Turkish) -->
    … (full footer text) …
  </div>
</body>
</html>
```

> **about.html content** – copy the information from the footer of the current `index.html`.  
> **Important:** all text is in Turkish.

### 6. Testing
- Open each page (`pages/**/*.html`) in the browser.
- Verify that:
  1. The hamburger button returns to `index.html` (menu).
  2. Menu buttons work and lead to the corresponding pages.
  3. Styles display consistently across all pages.
  4. External links (`mihr.com`) open in a **new window**.
  5. Scripts (e.g., `date.js`) are loaded **only where they are actually needed** (in sections that require them).
  6. There are no JavaScript errors related to navigation (everything is implemented via regular links).
  7. The site is adapted for mobile devices (media queries).
  8. All file and folder names are in English lowercase.
  9. All user content is in Turkish; code comments are in Russian.

## Importance
- **Navigation** is implemented via regular links (`<a>`), without JavaScript visibility toggling.
- **Unique URLs** – each page (`pages/.../*.html`) has its own address space.
- **External links** (`https://mihr.com/...`) retain their `target="_blank" rel="noopener noreferrer"` attributes and open in a new window.
- **Fonts/icons** are in local folders (`fonts/` or `icons/`) and are linked via `<link>` and `<img>` in HTML.
- **Scripts** are placed in the `scripts/` folder and included via `<script src="...">` **only where they are actually needed** (not in `index.html`).
- **Footer** is removed from all pages; its content moved to a separate `about.html` page.
- **Responsiveness** is ensured via CSS media queries.
- **Localization**: all site content is in Turkish; code comments are in Russian.
- **Naming**: file names, folder names, class names, ids — in English.