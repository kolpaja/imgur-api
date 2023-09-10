import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from "./App.tsx"
import Gallery from "./pages/Gallery.tsx"

import "./styles/index.css"
import NoMatch from "./pages/NoMatch.tsx"
import Loading from "./components/Loading.tsx"
import { Provider } from "react-redux"
import { store } from "./app/store"
import SearchPage from "@/pages/SearchPage.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/gallery/:id",
    element: <Gallery />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "*",
    element: <NoMatch />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </Provider>
  </React.StrictMode>,
)
