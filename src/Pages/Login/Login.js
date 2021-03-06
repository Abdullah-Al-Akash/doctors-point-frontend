import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
        const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

        if (user) {
                console.log(user);
        }
        return (
                <div className="flex justify-center items-center h-screen">
                        <div class="card w-96 bg-base-100 p-8 shadow-xl">
                                <div class="card-body">
                                        <h2 class="text-center text-3xl font-bold">Login</h2>
                                </div>
                                <div class="divider">OR</div>
                                <button
                                        onClick={() => signInWithGoogle()}
                                        class="btn btn-outline">Continue with Google</button>
                        </div>
                </div>
        );
};

export default Login;