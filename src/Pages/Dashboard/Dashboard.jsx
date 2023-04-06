import React, { useEffect } from "react";
import { Switch, useHistory } from "react-router-dom";
import { Button } from "../../Components/Atom/Button/Button";
import Sidebar from "../../Components/Molecules/Sidebar/Sidebar";
import signOutUser from "../../helper/signoutUser";
import { DashBoard } from "./styles";
import UserSection from "./UserSection/UserSection";

const Dashboard = () => {
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("sb-ohnoagcghxivaltvjcgn-auth-token")) {
      history.push("/");
    }
  }, []);

  return (
    <>
      <DashBoard>
        <Sidebar></Sidebar>
        <UserSection />
      </DashBoard>

    </>
  );
};

export default Dashboard;
