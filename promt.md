# Промт для изменения структуры веб-сайта Tasavvuf

## Обзор проекта
- **Тип**: Многостраничный веб‑сайт на чистом HTML/CSS.  
- **Технические компоненты**:  
  - `index.html` — только меню (крупные кнопки, как в текущем `MenuPageDIV`).  
  - `pages/` — подпапки для каждого раздела меню; в каждой подпапке – HTML‑файлы для каждой кнопки кроме тех которые ведут на внешние ссылки.  
  - `pages/diger/about.html` — страница с информацией из фута.  
  - `css/main.css` — все стили, включая медиазапросы для адаптивности.  
  - `fonts/` — локальные шрифты.  
  - `scripts/` — не‑навигационные скрипты (например, `date.js`).  
- **Архитектура**:  
  - `index.html` — только меню (список крупных кнопок).  
  - `pages/` — каждый файл представляет отдельный раздел (ÖNSÖZ, MİHR VAKFI, GOREVLER и т.д.).  
  - В каждом файле‑разделе:  
    - **Гамбургер‑кнопка** (иконка как текущая кнопка меню) в правом верхнем углу, ведущая обратно к `index.html`.  
    - Содержимое раздела (текст, ссылки, изображения) — берётся из соответствующего блока текущего `index.html`.  
  - Страница `pages/diger/about.html` содержит информацию из фута.  
- **Правила оформления**:  
  - **Язык сайта**: весь контент на турецком (заголовки, мета‑теги, текст).  
  - **Комментарии**: в коде (HTML, CSS, JS) комментарии писать на русском.  
  - **Имена**: названия файлов, папок, классов, id — только английские.

## Что нужно выполнить

### 1. Создать структуру файлов
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
  date.js           ← пример не‑навигационного скрипта (подключать только там, где нужен)
```

### 2. Сделать `index.html` – только меню (скопировать текущее меню из `MenuPageDIV` и заменить JavaScript‑функции на обычные ссылки)

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <title>TASAVVUFİ HAYAT</title>
  <link rel="stylesheet" href="CSS/Main.css">
  <!-- Скрипты НЕ подключаем в index.html – они подключаются только там, где нужны -->
</head>
<body>
  <!-- Меню – скопировано из текущего MenuPageDIV -->
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
    <!-- DİGER (включая HAKKIMIZDA) -->
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

> **Важно:** Классы `button` добавлены к ссылкам, чтобы они стилизовались как текущие кнопки через `.GroupButton button`. Если необходимо, можно добавить в CSS селектор `.button` с теми же стилями.

### 3. Создать каждый файл‑раздел (пример `pages/tasavvuf/onsoz.html`)

**Точные селекторы и контент из `index.html`**
- **ÖNSÖЗ**: копировать блок с `id="GorevDIVON"` и заголовок `id="GorevPageNameDIVON"`.
- **MİHR VAKFI**: копировать блок с `id="GorevDIVMV"` и заголовок `id="GorevPageNameDIVMV"`.
- **GÖREVLER**: копировать блок с `id="GorevDIVGG"` и заголовок `id="GorevPageNameDIVGG"`.
- **VİRD**: копировать блок с `id="GorevDIVVR"` и заголовок `id="GorevPageNameDIVVR"`.
- **ESMAÜL HÜSNA**: копировать блок с `id="GorevDIVES"` и заголовок `id="GorevPageNameDIVES"`.
- **NAMAZ ДИРЕКТОРИ**: для каждой кнопки `NamazFunctionX` копировать блоки `id="NamazDIVX"` и заголовок `id="PageNameDIVX"`.
- **DUA ДИРЕКТОРИ**: аналогично `DuaFunctionX` → `id="DuaDIVX"` + `id="DuaPageNameDIVX"`.
- **ДИГЕР**: аналогично `DigerFunctionX` → `id="DigerDIVX"` + `id="DigerPageNameDIVX"`.

**Примечания к кнопкам ДИГЕР**:
- Кнопки `TAKVIM`, `KUR'ÂN-I KERİM`, `SOHBETLER`, `SORU ve CEVAPLAR` открывают внешние URL (mihr.com) — у них нет внутреннего контента. Добавить их как обычные меню-ссылки (`<a href="URL" target="_blank" rel="noopener noreferrer">`), чтобы при клике открывался внешний сайт в новом окне.

**Пример реального контента для `onsoz.html`** (из `index.html`):
```html
<div class="content">
  <p>&nbsp; &nbsp; Sevgili okuyucular, Allah ile O'nun en kıymetli yaratığı olan insan arasındaki en büyük
  ilişki
  ... (полный текст блока `GorevDIVON`)
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
  <!-- Подключаем скрипты только если они нужны на этой странице -->
  <!-- Пример: если нужна дата -->
  <script src="../scripts/date.js"></script>
</head>
<body>
  <!-- Гамбургер‑кнопка → возвращает на index.html (меню) -->
  <a href="../index.html" class="home-btn">
    <!-- Иконка гамбургера — Unicode-символ ☰ -->
    ☰
  </a>

  <div class="content">
    <!-- Содержимое ÖNSÖЗ берётся из соответствующего блока текущего index.html -->
    … (текст, ссылки, изображения) …
  </div>

  <!-- Футер не включается – информация перенесена на about.html -->
</body>
</html>
```

> **Содержимое раздела** – скопировать соответствующий блок из текущего `index.html` (например, для ÖNSÖЗ это блок с `id="GorevDIVON"` и связанный заголовок `GorevPageNameDIVON`).  
> Все внешние ссылки (например, на `mihr.com`) должны открываться в новом окне: `target="_blank" rel="noopener noreferrer"`.  
> **Иконка гамбургера**: использовать Unicode-символ ☰

> **Примечание о ресурсах**: если в проекте отсутствуют папки `fonts/` и `scripts/`, их необходимо создать. Файл `date.js` создаётся только если он реально нужен для функциональности.

### 4. Обновить `main.css`

**Копируем стили текущих кнопок и добавляем новые**
- Скопировать стили текущих кнопок из `.GroupButton button` и применить к классу `.button`.
- Добавить стили для гамбургер‑кнопки `.home-btn` (как показано ниже).

```css
/* Копируем стили текущих кнопок из .GroupButton button */
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
   text-decoration: none; /* для ссылок */
}
.button:hover {
   background-color: #555;
   color: #fff;
}

/* Стили для гамбургер‑кнопки */
.home-btn {
   position: fixed;
   top: 10px;
   right: 10px; /* справа, как текущая кнопка меню */
   background-color: #21262D;
   border: 0.05em solid #8B949E;
   border-radius: 0.5em;
   color: #8B949E;
   padding: 8px 12px;
   font-size: 1.5em; /* примерно 24px */
   text-decoration: none;
   z-index: 1000;
}
.home-btn:hover {
   background-color: #555;
   color: #fff;
}

/* Адаптивность (пример) */
@media (max-width: 768px) {
   .button, .home-btn {
     font-size: 2em;
     padding: 6px 10px;
   }
}
```

### 5. Создать страницу `pages/diger/about.html`

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <title>Hakkımızda – TASAVVUFİ HAYAT</title>
  <link rel="stylesheet" href="../css/main.css">
  <!-- Подключаем скрипты только если нужны -->
  <script src="../scripts/date.js"></script>
</head>
<body>
  <!-- Гамбургер‑кнопка → возвращает на index.html (меню) -->
  <a href="../index.html" class="home-btn">
    ☰
  </a>

  <div class="content">
    <!-- Информация из фута текущего index.html (на турецком) -->
    … (полный текст фута) …
  </div>
</body>
</html>
```

> **Содержимое about.html** – скопировать информацию из фута текущего `index.html`.  
> **Важно:** весь текст – на турецком.

### 6. Тестирование
- Открыть каждую страницу (`pages/**/*.html`) в браузере.  
- Убедиться, что:  
  1. Гамбургер‑кнопка возвращает на `index.html` (меню).  
  2. Кнопки меню работают и ведут на соответствующие страницы.  
  3. Стили отображаются одинаково на всех страницах.  
  4. Внешние ссылки (`mihr.com`) открываются в **новом окне**.  
  5. Скрипты (например, `date.js`) подгружаются **только там, где они действительно нужны** (в тех разделах, где требуется).  
  6. Нет JavaScript‑ошибок, связанных с навигацией (всё реализовано через обычные ссылки).  
  7. Сайт адаптирован для мобильных устройств (медиазапросы).  
  8. Все названия файлов и папок на английском маленькими буквами.  
  9. Весь пользовательский контент – на турецком; комментарии в коде – на русском.

## Важность
- **Навигация** реализована через обычные ссылки (`<a>`), без JavaScript‑переключения видимости.  
- **Уникальные URL** – каждая страница (`pages/.../*.html`) имеет своё адресное пространство.  
- **Внешние ссылки** (`https://mihr.com/...`) сохраняют свои атрибуты `target="_blank" rel="noopener noreferrer"` и открываются в новом окне.  
- **Шрифты/иконки** находятся в локальных папках (`fonts/` или `icons/`) и подключаются через `<link>` и `<img>` в HTML.  
- **Скрипты** размещены в папке `scripts/` и подключаются через `<script src="...">` **только там, где они действительно нужны** (не в `index.html`).  
- **Футер** удалён из всех страниц; его содержимое перенесено на отдельную страницу `about.html`.  
- **Адаптивность** обеспечена через медиазапросы в CSS.  
- **Локализация**: весь контент сайта – на турецком; комментарии в коде – на русском.  
- **Именование**: имена файлов, папок, классов, id – на английском.