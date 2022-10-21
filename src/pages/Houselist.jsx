import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Houselist = () => {
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
    {
      id: 4,
      title: "Road",
      description:
        "Some quick example text to build on the card title and make up.",
      amount: "NGN 10,000",
      bg: "bg-danger",
      dueDate: "2022-11-03",
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
                <div className="col-lg-12 mb-4 order-0">
                  
                  <br />

                  {/* Payment Items*/}
                  <h5 className="pb-1 mb-4">Baale HouseHold</h5>
                  <div className="row">
                    {DATA.map((item, i) => (
                      <div className="col-md-4 col-xl-3" key={i}>
                        <div className={`card text-white mb-3 ${item.bg}`}>
                          <div className="card-header">{item.amount}</div>
                          <div className="card-body">
                            <h5 className="card-title text-white">
                              {item.title} - <small>{item.dueDate}</small>
                            </h5>
                            <p className="card-text">{item.description}</p>
                          </div>
                          <div className="row m-3">
                            <div className="col-md-6 text-left">
                                <a
                                href="https://api.whatsapp.com/send/?phone=07060936988&text=This is a reminder to pay up your house charges"
                                className="btn btn-sm btn-secondary "
                                >
                                    Reminder
                                </a>
                            </div>
                            <div className="d-md-none sm-block"><br /> </div>
                            <div className="col-md-6 text-right">
                            <a
                            href="#"
                            className="btn btn-sm btn-primary"
                          >
                            Mark as Paid
                          </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Payment Items*/}
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

export default Houselist;
