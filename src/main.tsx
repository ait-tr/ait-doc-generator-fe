import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"

import App from "./App"
import { store } from "./store/store"

import GlobalStyles from "./styles/GlobalStyles"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <Provider store={store}>
      <GlobalStyles />
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}