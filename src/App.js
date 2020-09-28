import React, { useState } from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import ActivateUserPage from "./pages/ActivateUserPage"
import LoginPage from "./pages/LoginPage.jsx"
import HomePage from "./pages/HomePage.jsx"
import { CustomerContext } from "./contexts/CustomerContext"
import { UserContext } from "./contexts/CustomerContext"
import DetailPage from "./pages/DetailPage"

function App() {
  const history = useHistory()
  const searchString = history.location.search
  const urlParameters = new URLSearchParams(searchString)

  const [customerList, setCustomerList] = useState([])
  const [user, setUser] = useState({})
  const [uid, setUid] = useState(urlParameters.get("uid"))
  const [token, setToken] = useState(urlParameters.get("token"))

  return (
    <div>
      <Switch>
        <UserContext.Provider value={{ user, setUser }}>
          <CustomerContext.Provider value={{ customerList, setCustomerList }}>
            <Route
              path="/customer/:id"
              render={props => <DetailPage {...props} />}
            />

            <Route path="/home">
              <HomePage />
            </Route>

            <Route path="/login">
              {uid && token ? (
                <ActivateUserPage
                  token={token}
                  setToken={setToken}
                  uid={uid}
                  setUid={setUid}
                />
              ) : (
                <LoginPage />
              )}
            </Route>

            <Route exact path="/">
              <RegisterPage />
            </Route>
          </CustomerContext.Provider>
        </UserContext.Provider>
      </Switch>
    </div>
  )
}
export default App
