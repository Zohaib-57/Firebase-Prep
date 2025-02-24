import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
	const navigate = useNavigate();
	const handleLogout = () => {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				toast.success("Logout successful!");
				navigate("/");
			})
			.catch((error) => {
				toast.error("Logout failed!");
				console.error(error);
			});
	};

	return (
		<button
			onClick={handleLogout}
			className="w-[100px] bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
		>
			Logout
		</button>
	);
};

export default Logout;
