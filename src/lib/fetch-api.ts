export const apiFetch = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`,
    {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    const message = Array.isArray(errorData?.message)
      ? errorData.message.join(", ")
      : errorData?.message || "Something went wrong";
    throw new Error(message);
  }

  return response.json();
};
