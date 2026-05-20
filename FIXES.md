# Промт для исправления контента страниц (Missing Content)

## Проблема
При автоматической реструктуризации сайта некоторые элементы контента, находившиеся вне основных блоков `DIV` (например, вне `GorevDIVON`, `NamazDIV1` и т.д.), не были перенесены на новые страницы. 

В частности, на странице **ÖNSÖZ** и других разделах отсутствует обязательное вступление:
**EÛZUBİLLÂHİMİNEŞŞEYTÂNİRRACÎM**
**BİSMİLLÂHİRRAHMÂNİRRAHÎM**

## Что нужно сделать

### 1. Добавить вступительную фразу на все страницы разделов
На каждой странице в папке `pages/` (кроме `about.html`), необходимо вставить следующий блок кода сразу после заголовка (header) перед основным контентом:

```html
<p class="pCenter" style="font-size:1em">
    <strong>EÛZUBİLLÂHİMİNEŞŞEYTÂNİRRACÎM<br>BİSMİLLÂHİRRAHMÂNİRRAHÎM</strong>
</p>
```

### 2. Пример для `pages/tasavvuf/onsoz.html`
**Было:**
```html
<div class="ContentContainer">
    <br><br><br><br>
    <div id="GorevPageNameDIVON">...</div>
    <div id="GorevDIVON">...</div>
</div>
```

**Стало (нужно сделать):**
```html
<div class="ContentContainer">
    <br><br><br><br>
    <div id="GorevPageNameDIVON">...</div>
    
    <!-- ВСТАВИТЬ СЮДА -->
    <p class="pCenter" style="font-size:1em">
        <strong>EÛZUBİLLÂHİMİNEŞŞEYTÂNİRRACÎM<br>BİSMİLLÂHİRRAHMÂNİRRAHÎM</strong>
    </p>

    <div id="GorevDIVON">...</div>
</div>
```

## Список страниц для обязательного исправления:
Этот блок был глобальным в оригинальном `index.html` и отображался для каждого раздела контента. Его необходимо добавить на следующие **17 страниц**:

(Список страниц тот же, см. ниже)

---

## Что еще нужно сделать

### 3. Восстановление оригинального футера
Решено вернуть оригинальный футер на все страницы вместо ссылки на `about.html`. 

**Код футера для вставки:**
```html
<footer class="MyFooter">
    <br />
    <p>
      Kaynak:<br /><a href="https://www.mihr.com" target="_blank" class="beautifullyFooter">www.MIHR.com</a><br />
      <a href="https://www.mihr.com/kitaplar/457/dua-kitab?chapter=1707" target="_blank" class="beautifullyFooter">DUA KITABI</a><br />
      Amacımız, bilgileri bir araya toplayarak kullanım için daha kolay ortam oluşturmaktır.<br />
      Saygı ve sevgilerimizle.<br />Allah razı olsun.
    </p>
    <div style="padding: 5em 0 0 0"></div>
</footer>
```

**Где заменить:**
1. На всех 17 страницах контента (в самом низу перед закрывающим тегом `</div>` или `</body>`).
2. В файле `index.html` (заменить кнопку "HAKKIMIZDA" на этот текстовый блок).

### 4. Удаление кнопки "HAKKIMIZDA" из меню
Так как информация теперь есть в футере на каждой странице, отдельная кнопка в меню `index.html` и отдельная страница `pages/info/about.html` больше не нужны.
- Удалить кнопку из раздела `DİGER` в `index.html`.
- Удалить файл `pages/info/about.html`.

### 5. Увеличение кнопки Гамбургера
Для удобства нажатия на мобильных устройствах необходимо увеличить размер иконки меню.

**Что изменить в `css/main.css`:**
В классе `.menuBTN` изменить `font-size` с `3em` на **`4em`**.

---

## Итоговый список страниц для всех правок (Пункты 1, 2, 3):
1. `pages/tasavvuf/onsoz.html`
2. `pages/tasavvuf/mihr_vakfi.html`
3. `pages/tasavvuf/gorevler.html`
4. `pages/tasavvuf/vird.html`
5. `pages/tasavvuf/esmaul_husna.html`
6. `pages/namazlar/farz_namazlar.html`
7. `pages/namazlar/hacet_namaz.html`
8. `pages/namazlar/hamd_sekur.html`
9. `pages/namazlar/tovebe_namaz.html`
10. `pages/namazlar/istihafe_namaz.html`
11. `pages/dualar/namaz_dualari.html`
12. `pages/dualar/tovebe_istigfar.html`
13. `pages/dualar/sofra_dualari.html`
14. `pages/dualar/diger_dualar.html`
15. `pages/diger/sosyal_medya.html`
16. `pages/diger/mobil_apps.html`
17. `pages/diger/yazili_eserler.html`

## Важное замечание
Все текстовые вставки (вступление и футер) должны строго соответствовать оригинальному оформлению (классы `pCenter`, `beautifullyFooter`, `MyFooter`).
