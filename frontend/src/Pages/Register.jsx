import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Register = () => {
  const [accountType, setAccountType] = useState(null);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
    setPasswordMatch(true);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordError('');
    setPasswordMatch(true);
  };

  const validatePasswords = () => {
    if (password !== confirmPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Perform the sign-up logic based on the selected account type
    if (accountType === 'recruiter') {
      // Make a POST request to the recruiter API
      // Replace the API endpoint with your actual endpoint

      const registrationData = {
        first_name,
        last_name,
        phone,
        email,
        password,
      };

      fetch('http://127.0.0.1:8000/users/api/recruiter_register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),

      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data
          console.log(data);
        })
        .catch((error) => {
          // Handle the error
          console.error(error);
        });
    } else if (accountType === 'jobseeker') {
      // Make a POST request to the job seeker API
      // Replace the API endpoint with your actual endpoint

      const registrationData = {
        first_name,
        last_name,
        phone,
        email,
        password,
      };

      fetch('http://127.0.0.1:8000/users/api/seeker_register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
             body: JSON.stringify(registrationData),

      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data
          console.log(data);
        })
        .catch((error) => {
          // Handle the error
          console.error(error);
        });
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleFirstNameChange = (e) => {
    setFirst_name(e.target.value);
  };
  
  const handleLastNameChange = (e) => {
    setLast_name(e.target.value);
  };
  
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <>
      <Navbar />
      <section className="bg-gray-900 dark:bg-gray-900">
        <div className="flex  bg-gray-100 justify-center min-h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/5"
            style={{
              backgroundImage:
                "url('https://www.resourceondemand.com/wp-content/uploads/2021/04/tech-recruitment-ROD.jpg')",
            }}
          ></div>

          <div className="flex items-center w-full p-8 mx-auto lg:px-12 lg:w-3/5 my-20">
            <div className="w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                Get your free account now.
              </h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Let’s get you all set up so you can verify your personal account and begin setting up your profile.
              </p>

              <div className="mt-6">
                <h1 className="text-gray-500 dark:text-gray-300">Select type of account</h1>

                <div className="mt-3 md:flex md:items-center md:-mx-2">
                  <button
                    className={`flex justify-center w-full px-6 py-3 text-white rounded-md md:w-auto md:mx-2 focus:outline-none ${
                      accountType === 'recruiter' ? 'bg-blue-500' : 'bg-gray-500'
                    }`}
                    onClick={() => setAccountType('recruiter')}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="mx-2">Recruiter</span>
                  </button>

                  <button
                    className={`flex justify-center w-full px-6 py-3 mt-4 text-white border rounded-md md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none ${
                      accountType === 'jobseeker' ? 'bg-blue-500' : 'bg-gray-500'
                    }`}
                    onClick={() => setAccountType('jobseeker')}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>

                    <span className="mx-2">JobSeeker</span>
                  </button>
                </div>
              </div>

              <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" onSubmit={handleSignUp}>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={first_name}
                    onChange={handleFirstNameChange}

                 />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last name</label>
                  <input
                    type="text"
                    placeholder="Snow"
                    value={last_name}
                    onChange={handleLastNameChange}

                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone number</label>
                  <input
                    value={phone}
                    onChange={handlePhoneChange}
                    type="text"
                    placeholder="XXX-XX-XXXX-XXX"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="johnsnow@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                    className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring ${
                      passwordError ? 'border-red-500' : 'border-gray-200'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 dark:text-gray-200">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    onBlur={validatePasswords}
                    className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none ${
                      !passwordMatch ? 'border-red-500' : 'border-gray-200'
                    }`}
                  />
                  {!passwordMatch && <p className="text-red-500">Passwords do not match</p>}
                </div>
                <button
                  className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-500 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  <span>Create Account</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
