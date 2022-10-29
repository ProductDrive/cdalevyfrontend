import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { BASE_URL } from "../config/config";

const Houseboard = () => {
 
const { userInfo } = useSelector((state) => state.user);
const [loading, setLoading] = useState(false);
const [payments, setPayments] = useState([]);
const navigate = useNavigate();

useEffect(() => {
  getPaymentDetails();
}, [])

  const getPaymentDetails = () => {
    axios
      .get(`${BASE_URL}Payment/allsub?houseId=${userInfo.houseKey}`)
      .then((response) => {
        setPayments(response.data);
        console.log("------------------ response", response);
      })
      .catch((error) => console.log(error));
  };

  const priceSplitter = (number) =>
    number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

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
                <div className="col-lg-8 mb-4 order-0">
                  <div className="card">
                    <div className="d-flex align-items-end row">
                      <div className="col-sm-7">
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            Congratulations {userInfo?.bio}! 🎉
                          </h5>
                          <p className="mb-4">
                            You have done <span className="fw-bold">72%</span>{" "}
                            more sales today. Check your new badge in your
                            profile.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-5 text-center text-sm-left">
                        <div className="card-body pb-0 px-0 px-md-4">
                          <img
                            src="./style/assets/img/illustrations/man-with-laptop-light.png"
                            height={140}
                            alt="View Badge User"
                            data-app-dark-img="illustrations/man-with-laptop-dark.png"
                            data-app-light-img="illustrations/man-with-laptop-light.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />

                  {/* Payment Items*/}
                  <h5 className="pb-1 mb-4">Payment Items</h5>
                  {payments.length >0 ? (
                    <div className="row">
                      {payments?.map((item, i) => (
                        <div className="col-md-6 col-xl-4" key={i}>
                          <div
                            className={`card text-white mb-3 ${item.cardColour}`}
                          >
                            <div className="card-header">
                              Amount: {priceSplitter(item.amount)}
                            </div>
                            <div className="card-body">
                              <h5 className="card-title text-white">
                                {item.title}
                              </h5>
                              <small>
                                {moment(item.dueDate).format(" Do-MM-YYYY")}
                              </small>
                              <p className="card-text">{item.description}</p>
                            </div>
                            <a
                              href={item.paymentlink}
                              target="_blank"
                              className="btn btn-sm btn-primary m-3 p-1"
                            >
                              Pay
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="row">
                      <div className="col-sm-12">No Payments Available</div>
                    </div>
                  )}
                  {/* Payment Items*/}
                </div>
                <div className="col-lg-4 col-md-4 order-1">
                  {/* Transactions */}
                  <div className="order-2 mb-4">
                    <div className="card h-100">
                      <div className="card-header d-flex align-items-center justify-content-between">
                        <h5 className="card-title m-0 me-2">
                          Transactions - Print receipt
                        </h5>
                        <div className="dropdown">
                          <button
                            className="btn p-0"
                            type="button"
                            id="transactionID"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded" />
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="transactionID"
                          >
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Last 28 Days
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Last Month
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Last Year
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <ul className="p-0 m-0">
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <img
                                src="./style/assets/img/icons/unicons/paypal.png"
                                alt="User"
                                className="rounded"
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <small className="text-muted d-block mb-1">
                                  Cash
                                </small>
                                <h6 className="mb-0">Security</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-1">
                                <h6 className="mb-0">+82.6</h6>
                                <span className="text-muted">USD</span>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <img
                                src="./style/assets/img/icons/unicons/wallet.png"
                                alt="User"
                                className="rounded"
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <small className="text-muted d-block mb-1">
                                  Transfer
                                </small>
                                <h6 className="mb-0">Water</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-1">
                                <h6 className="mb-0">+270.69</h6>
                                <span className="text-muted">USD</span>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <img
                                src="./style/assets/img/icons/unicons/chart.png"
                                alt="User"
                                className="rounded"
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <small className="text-muted d-block mb-1">
                                  Transfer
                                </small>
                                <h6 className="mb-0">EKEDC</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-1">
                                <h6 className="mb-0">+637.91</h6>
                                <span className="text-muted">USD</span>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <img
                                src="./style/assets/img/icons/unicons/cc-success.png"
                                alt="User"
                                className="rounded"
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <small className="text-muted d-block mb-1">
                                  Online
                                </small>
                                <h6 className="mb-0">Water</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-1">
                                <h6 className="mb-0">-838.71</h6>
                                <span className="text-muted">USD</span>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <img
                                src="./style/assets/img/icons/unicons/wallet.png"
                                alt="User"
                                className="rounded"
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <small className="text-muted d-block mb-1">
                                  Online
                                </small>
                                <h6 className="mb-0">Security</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-1">
                                <h6 className="mb-0">+203.33</h6>
                                <span className="text-muted">USD</span>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex">
                            <div className="avatar flex-shrink-0 me-3">
                              <img
                                src="./style/assets/img/icons/unicons/cc-warning.png"
                                alt="User"
                                className="rounded"
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <small className="text-muted d-block mb-1">
                                  Online
                                </small>
                                <h6 className="mb-0">Seurity</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-1">
                                <h6 className="mb-0">-92.45</h6>
                                <span className="text-muted">USD</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*/ Transactions */}
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
};

export default Houseboard;
