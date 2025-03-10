import { Outlet, useNavigate } from "react-router-dom"
import { v4 } from "uuid"

import { Footer, FooterLink, FooterNav, LayoutWrapper, Main } from "./styles"
import { DG_APP_ROUTES } from "../../constants/routes"
import Header from "../Header/Header"
import Documents from "../../pages/Documents/Documents"
import Login from "pages/Login/Login"
import HowItWorking from "pages/HowItWorking/HowItWorking"

function Layout() {
  const navigate = useNavigate()
  const isLogin = Boolean(localStorage.getItem("accessToken"))

  const appLinksFooter = {
    [DG_APP_ROUTES.HELP]: "Help",
    [DG_APP_ROUTES.ABOUT_US]: "About us",
    [DG_APP_ROUTES.CONTACTS]: "Contacts",
    [DG_APP_ROUTES.PRIVACY_POLICY]: "Privacy Policy",
    [DG_APP_ROUTES.CONDITIONS]: "Conditions of use",
    [DG_APP_ROUTES.IMPRINT]: "Imprint",
  }

  const footerLinks = Object.keys(appLinksFooter).map((link: string) => (
    <FooterLink key={v4()} to={link}>
      {appLinksFooter[link as keyof typeof appLinksFooter]}
    </FooterLink>
  ))

  return (
    <LayoutWrapper>
      <Header />
      <Main>
        <Outlet />
        <Login />
        <HowItWorking />
        <Documents />
      </Main>
      <Footer>
        <FooterNav>{footerLinks}</FooterNav>
      </Footer>
    </LayoutWrapper>
  )
}

export default Layout
