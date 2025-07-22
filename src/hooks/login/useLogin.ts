import { storeToken } from "@/lib/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { apiFetch } from "@/lib/fetch-api";

type LoginPayload = {
  email: string;
  hash: string;
};

type LoginResponse = {
  access_token: string;
};

export const useLogin = () => {

  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: async (data: LoginPayload): Promise<LoginResponse> => {
      const response = await apiFetch<LoginResponse>("/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
      });

      storeToken(response.access_token);
      return response;
    },
    onSuccess: (data) => {
      storeToken(data.access_token);
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};
