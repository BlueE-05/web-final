'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';  // Correcto en Next.js
import { getUserData } from "@/hooks/getUserData";  // Asegúrate de que esta ruta sea correcta
import { UserData } from "@/types/UserData"; // Asegúrate de que la interfaz esté definida correctamente


export default function BienvenidaPage() {
  const searchParams = useSearchParams();
  const username = searchParams.get('username'); // Extraemos el parámetro 'username' de la URL
  const [userData, setUserData] = useState<UserData | null>(null); // Establecemos el estado para almacenar los datos del usuario

  useEffect(() => {
    if (username) {
      // Llamamos al hook getUserData para obtener los datos del usuario
      const fetchUserData = async () => {
        const data = await getUserData(username);
        setUserData(data); // Guardamos los datos obtenidos en el estado
      };
      
      fetchUserData();
    }
  }, [username]); // Dependemos del parámetro 'username' para recargar si cambia

  // Mientras los datos están siendo cargados, mostramos un mensaje de carga
  if (!userData) {
    return (
      <div style={{ textAlign: 'center', marginTop: 50 }}>
        <h1>Cargando...</h1>
      </div>
    );
  }

  // Una vez obtenidos los datos, mostramos el mensaje de bienvenida
  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>¡Bienvenido, {userData.Name}! Disfruta de tu lectura.</h1>
      <p>Tu libro favorito es: <strong>{userData.FavBook}</strong></p>
    </div>
  );
}