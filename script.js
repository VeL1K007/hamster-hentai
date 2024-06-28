// script.js
document.addEventListener('DOMContentLoaded', function() {
    const hamster = document.getElementById('hamster');
    const hentaiContainer = document.getElementById('hentai-container');

    async function getRandomHentai() {
        try {
            const response = await fetch('https://nhentai.net/api/galleries/search?query=tag:english');
            const data = await response.json();
            const randomIndex = Math.floor(Math.random() * data.result.length);
            const hentai = data.result[randomIndex];
            displayHentai(hentai);
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
    }

    function displayHentai(hentai) {
        const hentaiLink = `https://nhentai.net/g/${hentai.id}/`;
        const hentaiThumbnail = `https://t.nhentai.net/galleries/${hentai.media_id}/cover.jpg`;
        hentaiContainer.innerHTML = `
            <div class="hentai-item">
                <a href="${hentaiLink}" target="_blank">
                    <img src="${hentaiThumbnail}" alt="Hentai Thumbnail">
                </a>
                <p>${hentai.title.english}</p>
            </div>
        `;
    }

    hamster.addEventListener('click', getRandomHentai);
});
