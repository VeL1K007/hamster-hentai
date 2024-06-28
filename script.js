const apiUrl = 'https://rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&tags=english';

async function getRandomHentai() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Ошибка HTTP: ' + response.status);
        }
        const data = await response.json();

        // Выбираем случайное изображение
        const randomIndex = Math.floor(Math.random() * data.length);
        const hentai = data[randomIndex];

        // Отображаем изображение
        displayHentai(hentai.file_url);
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

function displayHentai(imageUrl) {
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageElement.alt = 'Hentai Image'; // Добавляем альтернативный текст для доступности

    const container = document.getElementById('hentai-container'); // Получаем контейнер для изображений
    container.innerHTML = ''; // Очищаем контейнер от предыдущих изображений (если они есть)
    container.appendChild(imageElement); // Добавляем изображение в контейнер
}

// Получаем ссылку на изображение хомяка
const hamsterImage = document.getElementById('hamster-image');

// Добавляем обработчик события клика на изображение хомяка
hamsterImage.addEventListener('click', getRandomHentai);
