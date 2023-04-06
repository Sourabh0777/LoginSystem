import React from "react";
import { Edit_Box } from "./styles";
import { Button } from "../../Atom/Button/Button";

import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import { updateData } from "../../../helper/updateData";

function EditusersDetails({ onclose,data }) {
//   console.log("🚀 ~ file: EditusersDetails.jsx:8 ~ EditusersDetails ~ data:", data)


  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        id:data.id,
        email: data.email,
        name: data.user_metadata.name,
      },
      onSubmit: async (values, action) => {
        // console.log("🚀 ~ file: EditusersDetails.jsx:21 ~ onSubmit: ~ values:", values)
        await updateData(values),
        onclose();
      },
    });

  return (
    <Edit_Box>
      <Button className="button" onClick={onclose}>
        <CloseIcon />
      </Button>

      <form onSubmit={handleSubmit} className="Form">
        <label htmlFor="firstName">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter new email"
          value={values.email}
          onChange={handleChange}
        />
        <label htmlFor="firstName"> Name:</label>

        <br />
        <button type="submit">Save</button>
      </form>
    </Edit_Box>
  );
}

export default EditusersDetails;
