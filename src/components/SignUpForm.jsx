import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Input from './Input';

const SignupForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const result = await axios.post('http://localhost:3000/api/v1/user/signin', {
                email: email,
                password: password
            })
            setResponse(result.data)
            if (result.data) {
                navigate('/');

            }
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
            setResponse(error.response?.data || { error: 'Login failed' })
        } finally {
            setLoading(false)
        }
    }
    return (
        <div>

            <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                    <label htmlFor="email" className='block text-white/90 mb-2 font-medium text-sm'>
                        Email
                    </label>
                    <input
                        className='w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-white placeholder-white/50 transition-all duration-200'
                        type="email"
                        name='email'
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className='block text-white/90 mb-2 font-medium text-sm'>
                        Password
                    </label>
                    <Input className='w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-white placeholder-white/50 transition-all duration-200'
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="firstName" className='block text-white/90 mb-2 font-medium text-sm'>
                        FirstName
                    </label>
                    <Input className='w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-white placeholder-white/50 transition-all duration-200'
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Enter your firstName"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className='block text-white/90 mb-2 font-medium text-sm'>
                        LastName
                    </label>
                    <Input className='w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-white placeholder-white/50 transition-all duration-200'
                        type="text"
                        name="LastName"
                        id="LastName"
                        placeholder="Enter your LastName"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <Button
                    className='w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'
                    label={loading ? "Creating..." : "Create Account"}
                    onClick={handleSubmit}
                    disabled={loading}
                />
            </form>
            
        </div>
    )
}

export default SignupForm