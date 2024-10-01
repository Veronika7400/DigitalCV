import React from "react";

const LocationOnMap: React.FC = () => {
  return (
    <section className="container my-5">
      <h2 className="experience-title text-center">LOCATION ON THE MAP</h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.823784633502!2d17.800415316045587!3d45.2901421556321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4766fe9ba3f9752d%3A0x9e5f6a492dcf272e!2sResnik%2039%2C%2034310%20Pleternica!5e0!3m2!1shr!2shr!4v1695128657442!5m2!1shr!2shr"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          title="Resnik 39, 34310 Pleternica"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationOnMap;
