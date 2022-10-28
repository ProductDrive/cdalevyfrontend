import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { BASE_URL } from '../config/config';

const AddPaymentItem = () => {
  const { userInfo } = useSelector((state) => state.user);
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

const submitForm = (data) => {
  setLoading(true)
  const model = {
    id:'00000000-0000-0000-0000-000000000000',
    zoneId: userInfo.zoneId,
    name:data.name,
    description: data.description,
    amount: parseFloat(data.amount)
  };
  axios
    .post(`${BASE_URL}Payment/item`, model)
    .then((response) => {
      setLoading(false);
      if (response.status) {
        toast.success("Successful");
        navigate("/login");
      }
      console.log(response);
    })
    .catch((err) => {
        console.log(err)
        toast.error(err)
        setLoading(false)
    });
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
<ToastContainer />
          {/* Content wrapper */}
          <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="row">
                <div className="col-md-12">
                  {/* HTML5 Inputs */}
                  <div className="card mb-4">
                    <h5 className="card-header">Add Payment Item</h5>
                    <div className="card-body">
                      <form onSubmit={handleSubmit(submitForm)}>
                        <div className="mb-3 row">
                          <label
                            htmlFor="html5-text-input"
                            className="col-md-2 col-form-label"
                          >
                            Name
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              type="text"
                              id="html5-text-input"
                              required
                              {...register("name")}
                            />
                          </div>
                        </div>
                       

                        <div className="mb-3 row">
                          <label
                            htmlFor="html5-tel-input"
                            className="col-md-2 col-form-label"
                          >
                            Amount
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              type="number"
                              {...register("amount")}
                              id="html5-tel-input"
                            />
                          </div>
                        </div>
                      
                        <div className="mb-3 row">
                          <label
                            htmlFor="description"
                            className="col-md-2 col-form-label"
                          >
                            Description
                          </label>
                          <div className="col-md-10">
                            <input
                              className="form-control"
                              type="text"
                              required
                              {...register("description")}
                              id="description"
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

export default AddPaymentItem