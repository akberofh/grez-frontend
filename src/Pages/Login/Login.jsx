import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Önceki hatayı temizle

        try {
            const response = await axios.post('https://grez-shop.vercel.app/api/users/auth', {
                email,
                password,
            }, {
                withCredentials: true, // Cookie'leri göndermek için
            });

            // Giriş başarılı, kullanıcı bilgilerini işleyin
            console.log('Giriş başarılı:', response.data);
            
        } catch (err) {
            setError('Giriş başarısız: ' + (err.response?.data?.message || 'Bir hata oluştu'));
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <h2 className="text-lg font-bold mb-4">Giriş Yap</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">E-posta</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border rounded w-full px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2">Şifre</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border rounded w-full px-3 py-2"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Giriş Yap</button>
            </form>
        </div>
    );
};

export default Login;
