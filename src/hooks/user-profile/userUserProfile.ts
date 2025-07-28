import { apiFetch } from "@/lib/fetch-api";
import { useQuery } from "@tanstack/react-query";

type UserProfile = {
	id: string;
	email: string;
	name: string;
	role: string;
	createdAt: string;
	updatedAt: string;
};

export const useUserProfile = () => {
	return useQuery<UserProfile>({
		queryKey: ["user-profile"],
		queryFn: async () => {
			const token = localStorage.getItem("access_token");
			if (!token) {
				throw new Error("No access token found");
			}

			const response = await apiFetch<UserProfile>("users/me", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			console.log("response ==> ", response)
			return response;
		},
		retry: false,
		staleTime: 1000 * 60 * 5,
	});
};
