import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:3000/api/";
class AuthService {
  private static instance: AuthService;
  private constructor() {}

  login(username: string, password: string) {
    return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }

    return AuthService.instance;
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username: string, email: string, password: string) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    const user = localStorage.getItem("user");
    return typeof user === "string" ? JSON.parse(user) : null;
  }

  checkToken() {
    return axios
      .get(API_URL + "checkAuth", { headers: authHeader() })
      .then((res) => !!res);
  }
}

export default AuthService.getInstance();
