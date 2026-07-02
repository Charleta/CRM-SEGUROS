"use client";

import {signIn} from "next-auth/react";
import { useState } from "react";

const LoginPage = () => {

    const [error, setError] = useState("");
    const [authenticated, setAuthenticated] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // const formData = new FormData(event.currentTarget);
        // const email = formData.get("email") as string;
        // const password = formData.get("password") as string;  
        
        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

            if (result?.error) {
                setError(result.error);
            }else {
                setError("");
                setAuthenticated(true);
            }
    }

    return (
        <>

        <form onSubmit={handleSubmit}>
                <input value={email} type="email" onChange ={(e) => setEmail(e.target.value)} />
                <input value={password} type="password" onChange ={(e) => setPassword(e.target.value)} /> 
                <button type="submit">Logins</button>         
        </form>
             {/* <form  onSubmit={handleSubmit}> 
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit" onClick={() => console.log("Logging in...")}>Logins</button>
            </form> */}

            {error && <p>{error}</p>}
            {authenticated && <p>Login successful!</p>}

        </>
    )
}

export default LoginPage;