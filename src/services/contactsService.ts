import axios from "axios";
import ContactModel from "../Models/ContactModel";
import authHeader from "./auth/authHeader";

const API_URL = "http://localhost:3004/";

class ContactsService {
  private constructor() {}
  private static instance: ContactsService;
  public static getInstance(): ContactsService {
    if (!ContactsService.instance) {
      ContactsService.instance = new ContactsService();
    }

    return ContactsService.instance;
  }
  getContacts() {
    return axios.get<[]>(API_URL + "contacts", { headers: authHeader() });
  }
  deleteContact(id: number) {
    return axios.delete(API_URL + `contacts/${id}`, { headers: authHeader() });
  }
  addContact(name, phone) {
    return axios.post(
      API_URL + `contacts`,
      {
        name,
        phone,
      },
      { headers: authHeader() }
    );
  }
  editContact(id: number, newContact: ContactModel) {
    return axios.patch(API_URL + `contacts/${id}`, newContact, {
      headers: authHeader(),
    });
  }
  searchContact(str: string) {
    return axios.get(API_URL + `contacts?name_like=${str}`, {
      headers: authHeader(),
    });
  }
}

export default ContactsService.getInstance();
