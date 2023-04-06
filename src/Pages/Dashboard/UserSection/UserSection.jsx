import React, { useEffect, useState } from "react";
import { UserSectionn } from "./styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import fetchData from "../../../helper/fetchdata";
import { useHistory } from "react-router-dom";
import signOutUser from "../../../helper/signoutUser";
import { Button } from "../../../Components/Atom/Button/Button";
import deletedata from "../../../helper/deleteData";
import Adduser from "../../../Components/Molecules/Adduser/Adduser";
import EditusersDetails from "../../../Components/Molecules/EditusersDetails/EditusersDetails";
// const dummydata = [
//   { Identifier:1,user_name: "Sourabh", login_email: "Sourabh@gmail.com", Roll: "Admin" },
//   {Identifier:2, user_name: "Sourabh", login_email: "Sourabh@gmail.com", Roll: "Admin" },
//   {Identifier:3, user_name: "Sourabh", login_email: "Sourabh@gmail.com", Roll: "Admin" },
//   { Identifier:4,user_name: "Sourabh", login_email: "Sourabh@gmail.com", Roll: "Admin" },
// ];

function UserSection() {
  const [userData, setuserData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setEditShowForm] = useState(false);
  const [editData, setEditData] = useState({});

  const history = useHistory();

  useEffect(() => {
    async function getdata() {
      const data = await fetchData();
      setuserData(data);
    }
    getdata();
  }, [showForm,showEditForm]);

  const logouthandler = () => {
    signOutUser();
    history.push("/");
  };

  const adduserhandler = (a) => {
    if (a == 1) {
      setShowForm(true);
    }
    if (a == 2) {
      setEditShowForm(true);
    }
  };
  const handleCloseForm = () => {
    console.log("handleCloseForm running");
    setShowForm(false);
    setEditShowForm(false);

  };
  // console.log("🚀 ~ file: UserSection.jsx:21 ~ UserSection ~ userData:", userData)

  return (
    <UserSectionn>
      <h1>User Manager</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <Button onClick={logouthandler}>Logout</Button>

        <Button onClick={(e) => adduserhandler(1)}>Add User</Button>
      </div>
      {showForm && <Adduser onclose={handleCloseForm} />}

      {showEditForm && <EditusersDetails onclose={handleCloseForm} data= {editData}/>}

      <div className="table_container">
        <ul className="heading">
          <li>Email</li>
          <li>Name</li>

          <li>Edit</li>
          <li>Delete</li>
        </ul>
        {userData.map(({ id,user_metadata, role, email }) => {
          return (
            <>
              <div key={id} className="userdata">
                <ul className="userdata_ul">
                  <li>{email}</li>

                  <li>{user_metadata.name}</li>

                  <li>
                    <EditIcon
                      onClick={(e) => {
                        adduserhandler(2)
                        setEditData ({id, role,user_metadata, email}) 
                      }}
                    />
                  </li>
                  <li>
                    <DeleteIcon
                      onClick={(e) =>
                        deletedata(id).then(() => {
                          const updatedUsers = userData.filter(
                            (user) => user.id !== id
                          );
                          setuserData(updatedUsers);
                        })
                      }
                      style={{ cursor: "pointer" }}
                    />
                  </li>
                </ul>
              </div>
            </>
          );
        })}
      </div>
    </UserSectionn>
  );
}

export default UserSection;
