    "use server"

import { API_URL } from "@/app/constants/api";
import { getErrorMessage } from "@/app/util/error";
import { redirect } from "next/navigation";

export type SignupState = {
  success: boolean;
  message: string;
};
export async function createUser(prevState: SignupState,formData: FormData) : Promise<any> {
console.log("prevState:", prevState);
console.log("Form Data:", formData); // Log the FormData object
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const user = {
        email,
        password,
    };

  const res = await fetch(`${API_URL}/users`, { 
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
   })

const data = await res.json();
console.log("Response Data:", data); // Log the response data
if (!res.ok) {

    return {
      error: getErrorMessage(data),
      message: data.message || "An error occurred while creating the user.",
    };
  }
              redirect("/auth/login");

  return {
      success: true,
      message: data.message || "User created successfully.",
    };

  
}