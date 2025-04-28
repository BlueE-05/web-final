import { UserData } from "@/types/UserData";
import { url } from "@/utils/constants";

export const getUserData = async (user: string): Promise<UserData | null> => {
  try {
    const response = await fetch(`${url}/api/userData`, {
      method: "POST", // cehcar si es POST o GET
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ UserName: user }),
    });

    if (!response.ok) throw new Error("Error fetching user data");

    const userData: UserData = await response.json();
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};