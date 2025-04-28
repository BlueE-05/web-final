'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { verifyUser } from '@/hooks/verifyUser';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const result = await verifyUser({ UserName: username, Password: password }); // Corregido aquí
      console.log(result);

      if (result.isUser && result.isPassword) {
        router.push(`/bienvenida?username=${encodeURIComponent(username)}`);
      } else {
        if (!result.isUser) {
          setError('Usuario no existe');
        } else if (!result.isPassword) {
          setError('Contraseña incorrecta');
        } else {
          setError('Error desconocido');
        }
      }
    } catch (error) {
      console.error('Error al verificar el usuario:', error);
      setError('Error de conexión o desconocido');
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