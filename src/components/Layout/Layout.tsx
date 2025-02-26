import { Outlet } from "react-router-dom"
import { v4 } from "uuid"

import { Footer, FooterLink, FooterNav, LayoutWrapper, Main } from "./styles"
import { DG_APP_ROUTES } from "../../constants/routes"
import Header from "../Header/Header"

function Layout() {
  const isLogin = Boolean(localStorage.getItem("accessToken"))

  const appLinksFooter = {
    [DG_APP_ROUTES.HELP]: "Help",
    [DG_APP_ROUTES.ADVERTISING]: "Advertising",
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
      <Header></Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <FooterNav>{footerLinks}</FooterNav>
      </Footer>
    </LayoutWrapper>
  )
}

export default Layout
