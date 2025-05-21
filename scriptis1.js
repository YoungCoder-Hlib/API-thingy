let MATHS = [];
document.addEventListener('DOMContentLoaded', () => {
    fetch('jasu2025_data.json')
        .then(response => response.json())
        .then(data => {
            const selectedValue;
            const container = document.getElementById('inn-container');
            container.innerHTML = '';
            function createdat(){
            data.forEach((item, idx) => {
                if (!item.posterLink) return;
                for (let i = 0; i < data.length; i++) {
                    if(data[i].department == )
                    MATHS.push(data[i].region);
                }
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
                card.department = item.department;
                console.log(card.department);

                const title = document.createElement('div');
                title.style.fontWeight = 'bold';
                title.style.marginBottom = '10px';
                title.textContent = `${idx + 1}. ${item.title}`;
                card.appendChild(title);
                const btns = document.createElement('div');
                btns.style.marginTop = '10px';
                if (item.detailsLink) {
                    const detailsBtn = document.createElement('a');
                    detailsBtn.href = item.detailsLink;
                    detailsBtn.target = '_blank';
                    detailsBtn.textContent = 'Деталі роботи';
                    detailsBtn.style.background = '#2196f3';
                    detailsBtn.style.padding = '6px 12px';
                    detailsBtn.style.borderRadius = '5px';
                    detailsBtn.style.textDecoration = 'none';
                    detailsBtn.style.color = '#fff';
                    detailsBtn.style.marginRight = '10px';
                    btns.appendChild(detailsBtn);
                }


                const posterBtn = document.createElement('a');
                posterBtn.href = item.posterLink;
                posterBtn.target = '_blank';
                posterBtn.textContent = 'Дивитись постер';
                posterBtn.style.background = '#4caf50';
                posterBtn.style.padding = '6px 12px';
                posterBtn.style.borderRadius = '5px';
                posterBtn.style.textDecoration = 'none';
                posterBtn.style.color = '#fff';
                const title1 = document.createElement('div');
                title1.style.fontWeight = 'bold';
                title1.style.marginBottom = '10px';
                title1.style.color = 'white';
                title1.style.maxWidth = "500px";
                title1.style.minWidth = "200px";
                title1.style.backgroundColor = "blue";
                title1.textContent = `${item.region}`;
                card.appendChild(title1);

                btns.appendChild(posterBtn);
                card.appendChild(btns);
                container.appendChild(card);
            });
        }
        createdat();
            const selectElement = document.getElementById("YTMS");
            selectElement.addEventListener("change", function () {
            container.innerHTML = "";
            selectedValue = this.value;
            
            console.log("Вибрано:", selectedValue);
            });
        });
});