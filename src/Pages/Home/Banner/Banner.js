import React from 'react';

const Banner = () => {
    return (
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.pinimg.com/originals/59/47/bd/5947bdcfb309b00e8a65189626dc7377.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">All Laptop Provide My Shop</h1>
            <p className="mb-5">
              Provide all user good product sell in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi all laptop. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Buy And Sell</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;