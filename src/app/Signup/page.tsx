"use client";
import {useState} from 'react';
import { useRouter } from 'next/navigation'


export default function SignupPage() {
  
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const router = useRouter();


  const handleSignup = async () => {
  const res = await fetch("../api/auth/signup",{
    method:"POST",
    body:JSON.stringify({email,password}),
  });
  
  if (res.ok) {
      alert("Signup successful");
      router.push("/login");
    } else {
      const data = await res.json();
      alert(data.error);
    }

  };

    return (
 <div className="p-6 max-w-sm mx-auto">
      <h1 className="text-2xl mb-4">Sign Up</h1>
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2 mb-4 w-full"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup} className="bg-green-500 text-white px-4 py-2">
        Sign Up
      </button>
    </div>
  )
}

