// Скрипт для бургер-меню
const menuToggle = document.querySelector('.menu-toggle');
const headerMenu = document.querySelector('.header__menu');

if (menuToggle && headerMenu) {
    menuToggle.addEventListener('click', () => {
        headerMenu.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
    });
}

// Закрытие меню при клике на ссылку
const menuLinks = document.querySelectorAll('.header__menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        headerMenu.classList.remove('open');
        document.body.classList.remove('no-scroll');
    });
});

// Блокировка прокрутки при открытом меню
const noScroll = () => {
    if (document.body.classList.contains('no-scroll')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};

document.body.addEventListener('classchange', noScroll);


// Изменение фона хедера при скролле
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Анимация появления элементов при скролле
const scrollElements = document.querySelectorAll('.scroll-reveal');
const scrollAnimation = () => {
    scrollElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', scrollAnimation);
scrollAnimation(); // Для начальной загрузки страницы

// Форма обратной связи: проверка на заполненность
const contactForm = document.querySelector('.contacts form');
if (contactForm) {
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const message = contactForm.querySelector('textarea').value.trim();

        if (!name || !email || !message) {
            alert('Пожалуйста, заполните все поля.');
            return;
        }
        alert('Ваше сообщение успешно отправлено!');
        contactForm.reset();
    });
}

