import { useNavigate } from "react-router-dom"

import { AppHeader, AppTitle } from "./styles"

import { DG_APP_ROUTES } from "../../constants/routes"

function Header() {
  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate(DG_APP_ROUTES.HOME)
  }
  return (
    <AppHeader>
      <AppTitle onClick={goToHomePage}>Document-Generator</AppTitle>
    </AppHeader>
  )
}

export default Header
