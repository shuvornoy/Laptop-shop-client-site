import React from 'react';
import img from '../../../assets/images/l-removebg-preview.png'



const ServiceHero = () => {
    return (
      <div
        className="hero mt-32 py-24"
        style={{ backgroundColor: "rgb(112 123 183)" }}
      >
        <div className="hero-content flex-col lg:flex-row text-white">
          <img width={458} height={1000} src={img} alt="..." />
          <div className="lg:ml-7">
            <h1 className="text-5xl font-bold">
              Search for Primary Care Laptop Your Coach!!!!
            </h1>
            <p className="py-6">
              Shop Laptops By Brand in Laptops (1000+) Price when purchased
              online Reduced price Sponsored Now $199.00 $299.00 ASUS VivoBook
              14" FHD Laptop, AMD Athlon Gold 3150U, 4GB RAM, 128GB SSD, Windows
              10 Home, Slate Gray, M415DA-DB21 7 Save with 2-day shipping
              Sponsored $238.00
            </p>
            <button className="btn btn-primary">
              Laptop Search
            </button>
          </div>
        </div>
      </div>
    );
};

export default ServiceHero;