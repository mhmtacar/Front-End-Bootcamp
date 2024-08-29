// Dropdown'ı hover ile açmak için jQuery kullanarak bir çözüm:
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("mouseover", function () {
      this.classList.add("show");
      this.querySelector(".dropdown-menu").classList.add("show");
    });
    dropdown.addEventListener("mouseout", function () {
      this.classList.remove("show");
      this.querySelector(".dropdown-menu").classList.remove("show");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      // Carousel
      const carouselInner = document.querySelector(".carousel-inner");
      data.carouselItems.forEach((item, index) => {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (index === 0) {
          carouselItem.classList.add("active");
        }
        carouselItem.innerHTML = `
      <img src="${item.src}" class="d-block w-100 carousel-image" alt="${item.alt}" />
    `;
        carouselInner.appendChild(carouselItem);
      });

      // Cards
      const cardContainer = document.querySelector(".container.my-5 .row");
      data.cards.forEach((card) => {
        const cardColumn = document.createElement("div");
        cardColumn.classList.add("col-md-4");
        cardColumn.innerHTML = `
          <div class="card h-100">
            <img src="${card.imgSrc}" class="card-img-top" alt="${card.title}" />
            <div class="card-body">
              <h5 class="card-title">${card.title}</h5>
              <p class="card-text">${card.text}</p>
              <div class="d-flex justify-content-center mb-2 gap-2">
                <span class="badge bg-secondary">Bootcamp</span>
                <span class="badge bg-secondary">İş Fırsatı</span>
              </div>
              <div class="card-footer">
                <p class="text-muted">Son Başvuru: ${card.date}</p>
                <a href="${card.link}" class="btn btn-success">Başvur</a>
              </div>
            </div>
          </div>
        `;

        cardContainer.appendChild(cardColumn);
      });
    })
    .catch((error) => console.error("Error loading the data:", error));
});

document.addEventListener("DOMContentLoaded", function () {
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const carouselContent = document.getElementById("carousel-content");
    let slideItem = "";
    data.testimonials.forEach((participant, index) => {
      if (index % 2 === 0) {
        // Start a new slide for every two participants
        if (index !== 0) {
          slideItem += "</div></div>"; // Close the previous slide
        }
        slideItem += `<div class="carousel-item ${
          index === 0 ? "active" : ""
        }"><div class="row">`;
      }
      slideItem += `
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex">
                                    <img src="${participant.image}" alt="${participant.name}" />
                                    <div class="name">
                                        <h5>${participant.name}</h5>
                                        <p class="text-muted">${participant.bootcamp}</p>
                                    </div>
                                </div>
                                <div class="testimonial">
                                    <p>${participant.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    });
    slideItem += "</div></div>"; // Close the last slide
    carouselContent.innerHTML = slideItem;
  })
  .catch((error) => console.error("Error fetching participant data:", error));
});

document.addEventListener("DOMContentLoaded", function () {
  fetch('data.json')
  .then(response => response.json())
  .then(data => {
      const container = document.getElementById('testimonial-container');
      data.allparticipants.forEach(item => {
          const card = document.createElement('div');
          card.className = 'col-md-4 d-flex';
          card.innerHTML = `
              <div class="testimonial-card text-center">
                  <img src="${item.image}" alt="${item.name} Fotoğrafı">
                  <p>${item.feedback}</p>
                  <h6>${item.name}</h6>
                  <small>${item.course}</small>
              </div>
          `;
          container.appendChild(card);
      });
  })
  .catch(error => console.error('Error:', error));
    });

document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("header").innerHTML = data));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.html")
      .then((response) => response.text())
      .then((data) => (document.getElementById("footer").innerHTML = data));
  });
  
  document.addEventListener("DOMContentLoaded", function () {
      fetch("whytechcareer.html")
        .then((response) => response.text())
        .then((data) => (document.getElementById("whytechcareer").innerHTML = data));
    });