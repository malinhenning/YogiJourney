const yogaImage = document.createElement("img");
yogaImage.src =
  "/Passion-Projects/YogiJourney/assets/Yogi-Journey-images/172578-OWBDD2-194.jpg";
yogaImage.style.width = "15rem";
yogaImage.style.height = "auto";
yogaImage.style.borderRadius = "15px";
yogaImage.style.margin = "1rem";

document.querySelector(".slide-show").appendChild(yogaImage);

const imageSrc = [
  "/Passion-Projects/YogiJourney/assets/Yogi-Journey-images/3924616.jpg",
  "/Passion-Projects/YogiJourney/assets/Yogi-Journey-images/5184243.jpg",
  "/Passion-Projects/YogiJourney/assets/Yogi-Journey-images/6396081.jpg",
  "/Passion-Projects/YogiJourney/assets/Yogi-Journey-images/6396395.jpg",
  "/Passion-Projects/YogiJourney/assets/Yogi-Journey-images/7163069.jpg",
];

const dotsContainer = document.createElement("section");
dotsContainer.className = "dots-container";
document.querySelector(".slide-show").appendChild(dotsContainer);

imageSrc.forEach((image) => {
  const imageDots = document.createElement("button");
  imageDots.className = "img-dot";

  let currentImageIndex = 0;

  imageDots.addEventListener("click", () => {
    currentImageIndex++;
    if (currentImageIndex >= imageSrc.length) {
      currentImageIndex = 0;
    }

    yogaImage.src = imageSrc[currentImageIndex];
  });

  document.querySelector(".dots-container").appendChild(imageDots);
});
