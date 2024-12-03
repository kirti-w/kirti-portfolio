import React from "react";
import crisImg from "../assets/cris.svg";
import worksafebcImg from "../assets/worksafebc.svg";
import cityImg from "../assets/city.svg";

const { useState } = React;

//IMAGES

//IMAGE ARRAY
const images = [
  {
    img: crisImg,
    title: "Website Development for a major transportation provider",
    description:
      "Translink is Metro Vancouver's transportation network, serving residents and visitors with public transit, major roads, bridges and Trip Planning.",
    duties:
      "Developed and optimized full-stack applications using Microsoft technologies (ASP.NET MVC, .NET Core, C#, SQL Server), refactored legacy code, improved performance, and implemented new features and system integrations.",
  },
  {
    img: worksafebcImg,
    title: "Website Development for a major transportation provider",
    description:
      "Translink is Metro Vancouver's transportation network, serving residents and visitors with public transit, major roads, bridges and Trip Planning.",
    duties:
      "Developed and optimized full-stack applications using Microsoft technologies (ASP.NET MVC, .NET Core, C#, SQL Server), refactored legacy code, improved performance, and implemented new features and system integrations.",
  },
  {
    img: cityImg,
    title: "Website Development for a major transportation provider",
    description:
      "Translink is Metro Vancouver's transportation network, serving residents and visitors with public transit, major roads, bridges and Trip Planning.",
    duties:
      "Developed and optimized full-stack applications using Microsoft technologies (ASP.NET MVC, .NET Core, C#, SQL Server), refactored legacy code, improved performance, and implemented new features and system integrations.",
  },
];

//MAIN LIGHTBOX
//Holds Images Cards and Lightbox
//this is where all of our logic will live
export default function ImageGallery() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  //looping through our images array to create img elements
  const imageCards = images.map((image, index) => (
    <div className="responsive" key={index}>
      <div className="gallery">
        <div className="image-card">
          <img alt="test" src={image.img} />
        </div>
        <div>
          <strong>{image.title}</strong>
        </div>
        <div className="desc">{image.description}</div>
        <div className="desc">{image.duties}</div>
      </div>
    </div>
  ));

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (
    <>
      <div className="gallery-container">{imageCards}</div>

      {lightboxDisplay ? (
        <div id="lightbox" onClick={hideLightBox}>
          <button onClick={showPrev}>⭠</button>
          <img id="lightbox-img" src={imageToShow} alt="test"></img>
          <h2>Description goes here</h2>
          <button onClick={showNext}>⭢</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
