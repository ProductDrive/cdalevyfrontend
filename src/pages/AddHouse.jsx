import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { BASE_URL } from '../config/config';

const AddHouse = () => {
  const { userInfo } = useSelector((state) => state.user);
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false)

const submitForm = (data) => {
  setLoading(true)
  const model = {
    firstName: data.firstName,
    lastName: data.lastName,
    houseAddress: data.address,
    zoneName: userInfo.zone,
    zoneId: userInfo.zoneId,
    houseHoldId: userInfo.houseKey,
    houseRepType: 0,
    email: data.email,
    password:data.password,
    phoneNumber: data.phoneNumber
  };
  axios.post(`${BASE_URL}Accounts/registerahouse`, model)
  .then((response)=>{
    setLoading(false)
    if(response){
      toast("Successful")
    }
    console.log(response)
  })
  .catch(err=> console.log(err))
}
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* Menu */}
        <Sidebar />
        {/* / Menu */}

        {/* Layout container */}
        <div className="layout-page">
          {/* Navbar */}
          <Navbar />
          {/* / Navbar */}

          {/* Content wrapper */}
          <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="row">
                <div className="col-md-12">
                  {/* HTML5 Inputs */}
                  <div className="card mb-4">
                    <h5 className="card-header">Add A House</h5>
                    <div className="card-body">
                      <form onSubmit={handleSubmit(submitForm)}>
                        <div className="mb-3 row">
                          <label
                            htmlFor="html5-text-input"
                            className="col-md-2 col-form-label"
                          >
                            First Name
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              type="text"
                              id="html5-text-input"
                              required
                              {...register("firstName")}
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            htmlFor="html5-text-input"
                            className="col-md-2 col-form-label"
                            
                          >
                            Last Name
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              type="text"
                              required
                              id="html5-text-input"
                              {...register("lastName")}
                            />
                          </div>
                        </div>

                        <div className="mb-3 row">
                          <label
                            htmlFor="html5-email-input"
                            className="col-md-2 col-form-label"
                          >
                            Email
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              type="email"
                              required
                              id="html5-email-input"
                              {...register("email")}
                            />
                          </div>
                        </div>

                        <div className="mb-3 row">
                          <label
                            htmlFor="html5-tel-input"
                            className="col-md-2 col-form-label"
                          >
                            Phone
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              type="tel"
                              {...register("phoneNumber")}
                              id="html5-tel-input"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            htmlFor="html5-password-input"
                            className="col-md-2 col-form-label"
                          >
                            Password
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              type="password"
                              required
                              {...register("password")}
                              id="html5-password-input"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            htmlFor="address"
                            className="col-md-2 col-form-label"
                          >
                            Full Address
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              type="text"
                              required
                              {...register("address")}
                              id="address"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <button type='submit' className="btn btn-primary">{loading ? 'Loading...':'Submit'}</button>
                            </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* / Content */}
            {/* Footer */}
            <Footer />
            {/* / Footer */}
            <div className="content-backdrop fade" />
          </div>
          {/* Content wrapper */}
        </div>
        {/* / Layout page */}
      </div>
      {/* Overlay */}
      <div className="layout-overlay layout-menu-toggle" />
    </div>
  );
}

export default AddHouse