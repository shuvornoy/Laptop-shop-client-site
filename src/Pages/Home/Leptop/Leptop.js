import React from "react";
import img from "../../../assets/images/leptop.png";



const Leptop = () => {
  return (
    <section
      className="mt-32"
      style={{
        backgroundColor: "rgb(112 123 183)",
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img}
            alt=""
            className="-mb-4 hidden md:block lg:w-1/2 rounded-lg "
          />
          <div>
            <h4 className="text-lg text-white text-4xl font-bold">
              My Laptop Shop
            </h4>
            <h1 className=" text-white text-2xl font-bold">
              Laptop Provide 24h any time....
            </h1>
            <p className="text-white py-6">
              Shop incredible Black Friday Laptop Deals on Walmart.com. Score
              our hottest savings before they're gone. Save Money. Live Better.
              Black Friday deals are here! Save on can't-miss finds. ...
              Two-in-one laptops: These devices can either work as a laptop on
              one mode or as a tablet when the screen is detached from the
              keyboard or bent back 360.....
            </p>
            <button className="btn btn-primary">Check my shop</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leptop;
