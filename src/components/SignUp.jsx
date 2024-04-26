import { updateProfile } from "firebase/auth";
import auth from "./firebase/firebase";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const handleCreateUser = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length < 6) {
            return setError('Password must be 6 character')
        }
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(password)){
            setError('your password should be one uppercase and one lowercase and at least one numer')
            return
        }
        
        createUser(email, password)
        .then(res => {
            console.log(res.user);
            updateProfile(auth.currentUser, {
                displayName: name
            })
        })
        .catch(error => {
            setError(error.message);
        })
    }
    return (
        <div className="py-20">
            <div className="w-full max-w-md container mx-auto p-8 space-y-3 rounded-xl text-gray-900 bg-gray-100 shadow-2xl">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleCreateUser} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block text-gray-400">name</label>
                        <input type="text" name="name" id="name" placeholder="name" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100 focus:border-violet-400 border" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-400">email</label>
                        <input type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100 focus:border-violet-400 border" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100  focus:border-violet-400 border" />
                        
                    </div>
                    {
                        error && <p className="text-red-600">{error}</p>
                    }
                    <button className="block w-full p-3 text-center rounded-sm text-white bg-green-600">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;