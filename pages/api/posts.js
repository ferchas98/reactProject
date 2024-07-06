const API_URL = "https://apifer.onrender.com";

export async function getPosts() {
  const response = await fetch(`${API_URL}/posts`, {
    method: "GET",
  });
  const json = await response.json();
  return json.data.posts;
}

export async function create(title, image, body, user, tags, token) {
  const response = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      title,
      image,
      body,
      user,
      tags,
    }),
  });

  const json = await response.json();
  return json;
}

export async function getPostByID(id) {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: "GET",
  });

  const json = await response.json();

  return json;
}
