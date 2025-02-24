import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/UserAuthContext"; // Corrected import path
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard"; // Added missing import

function App() {
	return (
		<AuthProvider>
			<Router>
				<ToastContainer position="top-right" autoClose={3000} />
				<Routes>
					<Route path="/" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</Router>
		</AuthProvider>
	);
}
export default App;
