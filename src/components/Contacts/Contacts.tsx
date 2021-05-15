import { ChangeEvent, useEffect, useState } from "react";
import ContactModel from "../../Models/ContactModel";
import ContactsService from "../../services/contactsService";
import ContactsList from "../ContactsList/ContactsList";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Contacts = () => {
  const [list, setList] = useState([]);
  const [searchField, setSearchField] = useState("");
  useEffect(() => {
    getList();
  }, []);
  const getList = () => {
    ContactsService.getContacts().then((res) => {
      setList(res.data);
    });
  };
  const deleteListItem = (id: number) => {
    ContactsService.deleteContact(id).then(() => getList());
  };
  const addListItem = () => {
    ContactsService.addContact("имя", "номер").then(() => getList());
  };
  const submitEditDialog = (id: number, item: ContactModel) => {
    ContactsService.editContact(id, item).then(() => getList());
  };
  const search = () => {
    ContactsService.searchContact(searchField).then((res) => {
      setList(res.data);
    });
  };
  return (
    <>
      <ContactsList
        submitEditDialog={submitEditDialog}
        deleteListItem={deleteListItem}
        list={list}
      ></ContactsList>
      <button onClick={addListItem}>Добавить</button>
      <div>
        <h3>Поиск</h3>
        <TextField
          value={searchField}
          onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
            setSearchField(e.target.value)
          }
        ></TextField>
        <Button onClick={search}>Искать</Button>
      </div>
    </>
  );
};
export default Contacts;
