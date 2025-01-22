import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { useFormik } from "formik"
import * as Yup from "yup"

import { AppDispatch } from "store/store"
import { useAppSelector } from "store/hooks"
import {
  userAuthAction,
  userAuthSelectors,
} from "store/redux/users/userAuthSlice"

import Button from "components/Button/Button"
import Input from "components/Input/Input"

import {
  RegistrationContainer,
  InputContainer,
  ButtonContainer,
  PageWrapper,
  PageName,
} from "./styles"

function Registration() {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const EMAIL_REGX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First name field is required")
      .min(2, "First name field should contain minimum 2 symbols")
      .max(20, "First name field should contain maximum 20 symbols"),
    lastName: Yup.string()
      .required("Last name field is required")
      .min(2, "Last name field should contain minimum 2 symbols")
      .max(20, "Last name field should contain maximum 20 symbols"),
    email: Yup.string()
      .required("Email is required")
      .matches(EMAIL_REGX, "Email is not valid"),
    password: Yup.string()
      .required("Password field is required")
      .min(6, "Password field should contain minimum 6 symbols"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(phoneRegExp, "Phone number is not valid"),
  })

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
    },
    validationSchema,
    validateOnChange: false,

    onSubmit: async (values, helpers) => {
      const dispatchResult = await dispatch(
        userAuthAction.register({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          phone: values.phoneNumber,
        }),
      )

      if (userAuthAction.register.fulfilled.match(dispatchResult)) {
        helpers.resetForm()
        setTimeout(() => navigate("/login"), 10000)
      }

      if (userAuthAction.register.rejected.match(dispatchResult)) {
      }
    },
  })

  return (
    <PageWrapper>
      <PageName>Registration</PageName>
      <RegistrationContainer onSubmit={formik.handleSubmit}>
        <InputContainer>
          <Input
            id="firstName-id"
            name="firstName"
            type="text"
            placeholder="John"
            label="First name*"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.errors.firstName}
          />
          <Input
            id="lastName-id"
            name="lastName"
            type="text"
            placeholder="Johnson"
            label="Last name*"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.errors.lastName}
          />
          <Input
            id="email-id"
            name="email"
            type="text"
            placeholder="mail@mail.com"
            label="E-mail*"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
          />
          <Input
            id="password-id"
            name="password"
            type="password"
            label="Password*"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password}
          />
          <Input
            id="phoneNumber-id"
            name="phoneNumber"
            type="text"
            placeholder="+491754567645"
            label="Phone Number*"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            error={formik.errors.phoneNumber}
          />
        </InputContainer>
        <ButtonContainer>
          <Button
            disabled={!formik.dirty || formik.isSubmitting}
            name="Registration"
            type="submit"
          />
        </ButtonContainer>
        <Link style={{ color: "green" }} to="/login">
          or login
        </Link>
      </RegistrationContainer>
    </PageWrapper>
  )
}

export default Registration
