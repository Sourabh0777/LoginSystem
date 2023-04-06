import React, { useEffect, useState } from "react";
import { userID } from "../../../helper/loginUser";
import  retrieveauser  from "../../../helper/retrieveauser";
import "./Sidebar.css";

const Sidebar = () => {
  const [userData, setUserData]=useState([])

  useEffect(() => {

  
    async function getCurrentUserDetails() {
      const currentUserDetails = await retrieveauser(userID);
      setUserData(currentUserDetails)
    }

    getCurrentUserDetails();
  },[]);

  return (
    <div className="sidebar">
      <h4>User Details : {userData?.user?.email}</h4>
    </div>
  );
};

export default Sidebar;
