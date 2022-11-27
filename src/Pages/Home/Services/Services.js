import React from "react";
import img1 from "../../../assets/images/1.png";
import img2 from "../../../assets/images/2.png";
import img3 from "../../../assets/images/3.png";
import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Dell Laptop",
      description: "All Product dell laptop parchage you use laptop dell",
      img: img1,
      button: "DELL",
    },
    {
      id: 2,
      name: "Hp Laptop",
      description: "All Product dell laptop parchage you use laptop hp",
      img: img2,
      button: "HP",
    },
    {
      id: 3,
      name: "Lenovo Laptop",
      description: "All Product dell laptop parchage you use laptop lenovo",
      img: img3,
      button: "LENOVO",
    },
  ];

  return (
    <div className="mt-24">
      <div className="text-center mb-24">
        <h1 className="text-4xl font-bold text-primary uppercase">
          Our Category
        </h1>
        <h2 className="text-3xl">Services We Provide</h2>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;