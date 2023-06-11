import React from 'react';
import team2 from '../assets/img/team2.jpg';
import team3 from '../assets/img/team3.jpg';
import ahmad from '../assets/img/ahmad.png';
import team4 from '../assets/img/team4.png';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { BsTwitter, BsGoogle } from 'react-icons/bs';

const Team = () => {
  return (
    <section className="pt-20 pb-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Meet our Team</h2>
            <p className="text-lg leading-relaxed m-4 text-gray-600">
              Our dedicated team of AI experts is passionate about revolutionizing the recruitment industry.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src={ahmad}
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "120px" }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Ahmad Hassoun</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Full Stack Developer
                </p>
                <div className="mt-6">
                  <button className="bg-blue-400 text-white rounded-full p-2 outline-none focus:outline-none mr-1 mb-1" type="button">
                    <BsTwitter size={20} />
                  </button>
                  <button className="bg-blue-600 text-white p-2 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                    <FaFacebookSquare size={20} />
                  </button>
                  <button className="bg-pink-500 text-white p-2 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                    <FaLinkedin size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src={team2}
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "120px" }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Romina Hadid</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Marketing Specialist
                </p>
                <div className="mt-6">
                  <button className="bg-red-600 text-white p-2 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                    <BsGoogle size={20} />
                  </button>
                  <button className="bg-blue-600 text-white p-2 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                    <FaFacebookSquare size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src={team3}
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "120px" }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Alexa Smith</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  UI/UX Designer
                </p>
                <div className="mt-6">
                  <button className="bg-red-600 text-white p-2 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                    <BsGoogle size={20} />
                  </button>
                  <button className="bg-blue-400 text-white rounded-full p-2 outline-none focus:outline-none mr-1 mb-1" type="button">
                    <BsTwitter size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src={team4}
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "120px" }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Jenna Kardi</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Founder and CEO
                </p>
                <div className="mt-6">
                  <button className="bg-pink-500 text-white p-2 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                    <FaLinkedin size={20} />
                  </button>
                  <button className="bg-red-600 text-white p-2 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                    <BsGoogle size={20} />
                  </button>
                  <button className="bg-blue-400 text-white rounded-full p-2 outline-none focus:outline-none mr-1 mb-1" type="button">
                    <BsTwitter size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;