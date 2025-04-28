'use client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Simulación de tu hook verifyUser
async function verifyUser(username: string, password: string): Promise<{ isUser: boolean; isPassword: boolean }> {
  // Aquí llamarías a tu API o lógica real
  if (username === "admin" && password === "1234") {
    return { isUser: true, isPassword: true };
  } else if (username !== "admin") {
    return { isUser: false, isPassword: false };
  } else {
    return { isUser: true, isPassword: false };
  }
}

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const result = await verifyUser(username, password);

    if (result.isUser && result.isPassword) {
      navigate(`/bienvenida?username=${encodeURIComponent(username)}`);
    } else {
      if (!result.isUser) {
        setError('Usuario no existe');
      } else if (!result.isPassword) {
        setError('Contraseña incorrecta');
      } else {
        setError('Error desconocido');
      }
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label>Username:</label><br />
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Password:</label><br />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && (
          <div style={{ color: 'red', marginBottom: 10 }}>
            {error}
          </div>
        )}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}