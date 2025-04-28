import { isValidUser } from "@/types/isValidUser";
import { SendUser } from "@/types/SendUser";
import { url } from "@/utils/constants";

export const verifyUser = async (user: SendUser): Promise<isValidUser> => {
  try {
    const response = await fetch(`${url}/api/verify`, {  // Corrected endpoint here
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ UserName: user.UserName, Password: user.Password }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error de red: ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al verificar el usuario:', error);
    throw error;
  }
};