document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("catsContainer");

    cats.forEach(cat => {
        const card = document.createElement("div");
        card.classList.add("cat-card");

        if (cat.favourite) {
            card.classList.add("favourite");
        }

        card.innerHTML = `
            <img src="${cat.img_link}" alt="${cat.name}">
            <h2>${cat.name}</h2>
            <p><strong>Возраст:</strong> ${cat.age} лет</p>
            <p><strong>Рейтинг:</strong> ${cat.rate}/10</p>
            <p>${cat.description}</p>
        `;

        container.appendChild(card);
    });
});
