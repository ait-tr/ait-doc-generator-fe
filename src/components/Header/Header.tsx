import { useNavigate } from "react-router-dom"

import { AppHeader, HeaderNav, Logo, LogoImg } from "./styles"
import DocGenLogo from "../../assets/DocGen_transparent_background.png"

import { DG_APP_ROUTES } from "../../constants/routes"
import Documents from "../../pages/Documents/Documents"

function Header() {
  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate(DG_APP_ROUTES.HOME)
  }
  return (
    <AppHeader>
  <Logo onClick={goToHomePage}>
    <LogoImg src={DocGenLogo} alt="DocGen Logo" />
  </Logo>
  
  <HeaderNav> {} 
   
  </HeaderNav>
</AppHeader>
  )
}

export default Header
