/// Sima görgetés és URL kezelés
document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Külön kezeljük, ha a link CSAK egy '#' (pl. a logó a főoldalon)
        if (href === '#') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // Eltünteti a # jelet az URL végéről, marad a sima domain
            history.pushState("", document.title, window.location.pathname);
            return;
        }

        // Ha a link ID-ra mutat (#services) ÉS az elem létezik az oldalon
        if (href.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                window.scrollTo({
                    top: target.offsetTop - 85,
                    behavior: 'smooth'
                });

                // Ez frissíti az URL-t a horgonyra (pl. #services), 
                // de nem engedi, hogy a böngésző "elugorjon" a fix pontra
                history.pushState(null, null, href);
            }
        }
        // Ha aloldalról jössz (pl. /#services), akkor nem fut le a preventDefault,
        // így a böngésző rendesen betölti a főoldalt és odaugrik.
    });
});
