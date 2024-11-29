import React, { useState } from "react";

const images = ["assets/photo1.jpg", "assets/profile.jpg"];

function openLightbox(imageSrc, captionText) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");

  lightbox.style.display = "flex";
  lightboxImg.src = imageSrc;
  lightboxCaption.textContent = captionText;
}
/*
function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}*/

const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  console.log(images);

  return (
    <section className="content">
      <h2>Photo Gallery test</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() =>
              openLightbox(image, "Project 1: Responsive Website")
            }>
            <img key={index} src={image} alt={`Gallery ${index + 1}`} />
            <div className="overlay">
              <p>Project 1: Responsive Website</p>
            </div>
          </div>
        ))}
      </div>
      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <img src={lightboxImage} alt="Lightbox" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
