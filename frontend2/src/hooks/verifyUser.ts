import { isValidUser } from "@/types/isValidUser";
import { SendUser } from "@/types/SendUser";
import { url } from "@/utils/constants";

export const verifyUser = async (user: SendUser): Promise<isValidUser> => {
  const response = await fetch(`${url}/api/verify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
};