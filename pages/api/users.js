const API_URL = "https://apifer.onrender.com";

export async function getUsers(token) {
  const response = await fetch(`${API_URL}/users`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();

  return json.data.users;
}

export async function create(email, password, name, profilePic) {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
      profilePic,
    }),
  });

  const json = response.json();

  return json;
}
