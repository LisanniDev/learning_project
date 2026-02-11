const navtoggle = document.querySelector("#theme-toggle");
const root = document.documentElement;
// Функция смены темы
const applyTheme = (theme) => {
	// Используем setAttribute вместо множества setProperty
	root.setAttribute("data-theme", theme);

	// Также обновляем color-scheme напрямую через style для корректной работы браузера
	root.style.setProperty("color-scheme", theme);

	localStorage.setItem("theme", theme);
	navtoggle.checked = theme === "dark";
};
// Инициализация
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)")
	.matches;
const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
applyTheme(initialTheme);
// Слушатель
navtoggle.addEventListener("change", () => {
	const newTheme = navtoggle.checked ? "dark" : "light";
	applyTheme(newTheme);
});


// Скрипт для работы бургер-меню
// Находим кнопку бургер-меню и меню при загрузке страницы
const navToggleButton = document.querySelector('.nav-toggle');
const menuElement = document.querySelector('.menu');
// Проверяем, существуют ли элементы на странице
if (navToggleButton && menuElement) {
  // Вешаем обработчик события клика на кнопку
  navToggleButton.addEventListener('click', function() {
    // Переключаем (добавляем/удаляем) класс 'active' у меню
    menuElement.classList.toggle('active');
  });
}

//Анимация кнопки бургер-меню
function toggleAnimation(x) {
  x.classList.toggle("open");
}

// Элемент кнопки Вернуться наверх
const scrollButton = document.getElementById('scrollToTopBtn');
// Функция плавной прокрутки до верха страницы
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
// Обработчик события прокрутки окна
window.addEventListener('scroll', () => {
    // Показываем кнопку, когда страница пролистана больше, чем на 100 пикселей
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});
// Добавляем обработчик кликов по кнопке
scrollButton.onclick = function(e) {
    e.preventDefault();
    scrollToTop(); // Вызываем функцию плавной прокрутки
};