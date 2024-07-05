const API_URL = "https://apifer.onrender.com";

export async function getUsers(token) {
  const response = await fetch(`${API_URL}/users`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzVlODkzODNlNjNmNTVmNmJhMDdlMSIsImlhdCI6MTcyMDEwNDYxMywiZXhwIjoxNzIwMTkxMDEzfQ.4rC4pwf3m48TPHDB6IjK9VuBsfip4xznHMTaM74Wy28
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
