export const fetchAPI = async (
  url: string,
  method?: "GET" | "POST",
  data?: unknown
) => {
  const BASE_URL = "http://host.docker.internal:5000";
  const fetchOptions: RequestInit = {
    cache: "no-store",
    mode: "cors",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (method) fetchOptions.method = method;
  if (data) fetchOptions.body = JSON.stringify(data);

  const res = await fetch(`${BASE_URL}/api${url}`, fetchOptions);

  if (!res.ok) {
    throw new Error(`Failed to fetch`);
  }

  // backend should return json and not text message.
  try {
    return await res.json();
  } catch (e) {
    console.error(e);
    return res;
  }
};
