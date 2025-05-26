let MATHS = [];
let MATHS1 = [];
let selectedValue = "Всі категорії";
let selectedValue2 = "All";
let arrow = document.querySelector("#fullyopen");
let YTM1 = document.querySelector("#YTM1");
let YTM2 = document.querySelector("#YTM2");
let chosen = "Projects";
let objData = [];
const ObjFiles = {
    "Математика": 'math.json',
    "Економіка": 'Economika.json',
    "Фізика і астрономія": 'PsycistAndSpace.json',
     "Філософія та суспільствознавство": 'Phylosophy.json'
};
YTM1.addEventListener("change", function() {
    const container = document.getElementById('inn-container');
    chosen = this.value;
    console.log("Вибрано:", chosen);
    container.innerHTML = '';
    reload();
});
function reload(){
if (chosen == "Projects"){
    fetch('jasu2025_data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('inn-container');
            const selectElement = document.getElementById("YTMS");
            function createdat(){
                    container.innerHTML = '';

                    let filtered = data;

                    if (selectedValue !== "Всі категорії") {
                        filtered = filtered.filter(item => item.department === selectedValue);
                    }

                    if (selectedValue2 !== "All") {
                        filtered = filtered.filter(item => item.region === selectedValue2);
                    }

                    MATHS1 = filtered;
                    console.log("MATHS1", MATHS1);
                MATHS1.forEach((item, idx) => {
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

            selectElement.addEventListener("change", function(e) {
                if(chosen == "Projects"){
                selectedValue = e.target.value;
                createdat();
                console.log("Вибрано:", selectedValue);
                }
            });
            YTM2.addEventListener("change", function() {
            if (chosen == "Projects") {
            const container = document.getElementById('inn-container');
            container.innerHTML = '';
            selectedValue2 = YTM2.value;
            createdat();
            }
            });
            // Можеш встановити значення за замовчуванням
            selectedValue = selectElement.value;
            createdat();
            uRF();
            function uRF() {
            const regions = Array.from(new Set(data.map(i => i.region).filter(Boolean))).sort();
            console.log("Regions:", regions);
            YTM2.innerHTML = '<option value="All">Всі</option>';
            regions.forEach(reg => {
            const opt = document.createElement('option');
            opt.value = reg;
            opt.textContent = reg;
            YTM2.appendChild(opt);
            });
        }
        });
    } else if (chosen == "Winners") {
    const selectElement = document.getElementById("YTMS");
    selectedValue = selectElement.value; 
    RELEASE();

    selectElement.addEventListener("change", function () {
        if (chosen == "Winners") {
            selectedValue = this.value;
            RELEASE();
        }
    });

    function RELEASE() {
        fetch(ObjFiles[selectedValue])
            .then(response => response.json())
            .then(data => {
                objData = data.filter(item => item.title);
                console.log("Cards Data:", objData);
                uRF();
                renderCards(); 
            });
    }

    function uRF() {
        const regions = Array.from(new Set(objData.map(i => i.region).filter(Boolean))).sort();
        console.log("Regions:", regions);
        YTM2.innerHTML = '<option value="All">Всі</option>';
        regions.forEach(reg => {
            const opt = document.createElement('option');
            opt.value = reg;
            opt.textContent = reg;
            YTM2.appendChild(opt);
        });
    }

    function renderCards() {
        const container = document.getElementById('inn-container');
        const selectedRegion = YTM2.value;
        container.innerHTML = '';
        objData.forEach(item => {
            if (selectedRegion === 'All' || item.region === selectedRegion) {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <div class="titlecard">${item.title}</div>
                    <div class="regioncard"><b>Область:</b> ${item.region || ''}</div>
                    <div class="card-place"><b>Місце:</b> ${item.place || '-'}</div>
                `;
                container.appendChild(card);
            }
        });
    }
    YTM2.addEventListener("change", function() {
    if (chosen == "Winners") {
         const container = document.getElementById('inn-container');
         container.innerHTML = '';
        renderCards();
    }
});
}

}
arrow.addEventListener("click", function() {
    const container = document.getElementById('settings');
    const width = parseInt(getComputedStyle(container).width);
    console.log("Width", width); 
    if (width > 10) {
        container.style.width = "10px";
        arrow.textContent = "←";
    } else if(width <= 10){
        container.style.width = "800px";
        arrow.textContent = "→";
    }
});
reload();
