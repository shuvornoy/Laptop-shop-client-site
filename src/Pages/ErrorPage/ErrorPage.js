import React, { useContext } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import './ErrorPage.css'
import { AuthContext } from './../../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';
import imgError from '../../assets/images/error.png'

const ErrorPage = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
    return (
      <div className="erro-container">
        <section className="flex items-center h-screen  bg-gray-100 text-gray-900">
          <div className="container flex flex-col items-center justify-center mx-auto">
            <img className='w-2/5' src={imgError} alt="" />
            <div className="max-w-md text-center">
              <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                404
              </h2>
              <p className="text-2xl font-semibold md:text-3xl mb-8">
                Sorry, we couldn't find this page.
              </p>
              <p className="text-red-500">Something went wrong!!!</p>
              <p className="text-red-400">
                {error.statusText || error.message}
              </p>
              <button
                className="px-8 py-3 mb-5 font-semibold rounded bg-cyan-200 text-gray-900"
                onClick={handleLogOut}
              >
                {" "}
                Please Sign out and log back in
              </button>{" "}
              <br />
              <Link
                to="/"
                className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
};

export default ErrorPage;