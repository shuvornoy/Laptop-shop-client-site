import React from 'react';
import img from '../../../assets/images/l-removebg-preview.png'



const ServiceHero = () => {
    return (
      <div
        className="hero mt-32 py-24"
        style={{ backgroundColor: "rgb(112 123 183)" }}
      >
        <div className="hero-content flex-col lg:flex-row">
          <img width={458} height={1000} src={img} alt="..." />
          <div className="lg:ml-7">
            <h1 className="text-5xl font-bold">
              Search for Primary Care Doctors Denver
            </h1>
            <p className="py-6">
              Search for Primary Care Doctors Denver. Get the Best Results for
              Primary Care Doctors Denver. Always Facts. Privacy Friendly.
              Completely Secure. Results & Answers. Unlimited Access. The Best
              Resources. Services: Best Results, Explore Now, New Sources.
            </p>
            <button className="btn btn-active btn-accent">
              Exceptional Search
            </button>
          </div>
        </div>
      </div>
    );
};

export default ServiceHero;