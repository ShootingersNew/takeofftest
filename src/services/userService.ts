import axios from "axios";
import authHeader from "./auth/authHeader";

const API_URL = "http://localhost:8080/api/test/";

class UserService {
  private constructor() {}
  private static instance: UserService;
  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }

    return UserService.instance;
  }
  getContacts() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }
}

export default UserService.getInstance();
