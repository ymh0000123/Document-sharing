function list() {
    fetch("config.json")
        .then((response) => response.json())
        .then((data) => {
            if (data.list != "") {
                fetch(data.list)
                    .then(response => response.json())
                    .then(data => {
                        const cardContainer = document.getElementById('right-content');

                        data.category.forEach(category => {
                            // 创建一个新 section 用于该类别
                            const section = document.createElement('div');
                            section.className = 'category-section';

                            // 创建类别标题
                            const categoryTitle = document.createElement('h2');
                            categoryTitle.textContent = category;

                            // 将标题添加到主容器中
                            cardContainer.appendChild(categoryTitle);

                            // 添加卡片到该类别下
                            data[category].forEach(item => {
                                const card = document.createElement('div');
                                card.className = 'card';
                                card.innerHTML = `
                                    <img src="${item.img}" alt="${item.name}">
                                    <div class="card-content">
                                        <h3>${item.name}</h3>
                                        <p>${item.introduction}</p>
                                        <a href="http://${item.link}" target="_blank">Learn more</a>
                                    </div>
                                `;
                                section.appendChild(card);
                            });

                            // 将类别部分添加到主容器中
                            cardContainer.appendChild(section);

                        });
                    })
                    .catch(error => console.error('Error fetching data:', error));
            } else {
                console.log("列表没有设置 ＞︿＜");
            }
        })
}

list();