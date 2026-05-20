/* Скрипт для отображения текущей даты */
document.addEventListener("DOMContentLoaded", function() {
    var dateElements = document.querySelectorAll(".beautifullyDate");
    if (dateElements.length > 0) {
        var d = new Date(),
            month = [
                "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
                "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
            ];
        var dateString = d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear();
        dateElements.forEach(function(el) {
            el.innerHTML = dateString;
        });
    }
});
