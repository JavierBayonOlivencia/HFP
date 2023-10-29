const cards = document.querySelectorAll(".info-cards");
const cardDetails = document.querySelectorAll("img");
const contentInfo = document.querySelector(".content-info");

cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    const id = card.dataset.id;

    cardDetails.forEach((cardDetail) => {
      const detailID = cardDetail.dataset.id;

      contentInfo.addEventListener("mouseout", () => {
        cardDetail.classList.remove("scale-img");
      });

      if (id === detailID) {
        cardDetail.classList.add("scale-img");
      } else {
        cardDetail.classList.remove("scale-img");
      }
    });
  });
});