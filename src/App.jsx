import { useState } from "react";
import { useFirebase } from "./context/Firebase";
import SignIn from "./pages/SignIn";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const firebase = useFirebase();

  console.log(firebase);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Firebase</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={() => {
            firebase.signupUserWithEmailAndPassword(email, password);
            firebase.putData("user/" + "user65", { email, password });
          }}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Sign Up
        </button>
      </div>
      <SignIn />
    </div>
  );
}

export default App;
