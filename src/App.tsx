import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"

import GlobalStyles from "./styles/GlobalStyles"

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={"error 404 - Page not found"} />
          </Routes>
      </Layout> */}
    </>
  )
}

export default App
