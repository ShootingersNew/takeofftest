import axios from "axios";
import LoginFormModel from "../../Models/LoginFormModel";
import authHeader from "./authHeader";

const API_URL = "http://localhost:3004/";
class AuthService {
  private static instance: AuthService;
  private constructor() {}

  login({ email, password }: LoginFormModel) {
    return axios
      .post(API_URL + "login", {
        email,
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
    console.log(authHeader());
    return axios
      .get(API_URL + "checkAuth", { headers: authHeader() })
      .then((res) => !!res);
  }
}

export default AuthService.getInstance();
