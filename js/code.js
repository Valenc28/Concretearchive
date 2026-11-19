
let container = document.querySelector("#menu-nav");
let details = document.querySelector("#building-details");

fetch("js/buildings.json")
    .then(response => response.json())
    .then(buildings => {

        buildings.forEach(building => {

            container.innerHTML += `
                <button class="btn border border-secondary text-start"
                        onclick="showBuilding('${building.title}')">
                    ${building.title}
                </button>
            `;

        });

        showBuilding(buildings[0].title);

    });


function showBuilding(title) {

    fetch("js/buildings.json")
        .then(response => response.json())
        .then(buildings => {

            const building = buildings.find(building => building.title === title);

            details.innerHTML = `
                <div class="card-body">

                    <p class="section-label">
                        ${building.location} / ${building.year}
                    </p>

                    <h2 class="card-title">${building.title}</h2>

                    <img src="${building.image}" class="card-img-top img-fluid mb-4" alt="${building.title}">

                    <p class="card-text">${building.description}</p>

                    <div class="building-meta">

                        <p>
                            <strong>Architect:</strong>
                            ${building.architect}
                        </p>

                        <p>
                            <strong>Year:</strong>
                            ${building.year}
                        </p>

                    </div>

                </div>

                <div class="card-footer">

                    <a href="${building.destination}" target="_blank" class="btn">
                        EXPLORE PROJECT
                    </a>

                </div>
            `;

        });

}


/* FORM VALIDATION */

const forms = document.querySelectorAll(".needs-validation");

forms.forEach(form => {

    form.addEventListener("submit", event => {

        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add("was-validated");

    });

});


