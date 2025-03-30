import React, { useState } from "react";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { initializeApp } from "firebase/app";

// Firebase configuration (replace with your actual Firebase config)
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

const Signup = () => {
  const [wizardName, setWizardName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedHouse, setSelectedHouse] = useState(null);
  
  const houses = [
    { name: "Gryffindor", description: "Courage & Knowledge", color: "from-red-600 to-yellow-500" },
    { name: "Hufflepuff", description: "Loyalty & Facts", color: "from-yellow-500 to-green-500" },
    { name: "Ravenclaw", description: "Wisdom & Logic", color: "from-blue-600 to-indigo-500" },
    { name: "Slytherin", description: "Ambition & Cunning", color: "from-green-700 to-black" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Account Created Successfully!"); // Replace with backend API call
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google Sign-In Success:", result.user);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
        <div className="flex flex-col items-center justify-center h-full text-white">
          <img src="/logo.png" alt="Quizziitch Logo" className="mb-4 w-32" />
          <h1 className="text-5xl font-bold">QUIZIITCH</h1>
          <p className="text-lg mt-2">The ultimate magical quiz platform for witches and wizards</p>
        </div>
      </div>

      <div className="w-1/2 bg-cream p-10">
        <h2 className="text-3xl font-bold">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          Wizard name <br/> <input type="text" className="input" placeholder="Wizard Name" value={wizardName} onChange={(e) => setWizardName(e.target.value)} required /> <br/>
          Email Adress <br/> <input type="email" className="input" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required /> <br/>
          Password <br/> <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /> <br/>
          Confirm password <br/> <input type="password" className="input" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required /> <br/>
          
          <h3 className="text-xl font-semibold">House Affiliation</h3>
          <div className="grid grid-cols-2 gap-4">
            {houses.map((house) => (
              <button key={house.name} onClick={() => setSelectedHouse(house.name)} type="button"
                className={`p-4 border rounded-lg transition ${
    selectedHouse === house.name ? "border-red-500" : "border-gray-300"}
                bg-gradient-to-b ${house.color} text-white`}> 
                <h4 className="font-bold">{house.name}</h4>
                <p>{house.description}</p>
              </button>
            ))}
          </div>
          
          <button type="submit" className="btn bg-gold w-full">Create Magical Account</button>
          <p className="text-center mt-2">OR</p>
          <button type="button" onClick={handleGoogleSignIn} className="btn bg-white text-gray-700 w-full flex items-center justify-center gap-2 border border-gray-300">
            <img src="/google-icon.png" alt="Google" className="w-5" /> Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;