import React, { useState, useEffect } from "react";
import Navbar from '../Components/Navbar';
import axios from 'axios';

export default function RecruiterProfile() {
    let [countries, setCountries] = useState([]);
    //let [idRecruiter, setIDRecruiter] = useState([]);

    let [recruiter, setRecruiter] = useState([]);
    let [first_name, setFirst_name] = useState("");
    let [last_name, setLast_name] = useState("");
    let [phone, setPhone] = useState("");

    let [profilePic, setProfilePic] = useState([]);
    let [country, setCountry] = useState(0);
    let [title, setTitle] = useState("");
    let [about, setAbout] = useState("");

    let recruiter_Id = localStorage.getItem('recruiterId')
    let user_Id = localStorage.getItem('userId')
    const handleFirstName = (e) => {
        setFirst_name(e.target.value);
    }

    const handleLast_name = (e) => {
        setLast_name(e.target.value);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleCountry = (e) => {
        setCountry(e.target.value);
    }

    const handleAbout = (e) => {
        setAbout(e.target.value);
    }

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleProfilePicUpload = async(event) => {
        event.preventDefault();

        const file = event.target.files[0];
        setProfilePic(file);

        const formData = new FormData();
        formData.append('profilePicture', file);

      await  axios.put(`http://127.0.0.1:8000/users/api/recruiter_update/${1}/`, formData)
            .then((response) => {
                console.log('Upload successful:', response.data);
                alert("Profile Picture Updated successfully")
            })
            .catch(error => console.error(error));

        console.log("Profile uploaded-----------------");
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        const data = {
            "user": {
                "first_name": first_name,
                "last_name": last_name,
                "phone": phone
            },
            "country": country,
            "title": title,
            "about": about
        };

        console.log(data);

        await axios.put(`${process.env.REACT_APP_JOB_API_URL}/users/api/recruiter_update/${1}/`, data)
            .then((response) => {
                console.log('Upload successful:', response.data);
                //alert("Profile Picture Updated successfully")
            })
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_JOB_API_URL}/users/api/recruiter/${4}/`)
            .then(response => {
                setRecruiter(response.data)
                setFirst_name(response.data[0]?.user.first_name);
                setLast_name(response.data[0]?.user.last_name);
                setPhone(response.data[0]?.user.phone);
                setCountry(response.data[0]?.country.id);
                setAbout(response.data[0]?.about);
                setTitle(response.data[0]?.title);
            })
            .catch(error => console.error(error));

        axios.get(`${process.env.REACT_APP_JOB_API_URL}/users/api/countries/`)
            .then(response => setCountries(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <Navbar />
            <form onSubmit={handleUpdate}>
                <div className="w-full ">
                    <img src="https://marketplace.canva.com/EAE7gQjr2dU/1/0/1600w/canva-blue-modern-motivational-linkedin-banner-TJd4gmEFWyQ.jpg" className="w-full h-96 " alt="" />
                </div>
                <div className="flex flex-col items-center -mt-20 ">
                    <img src={`${process.env.REACT_APP_JOB_API_URL}/${recruiter[0]?.profilePicture}`} className="w-60 h-60 border-4 border-white rounded-full" alt="" />
                    <div className="flex items-center space-x-2 mt-2 ">
                        <p className="text-2xl">{first_name}  {last_name}</p>
                        <span className="bg-blue-500 rounded-full p-1" title="Verified">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </span>
                    </div>
                    <p className="text-gray-700">{title}</p>
                    <p className="text-sm text-gray-500">{country}</p>
                </div>

                <div className="min-h-screen p-6  flex items-center justify-center ">
                    <div className="container max-w-screen-lg mx-auto bg-white rounded shadow-2xl">
                        <div>
                            <div className=" p-4 px-4 md:p-8 mb-6">
                                <h2 className="font-semibold text-3xl text-gray-600 my-5">Step 1: Personal Details</h2>

                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                    <div className="text-gray-600">
                                        <p className="font-medium text-lg">Personal Details</p>
                                        <p>Please fill out all the fields.</p>
                                    </div>

                                    <div className="lg:col-span-2">
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className='flex gap-2 md:col-span-5'>
                                                <div className="flex-1 ">
                                                    <label htmlFor="full_name">First Name</label>
                                                    <input onChange={handleFirstName} type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={first_name} />
                                                </div>
                                                <div className="flex-1">
                                                    <label htmlFor="full_name">Last Name</label>
                                                    <input onChange={handleLast_name} type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={last_name} />
                                                </div>
                                            </div>

                                            <div className="md:col-span-3">
                                                <label htmlFor="address">Phone Number</label>
                                                <input onChange={handlePhone} type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={phone} placeholder="" />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="country">Country</label>
                                                <div className="relative">
                                                    <select className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" id="country" name="country" value={country} onChange={handleCountry}>
                                                        {countries.map((country) => (
                                                            <option key={country?.id} value={country?.id}>{country?.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="md:col-span-5">
                                                <label htmlFor="profile_pic">Profile Picture</label>
                                                <input type="file" name="profile_pic" id="profile_pic" className="border mt-1 rounded px-4 py-2 w-full bg-gray-50" onChange={handleProfilePicUpload} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className=" p-4 px-4 md:p-8 mb-6">
                                <h2 className="font-semibold text-3xl text-gray-600 my-5">Step 2: Professional Details</h2>

                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    <div className="text-gray-600">
                                        <p className="font-medium text-lg">Professional Details</p>
                                        <p>Please fill out all the fields.</p>
                                    </div>

                                    <div className="md:col-span-5">
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-5">
                                                <label>About</label>
                                                <textarea
                                                    type="text"
                                                    className="h-56 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    value={about}
                                                    onChange={handleAbout}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-5">
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-5">
                                                <label>Title</label>
                                                <input
                                                    type="text"
                                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    value={title}
                                                    onChange={handleTitle}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:col-span-5 text-right mt-5">
                                        <div className="flex items-center justify-center">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </>)
}