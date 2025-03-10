import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"
import { colors } from "styles/colors"

export const AppHeader = styled.header`
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

export const AppTitle = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 29.05px;
  margin-left: 30px;

  cursor: pointer;
`

export const HeaderNav = styled.nav`
  display: flex;
  gap: 30px;
  height: 100%;
  align-items: center;
`

export const HeaderLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 400px;
  text-decoration: none;
  line-height: 24.2px;

  margin-right: 50px;
  border-radius: 20px;

  &.active {
    font-weight: "bold";
  }
  @media (max-width: 768px) {
    font-size: 16px;
    margin-right: 20px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-right: 10px;
  }
`

export const LogoutContainer = styled.div`
  font-size: 20px;
  font-weight: 400px;
  text-decoration: none;
  line-height: 24.2px;

  margin-right: 50px;
  border-radius: 20px;

  &.active {
    font-weight: "bold";
  }
  @media (max-width: 768px) {
    font-size: 16px;
    margin-right: 20px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-right: 10px;
  }
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 700px;
  height: fit-content;
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
