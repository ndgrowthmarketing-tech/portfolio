const burger = document.getElementById('burger');
const nav = document.getElementById('nav-links');

// Oldalról nyíló menü kezelése
burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
    
    // Burger ikon animáció
    if (burger.classList.contains('toggle')) {
        burger.children[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
        burger.children[1].style.opacity = "0";
        burger.children[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
    } else {
        burger.children[0].style.transform = "none";
        burger.children[1].style.opacity = "1";
        burger.children[2].style.transform = "none";
    }
});

// Menü bezárása kattintás után
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        // Burger ikon visszaállítása
        burger.classList.remove('toggle');
        burger.children[0].style.transform = "none";
        burger.children[1].style.opacity = "1";
        burger.children[2].style.transform = "none";
    });
});

// Sima görgetés
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 85,
            behavior: 'smooth'
        });
    });
});