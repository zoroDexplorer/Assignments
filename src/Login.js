import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const SubmitHandler = async (data) => {
        console.log(data);
        const { username, password } = data;
        const res = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
                expiresInMins: 30, // optional, defaults to 60
            }),
        });            
        const fin = await res.json();
        console.log(fin);
        if (fin.message === 'Invalid credentials') {
            toast.error('Wrong credentials');
        } else {
            toast.success('Logged in :)');
            navigate('/Movie');
        }
    };

    return (
        <div className="flex items-center justify-center w-screen h-screen ">
            <form onSubmit={handleSubmit(SubmitHandler)} className="container bg-orange-100 w-72 h-1/2 flex flex-col items-center justify-center p-10s gap-3 rounded-lg">
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70"
                    >
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
                        />
                    </svg>
                    <input {...register('username')} type="text" className="grow" placeholder="Username" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70"
                    >
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <input {...register('password')} type="password" className="grow" />
                </label>
                <button type="submit" className="bg-blue-400 rounded mt-3 text-black">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
