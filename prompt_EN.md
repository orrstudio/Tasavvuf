# Prompt for refactoring Tasavvuf website into multi-page static site

## Project Overview
- **Type**: Multi-page static website using plain HTML/CSS.
- **Technical components**:
  - `index.html` – only the menu (large buttons, identical to current `MenuPageDIV`).
  - `pages/` – subfolders for each menu section; each button is a separate HTML file inside its section folder.
  - `pages/info/about.html` – page with information from the footer.
  - `CSS/Main.css` – all styles, including media queries for responsiveness.
  - `fonts/` – local fonts.
  - `icons/` – SVG icons: `burger.svg` (hamburger).
  - `scripts/` – non-navigation scripts (e.g., `date.js`).
- **Architecture**:
  - `index.html` – only menu (list of large buttons).
  - `pages/` – each file represents a separate section (ÖNSÖZ, MİHR VAKFI, GÖREVLER, etc.).
  - In each section file:
    - **Hamburger button** (icon like the current menu button) in the top right corner, linking back to `index.html`.
    - Section content (text, links, images) – taken from the corresponding block of the current `index.html`.
  - Page `pages/info/about.html` contains footer information.
- **Formatting rules**:
  - **Site language**: all content in Turkish (headings, meta tags, text).
  - **Comments**: in code (HTML, CSS, JS) – comments in Russian.
  - **Names**: file, folder, class, id names – only English.

## Tasks

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
  info/
    about.html
CSS/
  Main.css
fonts/
  NotoSerif-Regular.woff2
  ...
icons/
  burger.svg        ← hamburger icon
scripts/
  date.js           ← example non-navigation script (load only where needed)
```

### 2. Make `index.html` – only menu (copy current menu from `MenuPageDIV` and replace JavaScript functions with regular links)

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <title>TASAVVUFİ HAYAT</title>
  <link rel="stylesheet" href="CSS/Main.css">
  <!-- Scripts NOT loaded in index.html – they are loaded only where needed -->
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

> **Important**: Classes `button` are added to links so they are styled as current buttons via `.GroupButton button`. If necessary, add CSS selector `.button` with the same styles.

### 3. Create each section file (example `pages/tasavvuf/onsoz.html`)

**Exact selectors and content from `index.html`**
- **ÖNSÖZ**: copy block with `id="GorevDIVON"` and heading `id="GorevPageNameDIVON"`.
- **MİHR VAKFI**: copy block with `id="GorevDIVMV"` and heading `id="GorevPageNameDIVMV"`.
- **GÖREVLER**: copy block with `id="GorevDIVGG"` and heading `id="GorevPageNameDIVGG"`.
- **VİRD**: copy block with `id="GorevDIVVR"` and heading `id="GorevPageNameDIVVR"`.
- **ESMAÜL HÜSNA**: copy block with `id="GorevDIVES"` and heading `id="GorevPageNameDIVES"`.
- **NAMAZ DIRECTORIES**: for each button `NamazFunctionX` copy blocks `id="NamazDIVX"` and heading `id="PageNameDIVX"`.
- **DUA DIRECTORIES**: similarly `DuaFunctionX` → `id="DuaDIVX"` + `id="DuaPageNameDIVX"`.
- **DİGER**: similarly `DigerFunctionX` → `id="DigerDIVX"` + `id="DigerPageNameDIVX"`.

**Example real content for `onsoz.html`** (from `index.html`):
```html
<div class="content">
  <p>&nbsp; &nbsp; Sevgili okuyucular, Allah ile O'nun en kıymetli yaratığı olan insan arasındaki en büyük
  ilişki
  ... (full text of block `GorevDIVON`)
  </p>
</div>
```

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <title>ÖNSÖZ – TASAVVUFİ HAYAT</title>
  <link rel="stylesheet" href="../CSS/Main.css">
  <!-- Load scripts only if needed on this page -->
  <!-- Example: if date is needed -->
  <script src="../scripts/date.js"></script>
</head>
<body>
  <!-- Hamburger button → returns to index.html (menu) -->
  <a href="../index.html" class="home-btn">
    <img src="../icons/burger.svg" alt="Menü" width="24" height="24">
  </a>

  <div class="content">
    <!-- ÖNSÖZ content taken from the corresponding block of current index.html -->
    … (text, links, images) …
  </div>

  <!-- Footer not included – information moved to about.html -->
</body>
</html>
```

> **Section content** – copy the corresponding block from current `index.html` (e.g., for ÖNSÖZ it is block with `id="GorevDIVON"` and related heading `GorevPageNameDIVON`).
> All external links (e.g., to `mihr.com`) must open in a new window: `target="_blank" rel="noopener noreferrer"`.
> Hamburger icon – local SVG file (`icons/burger.svg`), visually matching the current menu button.

### 4. Update `Main.css`

**Copy current button styles and add new ones**
- Copy styles of current buttons from `.GroupButton button` and apply to class `.button`.
- Add styles for hamburger button `.home-btn` (as shown below).

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
   right: 10px; /* top right, like current menu button */
   background-color: #21262D;
   border: 0.05em solid #8B949E;
   border-radius: 0.5em;
   color: #8B949E;
   padding: 8px 12px;
   font-size: 1.5em; /* approx 24px */
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

### 5. Create page `pages/info/about.html`

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <title>Hakkımızda – TASAVVUFİ HAYAT</title>
  <link rel="stylesheet" href="../CSS/Main.css">
  <!-- Load scripts only if needed -->
  <script src="../scripts/date.js"></script>
</head>
<body>
  <!-- Hamburger button → returns to index.html (menu) -->
  <a href="../index.html" class="home-btn">
    <img src="../icons/burger.svg" alt="Menü" width="24" height="24">
  </a>

  <div class="content">
    <!-- Information from footer of current index.html (in Turkish) -->
    … (full footer text) …
  </div>
</body>
</html>
```

> **Content of about.html** – copy information from footer of current `index.html` (if any) or create a new page with site information, contacts, etc.
> **Important**: all text – in Turkish.

### 6. Testing
- Open each page (`pages/**/*.html`) in browser.
- Ensure:
  1. Hamburger button returns to `index.html` (menu).
  2. Menu buttons work and lead to corresponding pages.
  3. Styles display consistently on all pages.
  4. External links (`mihr.com`) open in **new window**.
  5. Scripts (e.g., `date.js`) are loaded **only where they are actually needed** (in `about.html` and in sections that require them).
  6. No JavaScript errors related to navigation (everything implemented via regular links).
  7. Site is responsive for mobile devices (media queries).
  8. All file and folder names are in English.
  9. All user content is in Turkish; comments in code are in Russian.

## Importance
- **Navigation** implemented via regular links (`<a>`), without JavaScript visibility switching.
- **Unique URLs** – each page (`pages/.../*.html`) has its own address space and can be shared.
- **External links** (`https://mihr.com/...`) keep their attributes `target="_blank" rel="noopener noreferrer"` and open in a new window.
- **Fonts/icons** are in local folders (`fonts/`, `icons/`) and are linked via `<link>` and `<img>` in HTML.
- **Scripts** are in folder `scripts/` and are loaded via `<script src="...">` **only where they are actually needed** (not in `index.html`).
- **Footer** removed from all pages; its content moved to separate page `about.html`.
- **Responsiveness** ensured via media queries in CSS.
- **Localization**: all site content is in Turkish; code comments are in Russian.
- **Naming**: file, folder, class, id names are in English.
