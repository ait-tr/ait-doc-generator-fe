import { useNavigate } from "react-router-dom"

import { AppHeader, HeaderLink, HeaderNav, Logo, LogoImg } from "./styles"
import DocGenLogo from "../../assets/DocGen_transparent_background.png"

import { DG_APP_ROUTES } from "../../constants/routes"
import { colors } from "styles/colors"
import LoginIcon from '@mui/icons-material/Login'

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

      <HeaderNav>  <HeaderLink to={DG_APP_ROUTES.LOGIN}>
            <LoginIcon
              sx={{
                transition: 'background-color 0.3s, color 0.3s',
                '&:hover': {
                  color: colors.BUTTON_BLUE,
                },
              }}
            />
          </HeaderLink>
        
      </HeaderNav>
    </AppHeader>
  )
}

export default Header
