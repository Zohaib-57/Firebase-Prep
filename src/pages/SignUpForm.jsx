import React from "react";
import { useState } from "react";

const SignUpForm = () => {
	const [email,setEmail] = useState("");
	const [password,setPassword] = useState("");
	const [error,setError] = useState("");


	return(
		<div className="signup-page">
			<label htmlFor="">Email</label>
			<input type="email" required
			placeholder="Enter your email" />
			<label htmlFor="">Password</label>
			<input type="password"
			required 
			placeholder="Enter password"/>

			<button>SignUp</button>
		</div>
	)
}
export default SignUpForm;