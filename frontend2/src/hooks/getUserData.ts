import { UserData } from "@/types/UserData";
import { url } from "@/utils/constants";

export const getUserData = async (user: string): Promise<UserData | null> => {
    try {
        const response = await fetch(`${url}/api/userdata`);
        if (!response.ok) throw new Error("Error fetching user data");
        const userData: UserData = await response.json();

        return userData;
    } catch (error) {
        console.error("Error user data:", error);
        return null;
    }
};