'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getUserData } from "@/hooks/getUserData";
import { UserData } from "@/types/UserData";


export default function BienvenidaPage() {
  const searchParams = useSearchParams();
  const username = searchParams.get('username');
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (username) {
      const fetchUserData = async () => {
        const data = await getUserData(username);
        setUserData(data);
      };
      
      fetchUserData();
    }
  }, [username]);

  if (!userData) {
    return (
      <div style={{ textAlign: 'center', marginTop: 50 }}>
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>¡Bienvenido, {userData.Name}! Disfruta de tu lectura.</h1>
      <p>Tu libro favorito es: <strong>{userData.FavBook}</strong></p>
    </div>
  );
}