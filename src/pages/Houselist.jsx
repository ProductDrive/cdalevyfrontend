import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { BASE_URL } from "../config/config";

const Houselist = () => {
  const location = useLocation();
  const [uri, setUri] = useState("")
  const [DATA, setDATA] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const loc = location.pathname.split("/")[2];

    getPaymentDetails(loc);
  }, [location]);

  //Payment/allsub?houseId=${uri}
  const getPaymentDetails = (item) => {
    axios.get(`${BASE_URL}Payment/allsub?houseId=${item}`)
    .then((response) => {
      setDATA(response.data)
    })
  }

  const HandlePaid = (id, amount,sId) => {
    if(window.confirm("Are you sure you want to confirm this payment?")) {
      const model = {
        subcriptionId: sId,
        amount: parseFloat(amount),
        paymentType: "",
        houseId: location.pathname.split("/")[2],
        itemId: id,
        phoneNumber: "",
      };
      setLoading(false);
      //
      axios
        .post(`${BASE_URL}Payment/markaspaid`, model)
        .then((response) => {
          setLoading(false);
          if (response.data.status) {
            toast.success("Mark as paid successfully");
          }
          console.log(response);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err)
          toast.error(err)
        });
    }

  }
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
          <ToastContainer />
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
                        <div
                          className={`card text-white mb-3 ${item.cardColour}`}
                        >
                          <div className="card-header">
                            Amount: {priceSplitter(item.amount)}
                          </div>
                          <div className="card-body">
                            <h5 className="card-title text-white">
                              item.title
                            </h5>
                            <small>
                              {moment(item.dueDate).format(" Do-MM-YYYY")}
                            </small>
                            <p className="card-text">{item.description}</p>
                          </div>
                          <div className="row m-3">
                            <div className="col-md-12">
                              <a
                                href={item.reminderlink}
                                target="_blank"
                                className="btn btn-sm btn-secondary "
                              >
                                Reminder
                              </a>
                            </div>

                            <div className="col-md-12 mt-3">
                              <a
                                onClick={() =>
                                  HandlePaid(
                                    item.id,
                                    item.amount,
                                    item.paymentItemID
                                  )
                                }
                                className="btn btn-sm btn-primary"
                              >
                                {loading? 'Loading...':'Mark as Paid'}
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
