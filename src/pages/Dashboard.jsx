import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { BASE_URL } from '../config/config';

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.user);
  
  const [loading, setLoading] = useState(false)
  const [payments, setPayments] = useState([])
  const [housess, setHouses] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo?.roles[0] !== "AreaCoordinator") {
      navigate("/house");
    }
    getPaymentDetails();
    getHouses()
  }, [userInfo]);


  const getPaymentDetails = () => {
    axios.get(`${BASE_URL}Payment/allsub?houseId=${userInfo.houseKey}`)
    .then((response)=>{
      console.log('=========================paym===========');
      console.log(response);
      console.log('====================================');
      setPayments(response.data)
    })
    .catch(error=> console.log(error))
  }

  const getHouses = () => {
    axios
      .get(`${BASE_URL}House/zone?zoneId=${userInfo.zoneId}`)
      .then((response) => {
         setHouses(response.data.returnObj);
      })
      .catch((error) => console.log(error));
  }

  const DATA = [
    {
      id: 1,
      title: "Security",
      description:
        "Some quick example text to build on the card title and make up.",
      amount: "NGN 1,000",
      bg: "bg-warning",
      dueDate: "2022-12-03",
    },
    {
      id: 2,
      title: "Light",
      description:
        "Some quick example text to build on the card title and make up.",
      amount: "NGN 4,000",
      bg: "bg-danger",
      dueDate: "2022-10-23",
    },
    {
      id: 3,
      title: "Water",
      description:
        "Some quick example text to build on the card title and make up.",
      amount: "NGN 500",
      bg: "bg-success",
      dueDate: "2023-01-03",
    },
  ];

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
                <h5 className="pb-1 mb-4">This Month</h5>
                <div className="col-lg-8 mb-4 order-0">
                  <div className="card">
                    <div className="d-flex align-items-end row">
                      <div className="col-sm-7">
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            Good Day, {userInfo?.userBio}! 🎉
                          </h5>
                          <p className="mb-4">
                            You have done <span className="fw-bold">72%</span>{" "}
                            more sales today. Check your new badge in your
                            profile.
                          </p>
                          <a
                            href="javascript:;"
                            className="btn btn-sm btn-outline-primary"
                          >
                            View Badges
                          </a>
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
                </div>
                <div className="col-lg-4 col-md-4 order-1">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-6 mb-4">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="avatar flex-shrink-0">
                              <img
                                src="./style/assets/img/icons/unicons/chart-success.png"
                                alt="chart success"
                                className="rounded"
                              />
                            </div>
                            <div className="dropdown">
                              <button
                                className="btn p-0"
                                type="button"
                                id="cardOpt3"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="cardOpt3"
                              >
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  View More
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                          <span className="fw-semibold d-block mb-1">Paid</span>
                          <h3 className="card-title mb-2">$12,628</h3>
                          <small className="text-success fw-semibold">
                            <i className="bx bx-up-arrow-alt" /> +72.80%
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-6 mb-4">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="avatar flex-shrink-0">
                              <img
                                src="./style/assets/img/icons/unicons/wallet-info.png"
                                alt="Credit Card"
                                className="rounded"
                              />
                            </div>
                            <div className="dropdown">
                              <button
                                className="btn p-0"
                                type="button"
                                id="cardOpt6"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="cardOpt6"
                              >
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  View More
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                          <span>Outstanding</span>
                          <h3 className="card-title text-nowrap mb-1">
                            $4,679
                          </h3>
                          <small className="text-success fw-semibold">
                            <i className="bx bx-up-arrow-alt" /> +28.42%
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Total Revenue */}
                <div className="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
                  <div className="card p-3">
                    <div className="col-md-12">
                      <h5 className="card-header m-0"> My House Payments </h5>
                      <div className="row">
                        {DATA.map((item, i) => (
                          <div className="col-md-6 col-xl-4" key={i}>
                            <div className={`card text-white mb-3 ${item.bg}`}>
                              <div className="card-header">{item.amount}</div>
                              <div className="card-body">
                                <h5 className="card-title text-white">
                                  {item.title} - <small>{item.dueDate}</small>
                                </h5>
                                {/* <p className="card-text">{item.description}</p> */}
                              </div>
                              <a
                                href="https://afeexclusive.github.io/oilandgas/seerbitpay.html?s=7be446b8-4d7f-4355-8a2c-8abc3448124f&h=7be446b8-4d7f-4355-8a2c-8abc3448124f&i=7be446b8-4d7f-4355-8a2c-8abc3448124f&cn=Afe&pr=650"
                                className="btn btn-sm btn-primary m-3 p-1"
                              >
                                Pay
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/*/ Total Revenue */}
                <div className="col-12 col-md-8 col-lg-4 order-3 order-md-2">
                  <div className="row">
                    <div className="col-6 mb-4">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="avatar flex-shrink-0">
                              <img
                                src="./style/assets/img/icons/unicons/paypal.png"
                                alt="Credit Card"
                                className="rounded"
                              />
                            </div>
                            <div className="dropdown">
                              <button
                                className="btn p-0"
                                type="button"
                                id="cardOpt4"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="cardOpt4"
                              >
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  View More
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                          <span className="d-block mb-1">People oweing</span>
                          <h3 className="card-title text-nowrap mb-2">2,456</h3>
                          <small className="text-danger fw-semibold">
                            <i className="bx bx-down-arrow-alt" /> -14.82%
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 mb-4">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="avatar flex-shrink-0">
                              <img
                                src="./style/assets/img/icons/unicons/cc-primary.png"
                                alt="Credit Card"
                                className="rounded"
                              />
                            </div>
                            <div className="dropdown">
                              <button
                                className="btn p-0"
                                type="button"
                                id="cardOpt1"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="cardOpt1"
                              >
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  View More
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                          <span className="fw-semibold d-block mb-1">
                            People who paid
                          </span>
                          <h3 className="card-title mb-2">4,857</h3>
                          <small className="text-success fw-semibold">
                            <i className="bx bx-up-arrow-alt" /> +28.14%
                          </small>
                        </div>
                      </div>
                    </div>
                    {/* </div> <div class="row"> */}
                  </div>
                </div>
              </div>
             
              <div className="row">
                {/* Order Statistics */}
                <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
                  <div className="card h-100">
                    <div className="card m-1">
                      <h5 className="card-header">View Houses Details</h5>
                      <div className="table-responsive text-nowrap">
                        <table className="table">
                          <thead>
                            <tr className="text-nowrap">
                              <th>#</th>
                              <th>Name</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                        <tbody>
   
  
                            {/* houses data */}
                           {housess?.map((er,i)=>(
                            <tr key={i}>
                              <th scope="row">{i+1}</th>
                              <td>{er.houseRepName}</td>
                              <td>
                                <Link to={`/list/${er.id}`}>Details</Link>
                              </td>
                            </tr>
                           ))} 
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/ Order Statistics */}
                {/* Expense Overview */}
                <div className="col-md-6 col-lg-4 order-1 mb-4">
                  <div className="card h-100">
                    <div className="card-header">
                      <ul className="nav nav-pills" role="tablist">
                        <li className="nav-item">
                          <button
                            type="button"
                            className="nav-link active"
                            role="tab"
                            data-bs-toggle="tab"
                            data-bs-target="#navs-tabs-line-card-income"
                            aria-controls="navs-tabs-line-card-income"
                            aria-selected="true"
                          >
                            Send General Notice
                          </button>
                        </li>
                      </ul>
                      <br />
                      <div>
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Enter your message here
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={15}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/*/ Expense Overview */}
                {/* Transactions */}
                <div className="col-md-6 col-lg-4 order-2 mb-4">
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

export default Dashboard