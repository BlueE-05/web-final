// BienvenidaPage.tsx
import { useLocation } from 'react-router-dom';

export default function BienvenidaPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const username = params.get('username');

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>Bienvenido, {username}!</h1>
    </div>
  );
}