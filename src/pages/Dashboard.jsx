import React from "react";
import { useAuth } from "../context/UserAuthContext"; // Corrected import path
import { Navigate } from "react-router-dom";
import Logout from "../components/Logout";

const Dashboard = () => {
	const { user } = useAuth();

	if (!user) {
		return <Navigate to="/" />;
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
			<h2 className="text-3xl font-semibold text-gray-700 mb-4">
				Welcome, {user.email}!
			</h2>
			<Logout />
		</div>
	);
};

export default Dashboard;
