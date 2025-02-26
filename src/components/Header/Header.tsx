import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from '@mui/material'






import { colors } from 'styles/colors'

import {
  AppHeader,
  AppTitle,
  HeaderLink,
  HeaderNav,
  LogoutContainer,
  SearchContainer,
} from './styles'
import { AppHeaderProps } from './types'
import { DG_APP_ROUTES } from '../../constants/routes'


function Header({ isLogin, toolName, onChangeValue }: AppHeaderProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  const goToHomePage = () => {
    navigate(DG_APP_ROUTES.HOME)
  }

  const handleLogout = () => {
    
    navigate(DG_APP_ROUTES.HOME)
  }

  return (
    <AppHeader>
      <AppTitle onClick={goToHomePage}>Document-Generator</AppTitle>
      <SearchContainer>
        
      </SearchContainer>
      <HeaderNav>
        <HeaderLink to={DG_APP_ROUTES.HOME}>
         
        </HeaderLink>
        <HeaderLink to={DG_APP_ROUTES.ADD_ADVERTS}>
        
        </HeaderLink>
        {isLogin ? (
          <>
            <HeaderLink to={DG_APP_ROUTES.MY_PROFILE}>
             
            </HeaderLink>
            <LogoutContainer onClick={handleLogout}>
             
            </LogoutContainer>
          </>
        ) : (
          <HeaderLink to={DG_APP_ROUTES.LOGIN}>
           
          </HeaderLink>
        )}
      </HeaderNav>
    </AppHeader>
  )
}

export default Header
