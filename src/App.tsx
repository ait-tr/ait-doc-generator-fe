import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SnackbarProvider } from "notistack"
import { DG_APP_ROUTES } from "./constants/routes"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import Documents from "./pages/Documents/Documents"
import Login from "./pages/Login/Login"
import Registration from "./pages/Registration/Registration"
import HowItWorking from "./pages/HowItWorking/HowItWorking"


function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <BrowserRouter>
        <Routes>
          <Route path={DG_APP_ROUTES.HOME} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={DG_APP_ROUTES.DOCUMENTS} element={<Documents />} />
         <Route path={DG_APP_ROUTES.HOWITWORKING} element={<HowItWorking />} />
          <Route path={DG_APP_ROUTES.LOGIN} element={<Login />} />
          <Route path={DG_APP_ROUTES.REGISTRATION} element={<Registration />} />
         </Route></Routes>
      </BrowserRouter>
    </SnackbarProvider>
  )
}

export default App
