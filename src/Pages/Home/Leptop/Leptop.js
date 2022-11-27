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
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button>fjhsdk</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leptop;
