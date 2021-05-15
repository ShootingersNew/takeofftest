export default function authHeader(): { Authorization?: string } {
  let localStorageUser = localStorage.getItem("user");
  const user =
    typeof localStorageUser === "string" ? JSON.parse(localStorageUser) : null;

  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
}
