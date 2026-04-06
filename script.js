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

/// Sima görgetés és aloldalról való visszaugrás kezelése
document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Ha a link csak egy ID (pl. #pricing) ÉS az adott elem létezik ezen az oldalon
        if (href.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault(); // Megállítjuk az alap ugrást
                window.scrollTo({
                    top: target.offsetTop - 85,
                    behavior: 'smooth' // Szépen görgetünk
                });
            }
        } 
        // Ha a link tartalmazza az index.html-t (pl. ../index.html#pricing)
        // VAGY az elem nem létezik az oldalon, akkor NEM fut le a preventDefault,
        // így a böngésző rendesen betölti a főoldalt a megadott helyen.
    });
});