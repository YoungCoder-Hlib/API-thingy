document.addEventListener('DOMContentLoaded', () => {
    fetch('jasu2025_data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('inn-container');
            container.innerHTML = '';
            data.forEach((item, idx) => {
                // Відображаємо тільки ті, що мають posterLink
                if (!item.posterLink) return;

                const card = document.createElement('div');
                card.style.background = '#fff';
                card.style.margin = '20px';
                card.style.padding = '20px';
                card.style.borderRadius = '10px';
                card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                card.style.display = 'inline-block';
                card.style.verticalAlign = 'top';
                card.style.width = '300px';
                card.style.minHeight = '120px';

                // Назва (тимчасово просто номер постеру)
                const title = document.createElement('div');
                title.style.fontWeight = 'bold';
                title.style.marginBottom = '10px';
                title.textContent = `Постер #${idx + 1}`;
                card.appendChild(title);

                // Кнопка "Дивитись постер"
                const posterBtn = document.createElement('a');
                posterBtn.href = item.posterLink;
                posterBtn.target = '_blank';
                posterBtn.textContent = 'Дивитись постер';
                posterBtn.style.background = '#4caf50';
                posterBtn.style.padding = '6px 12px';
                posterBtn.style.borderRadius = '5px';
                posterBtn.style.textDecoration = 'none';
                posterBtn.style.color = '#fff';

                card.appendChild(posterBtn);
                container.appendChild(card);
            });
        });
});