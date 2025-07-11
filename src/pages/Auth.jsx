import React, { useState } from 'react';
import Button from '../components/Button';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignupForm';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [activeComponent, setActiveComponent] = useState('login');
  const navigate = useNavigate();

  return (
    <div className='hero-bg min-h-screen flex items-center justify-center relative'>
      <div className="blur-shape blur-blue"></div>
      <div className="blur-shape blur-cyan"></div>
      <div className="blur-shape blur-purple"></div>
      <div className="blur-shape blur-light"></div>

      <div className='bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/30 w-full max-w-md mt-12 mx-4 p-8 rounded-3xl shadow-2xl'>

        {/* Tabs with sliding underline */}
        <div className='relative flex'>
          {/* Underline */}
          <div
            className={`absolute bottom-0 h-1 w-[120px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 ${activeComponent === 'login' ? 'left-[10%]' : 'left-[60%]'
              }`}
          ></div>

          {/* Login tab */}
          <div className='w-1/2 text-center'>
            <Button
              className='w-full text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 pb-2 cursor-pointer'
              label='Login'
              onClick={() => {
                setActiveComponent('login');
                navigate('/account/login');
              }}
            />
          </div>

          {/* Signup tab */}
          <div className='w-1/2 text-center'>
            <Button
              className='w-full text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 pb-2 cursor-pointer'
              label='Signup'
              onClick={() => {
                setActiveComponent('signup');
                navigate('/account/signup');
              }}
            />
          </div>
        </div>

        <hr className='w-full my-4 border-white/30' />

        {/* Render form and bottom link */}
        {activeComponent === 'login' ? (
          <>
            <LoginForm />
            <div className='flex items-center mt-4 w-full gap-2 justify-center'>
              <p className='text-white'>Don't have an account?</p>
              <Button
                label='Create one'
                className='p-0 bg-transparent text-white  border-b-2 border-zinc-400 hover:border-zinc-200 transition duration-200 cursor-pointer'
                onClick={() => {
                  setActiveComponent('signup');
                  navigate('/account/signup');
                }}
              />
            </div>
          </>
        ) : (
          <SignUpForm />
        )}
      </div>
    </div>
  );
};

export default Auth;
