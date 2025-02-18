import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../firebase";

const SignUpForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const auth = getAuth(firebaseApp);

	const createUser = (e) => {
		createUserWithEmailAndPassword(auth, email, password).then((value) => {
			console.log(value);
		});
	};

	return (
		<div className="signup-page">
			<label htmlFor="">Email</label>
			<input
				type="email"
				required
				value={email}
				placeholder="Enter your email"
				onChange={(e) => setEmail(e.target.value)}
			/>

			<label htmlFor="">Password</label>
			<input
				type="password"
				required
				value={password}
				placeholder="Enter password"
				onChange={(e) => setPassword(e.target.value)}
			/>

			<button onClick={createUser}>SignUp</button>
		</div>
	);
};
export default SignUpForm;
