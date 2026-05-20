# Промт для изменения структуры веб-сайта Tasavvuf

## Обзор проекта
- **Тип**: Многостраничный веб‑сайт на чистом HTML/CSS.  
- **Технические компоненты**:
  - `index.html` — только меню (крупные кнопки, как в текущем `MenuPageDIV`).  
  - `pages/` — подпапки для каждого раздела меню.
  - `css/main.css` — основные стили.
  - `css/icons.css` — **оптимизированные** локальные стили для иконок (только используемые).
  - `fonts/` — локальные шрифты и иконочные шрифты (только нужные глифы).
  - `scripts/` — локальные скрипты (jQuery удаляется, если не нужен).

- **Управление ресурсами (Локализация и Оптимизация)**:
  - **Никаких CDN**: Все внешние библиотеки (jQuery, Font Awesome и т.д.) должны быть скачаны, локализованы и очищены.
  - **CSS Purge**: Удалить все неиспользуемые правила из библиотек иконок. Оставить только: `bi-list`, `fa-radio`, `fa-tv`, `fa-globe` и бренды (`facebook`, `instagram`, `tiktok`, `youtube`).
  - **Очистка JS**: Если `scripts/date.js` не требует jQuery, не подключать его.

- **Архитектура**:
  - `index.html` — главная страница с меню.
  - `pages/` — структурированные поддиректории с отдельными страницами разделов.
  - **Единый источник истины**: Контент для каждой страницы извлекается из конкретных `id`-блоков оригинального `index.html`.

- **Правила оформления**:
  - **Язык**: Турецкий для контента.
  - **Комментарии**: Русские для кода.
  - **Именование**: Английское для файлов, папок, классов и ID.

---

## Технические детали и примеры

### 1. Базовый шаблон (Master Template)
Все страницы в `pages/` должны строго следовать этой структуре.

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{НАЗВАНИЕ_СТРАНИЦЫ} – TASAVVUFİ HAYAT</title>
    
    <!-- Пути должны быть относительными глубине папки -->
    <link rel="stylesheet" href="../../css/icons.css"> 
    <link rel="stylesheet" href="../../css/main.css">
</head>
<body>
    <div class="GeneralDIV">
        <!-- Навигация: оригинальный стиль .menuBTN -->
        <div class="navbarDiv">
            <nav class="navbar">
                <a href="../../index.html" class="menuBTN">
                    &nbsp;<i class="bi bi-list"></i>&nbsp;
                </a>
            </nav>
        </div>

        <!-- Контент раздела -->
        <div class="ContentContainer">
            <!-- Заголовок из {ID_PageNameDIV} -->
            <!-- Содержимое из {ID_DIV} -->
        </div>
    </div>
    
    <!-- Подключается только если скрипт реально нужен разделу -->
    <script src="../../scripts/date.js"></script>
</body>
</html>
```

### 2. Трансформация меню (index.html)
Замена JS-кнопок на стандартные HTML-ссылки.

**Было (сейчас):**
```html
<button onclick="GorevFunctionON()">ÖNSÖZ</button>
```

**Стало (новый вариант):**
```html
<a href="pages/tasavvuf/onsoz.html" class="button">ÖNSÖZ</a>
```
*Примечание: Используйте класс `.button` для сохранения текущего внешнего вида кнопок.*

### 3. Управление путями (Path Management)
Таблица соответствия путей для ресурсов:

| Расположение файла | Путь к CSS/Pict | Путь к Главной |
| :--- | :--- | :--- |
| `index.html` | `css/`, `pict/` | `index.html` |
| `pages/tasavvuf/onsoz.html` | `../../css/`, `../../pict/` | `../../index.html` |
| `pages/diger/about.html` | `../../css/`, `../../pict/` | `../../index.html` |

### 4. Миграция внутренних ссылок
Оригинальный контент содержит элементы, которые вызывают JavaScript-функции для навигации. Они ДОЛЖНЫ быть преобразованы в стандартные HTML-ссылки.

**Правила:**
- Найти все атрибуты вида `onclick="FunctionName()"` или `onclick="BtnMENU()"`.
- Заменить тег (или обернуть его) тегом `<a>`.
- Сопоставить функции с их новыми путями к файлам.
- Удалить все чисто JS-атрибуты: `onclick`, `onmouseover`, `cursor:pointer` и т.д.

**Пример преобразования:**
- **Было:** `<span onclick="GorevFunctionON()" style="cursor:pointer; color:blue;">Читать Предисловие</span>`
- **Стало:** `<a href="../../pages/tasavvuf/onsoz.html" style="color:blue;">Читать Предисловие</a>`

### 5. Корректировка путей к медиа
При переносе контента из `index.html` в подпапки (например, `pages/tasavvuf/onsoz.html`), все пути к изображениям должны быть обновлены.

**Правило:**
- Заменить `src="pict/filename.png"` на `src="../../pict/filename.png"`.
- Это относится ко всем тегам `<img>`, `<source>` и ссылкам `url()` в CSS, найденным внутри извлеченного контента.

---

## Что нужно выполнить

### 1. Структура файлов
```text
index.html
pages/
  tasavvuf/ (onsoz.html, mihr_vakfi.html, gorevler.html, ...)
  namazlar/ (farz_namazlar.html, hacet_namaz.html, ...)
  dualar/ (namaz_dualari.html, tovebe_istigfar.html, ...)
  diger/ (sosyal_medya.html, mobil_apps.html, about.html, ...)
css/ (main.css, icons.css)
fonts/ (локальные шрифты)
scripts/ (date.js)
pict/ (картинки)
```

### 2. Карта извлечения контента
- **ÖNSÖZ**: Извлечь из `id="GorevPageNameDIVON"` (заголовок) и `id="GorevDIVON"` (контент).
- **MİHR VAKFI**: Извлечь из `id="GorevPageNameDIVMV"` и `id="GorevDIVMV"`.
- **NAMAZLAR**: Извлечь из `id="PageNameDIV{X}"` и `id="NamazDIV{X}"`.
- **ABOUT**: Извлечь из глобального футера текущего `index.html`.

---

## Чек-лист проверки (Validation)
1. **Навигация**: Кнопка меню на каждой странице ведет на `index.html`?
2. **Визуал**: CSS и картинки грузятся корректно по относительным путям?
3. **Адаптивность**: Есть ли тег viewport? Как сайт выглядит на мобильных?
4. **Оптимизация**: Очищены ли `icons.css` и шрифты от лишнего хлама?
5. **Ошибки**: Нет ли в консоли ошибок об отсутствии jQuery или JS-функций?
6. **Именование**: Все новые файлы и папки названы на английском и в нижнем регистре?
7. **Локализация**: Контент на турецком, комментарии на русском?