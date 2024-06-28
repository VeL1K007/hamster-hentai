// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    const hamster = document.getElementById('hamster');
    const hentaiLinks = [
        'https://online.hentai-hub.net/browse/random/'
        // Добавьте сюда ссылки на свои ресурсы
    ];

    hamster.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * hentaiLinks.length);
        const randomHentaiLink = hentaiLinks[randomIndex];
        window.open(randomHentaiLink, '_blank');
    });
});
