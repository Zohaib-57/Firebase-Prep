import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../firebase";
import { signInWithGoogle } from "./GoogleSignIn";
import { Link, useNavigate } from "react-router-dom";

const auth = getAuth(firebaseApp);

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const navigate = useNavigate();

	const handleSignIn = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				console.log("User SignIn Successful");
			})
			.catch((err) => {
				setError(err.message);
			});
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-600 p-4">
			<div className="bg-white shadow-lg rounded-lg p-8 w-96">
				<h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
					Sign In
				</h2>
				{error && (
					<p className="text-red-500 text-sm text-center mb-4">{error}</p>
				)}
				<label className="block text-gray-600 mb-2">Enter your email</label>
				<input
					type="email"
					placeholder="Enter email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>

				<label className="block text-gray-600 mb-2">Enter your password</label>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Enter password"
					className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>

				<button
					onClick={handleSignIn}
					className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 hover:cursor-pointer"
				>
					Sign In
				</button>
				<button
					className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 font-medium py-2 rounded-lg shadow-md hover:bg-gray-100 hover:border-gray-400 hover:shadow-lg hover:cursor-pointer my-5"
					onClick={signInWithGoogle}
				>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
						alt="Google logo"
						className="w-5 h-5"
					/>
					Sign in with Google
				</button>

				<p className="mt-4 text-sm text-gray-600">
					New here?{" "}
					<Link
						to="/signup"
						className="text-blue-500 hover:underline font-medium"
					>
						Create an account
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignIn;
