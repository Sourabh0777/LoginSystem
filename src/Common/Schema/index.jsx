import * as Yup from "yup";
 
export const signinSchema = Yup.object({
    email: Yup.string().email().required("Please enter Email"),
    password: Yup.string().min(6).required("Please enter Password")
})
    