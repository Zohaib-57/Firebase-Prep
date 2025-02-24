import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../firebase";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const auth = getAuth(firebaseApp);

	const createUser = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(() => {
				console.log("Signup Successful");
			})
			.catch((error) => {
				console.log(error);
				setError(error.message);
			});
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-300 to-green-600 p-5">
			<div className="bg-white shadow-lg rounded-2xl p-8 max-w-sm w-full">
				<h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
					Sign Up
				</h2>
				{error && <p className="text-red-500 text-sm mb-4">{error}</p>}
				<label className="block text-gray-600 text-sm font-medium mb-2">
					Email
				</label>
				<input
					type="email"
					required
					value={email}
					placeholder="Enter your email"
					onChange={(e) => setEmail(e.target.value)}
					className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
				/>

				<label className="block text-gray-600 text-sm font-medium mt-4 mb-2">
					Password
				</label>
				<input
					type="password"
					required
					value={password}
					placeholder="Enter password"
					onChange={(e) => setPassword(e.target.value)}
					className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
				/>

				<button
					onClick={createUser}
					className="w-full mt-6 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
				>
					Sign Up
				</button>
			</div>
		</div>
	);
};

export default SignUp;
