import React, { useState, useEffect } from "react"
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom"
// import { isAuthenticated } from "./utils/auth"
import Login from "./pages/Login/Login"
import Homepage from "./pages/Home/Homepage"
import ManageContent from "./pages/ManageContent/ManageContent"
import ManagePatient from "./pages/ManagePatient/ManagePatient"
import Transaction from "./pages/Transaction/Transaction"
import Layout from "./components/Layout"
import Detail from "./pages/ManagePatient/Detail"

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(true)

	useEffect(() => {
		// Check if the user is logged in by checking the token
		// setIsLoggedIn(isAuthenticated())
	}, [])

	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route
					path="/"
					element={isLoggedIn ? <Layout /> : <Navigate to="/login" />}
				>
					<Route path="homepage" element={<Homepage />} />
					<Route path="managecontent" element={<ManageContent />} />
					<Route path="managepatient" element={<ManagePatient />} />
					<Route path="managepatient/detail" element={<Detail />} />
					<Route path="transaction" element={<Transaction />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App
