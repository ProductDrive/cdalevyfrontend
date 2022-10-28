import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getUserDetails } from "../features/user/userActions";
import { logout } from "../features/user/userSlice";

const Navbar = () => {
  const { userInfo, userToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // automatically authenticate user if token is found
  useEffect(() => {
    
  }, [userToken, dispatch]);
  const logoutHandler =() => {
   dispatch(logout());
     navigate('/login');
  }

  return (
    <nav
      className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
      id="layout-navbar"
    >
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
          <i className="bx bx-menu bx-sm" />
        </a>
      </div>
      <div
        className="navbar-nav-right d-flex align-items-center"
        id="navbar-collapse"
      >
        {/* Search */}
        <div className="navbar-nav align-items-center">
          
        </div>
        {/* /Search */}
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {/* Place this tag where you want the button to render. */}
          <li className="nav-item lh-1 me-3">
            
          </li>
          {/* User */}
          <li className="nav-item navbar-dropdown dropdown-user dropdown">
            <a
              className="nav-link dropdown-toggle hide-arrow"
              href="javascript:void(0);"
              data-bs-toggle="dropdown"
            >
              <div className="avatar avatar-online">
                <img
                  src="./style/assets/img/avatars/1.png"
                  alt=""
                  className="w-px-40 h-auto rounded-circle"
                />
              </div>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar avatar-online">
                        <img
                          src="../assets/img/avatars/1.png"
                          alt=""
                          className="w-px-40 h-auto rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      {userInfo &&(
                      <span className="fw-semibold d-block">{userInfo?.userBio}</span>)}
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bx bx-user me-2" />
                  <span className="align-middle">{userInfo?.zone}</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bx bx-user me-2" />
                  <span className="align-middle">My Profile</span>
                </a>
              </li>
             
              
              <li>
                <div className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={logoutHandler}>
                  <i className="bx bx-power-off me-2" />
                  <span className="align-middle">Log Out</span>
                </a>
              </li>
            </ul>
          </li>
          {/*/ User */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar