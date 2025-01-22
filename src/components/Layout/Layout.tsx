import { useNavigate } from "react-router-dom"

import {
  LayoutWrapper,
  Header,
  NavigationContainer,
  Main,
  Logo,
  LogoImg,
  Link,
  Footer
} from "./styles"

import { LayoutProps, PagesPaths } from "./types"
import logo from "../../assets/DocGen_transparent_background.png"

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate(PagesPaths.HOME)
  }

  return (
    <LayoutWrapper>
      <Header>
        <Logo onClick={goToHomePage}>
        <LogoImg
              src={logo}
            />
        </Logo>
        <NavigationContainer>
          <Link
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to={PagesPaths.HOWITWORKING}
          >
            How it working
          </Link>
          <Link
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to={PagesPaths.LOGIN}
          >
            Login
          </Link>
          <Link
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to={PagesPaths.REGISTRATION}
          >
            Registration
          </Link>
        </NavigationContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
      <Logo onClick={goToHomePage}>
        <LogoImg
              src={logo}
            />
        </Logo>
        <NavigationContainer>
      <Link
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to={PagesPaths.HOME}
          >
            FAQ
          </Link>
          <Link
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to={PagesPaths.HOME}
          >
            Privacy Policy
          </Link>
          </NavigationContainer>
      </Footer>
    </LayoutWrapper>
  )
}

export default Layout
