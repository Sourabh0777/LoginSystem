import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "../../Atom/Button/Button";
import { useFormik } from "formik";
import addData from "../../../helper/addData";
function Adduser({ onclose }) {
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        user_name: "",
        login_email: "",
        password: "",
      },
      // validationSchema: signinSchema,
      onSubmit: async (values, action) => {
        await addData(values).then(() => {
          console.log(
            "🚀 ~ file: Adduser.jsx:19 ~ awaitaddData ~ values:",
            values
          );
          onclose();
        });
      },
    });

  return (
    <AdduserForm>
      <Button className="button" onClick={onclose}>
        <CloseIcon />{" "}
      </Button>

      <form className="Form" onSubmit={handleSubmit}>
        <h2>Add User name and details</h2>
        <input
          type="email"
          placeholder="Email"
          name="login_email"
          id="login_email"
          value={values.login_email}
          onChange={handleChange}
          autoComplete="off"
          onBlur={handleBlur}
          required
        />
        <input
          type="text"
          placeholder="Name"
          name="user_name"
          id="user_name"
          value={values.user_name}
          onChange={handleChange}
          autoComplete="off"
          onBlur={handleBlur}
          required
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          autoComplete="off"
          onBlur={handleBlur}
          required
        />
        <Button type="submit">Add Details</Button>
      </form>
    </AdduserForm>
  );
}

export default Adduser;

const AdduserForm = styled.div`
  background-color: white;
  border: 1px solid black;
  padding: 10px;
  position: absolute;
  margin: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .button {
    padding: 10px;
    align-self: flex-start;
  }
  .Form {
    padding: 50px;
    display: flex;
    flex-direction: column;

    input {
      border: 1px solid black;
      padding: 20px;
      margin: 20px;
    }
  }
`;
