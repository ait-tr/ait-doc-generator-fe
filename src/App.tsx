import { Route, Routes } from "react-router-dom"

import Layout from "./components/Layout/Layout"

import Home from "pages/Home/Home"
import Login from "pages/Login/Login"
import Registration from "pages/Registration/Registration"

import GlobalStyles from "./styles/GlobalStyles"

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
          <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registration" element={<Registration/>} />
          </Routes>
      </Layout>
    </>
  )
}

export default App
