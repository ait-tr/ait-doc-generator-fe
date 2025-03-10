import styled from "@emotion/styled"
import { NavLink, Link as SimpleLink } from "react-router-dom"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-attachment: fixed;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`

export const StayledHeader = styled.div`
  display: flex;
  width: 100%;
  min-height: 80px;
  padding: 10px;
  gap: 10px;
  background-color: rgba(18, 45, 77, 0.5);
  border-bottom: 1px solid rgba(210, 210, 210, 1);
  justify-content: space-between;
  padding-left: 85px;
  padding-right: 85px;
  align-items: center;
`

export const Logo = styled.div`
  height: 100%;
  width: fit-content;
  cursor: pointer;
`

export const LogoImg = styled.img`
  width: 100px;
  height: 100px;
`

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 30px;
  height: 100%;
  width: fit-content;
  align-items: center;
`

export const Link = styled(NavLink)`
  color: white;
  font-size: 20px;
  font-weight: normal;
  text-decoration: none;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 40px;
`
export const Footer = styled.div`
  display: flex;
  width: 100%;
  min-height: 80px;
  padding: 10px;
  gap: 10px;
  background-color: rgba(18, 45, 77, 0.5);
  justify-content: space-between;
  padding-left: 85px;
  padding-right: 85px;
  align-items: center;
`
export const FooterLink = styled(Link)`
  color: white;
  font-size: 14px;
  text-decoration: bold;
`
export const FooterNav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: space-evenly;
  text-align: center;
`
