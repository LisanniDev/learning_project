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
// Получаем элемент футера
const footer = document.querySelector('footer');

// Проверяем достижение конца страницы
function isAtBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight - footer.clientHeight;
}
// Обработчик события прокрутки окна
window.addEventListener('scroll', () => {
    const showScrollThreshold = 100; // Минимальная высота прокрутки для отображения кнопки

    // Определяем состояние видимости кнопки
    let buttonVisible = false;

    if (isAtBottom()) { // Если достигли конца страницы
        scrollButton.style.opacity = '1'; // Делаем кнопку непрозрачной
        buttonVisible = true;
    } else if (document.body.scrollTop > showScrollThreshold || document.documentElement.scrollTop > showScrollThreshold) {
        scrollButton.style.opacity = '0.5'; // Обычная прозрачность
        buttonVisible = true;
    }

    // Отображаем или прячем кнопку
    scrollButton.style.display = buttonVisible ? 'block' : 'none';
});

// Добавляем обработчик кликов по кнопке
scrollButton.onclick = function(e) {
    e.preventDefault();
    scrollToTop(); // Вызываем функцию плавной прокрутки
};