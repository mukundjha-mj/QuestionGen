import React, { useState } from 'react'

const Login = () => {
  return (
    <div>
        <LoginForm />
    </div>
  )
}

export default Login

function LoginForm() {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <>
            <button onClick={() => setShowLogin(true)} className='bg-white text-black px-4 py-2 rounded-md cursor-pointer'>Login</button>
            {showLogin && (
                <div className='flex flex-col items-center justify-center h-screen'>
                    <h1 className='text-2xl font-bold'>Login</h1>
                    <input type="text" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <button>Login</button>
                </div>
            )}
        </>
    )
}