import React from "react";
import { Card } from "./Styles";
import { Button } from "../../Components/Atom/Button/Button";
import { useFormik } from "formik";
import { signinSchema } from "../../Common/Schema";
import { loginUser } from "../../helper/loginUser";
import { supabase } from "../../helper/superbaseClient";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: signinSchema,
      onSubmit: async (values, action) => {
        await loginUser(values);
        action.resetForm();
        history.push("/dashboard");
      },
    });

  return (
    <Card>
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email ID"
              value={values.name}
              onChange={handleChange}
              autoComplete="off"
              onBlur={handleBlur}
            />
            {/* { <p>{errors.email}</p>} */}

            {errors.email && touched.email ? <p>{errors.email}</p> : null}
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              autoComplete="off"
              onBlur={handleBlur}
            />
            {/* { <p>{errors.password}</p>} */}

            {errors.password && touched.password ? (
              <p>{errors.password}</p>
            ) : null}
          </div>
          <Button type="submit">SIGN IN</Button>
        </form>
      </div>
      Email id : other1@gmail.com
      <br />
      password : 123456
    </Card>
  );
}
export default Login;
