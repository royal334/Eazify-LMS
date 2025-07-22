import { apiFetch } from "@/lib/fetch-api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

type RegisterPayload = {
  name: string;
  email: string;
  hash: string;
  role: string;
};

type RegisterResponse = {
  access_token: string;
};

export const useRegister = () => {
  return useMutation<RegisterResponse, Error, RegisterPayload>({
    mutationFn: async (data: RegisterPayload): Promise<RegisterResponse> => {
      const response = await apiFetch<RegisterResponse>("/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response;
    },

    onError: (error) => {
      toast.error("Registration failed");
    },
  });
};
