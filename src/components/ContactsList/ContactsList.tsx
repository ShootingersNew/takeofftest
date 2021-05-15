import react, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import ContactModel from "../../Models/ContactModel";
import ContactListItem from "./ContactListItem";

interface ContactsListModel {
  list: ContactModel[];
  deleteListItem: (id: number) => void;
  submitEditDialog: (id: number, item: ContactModel) => void;
}
const ContactsList: React.FC<ContactsListModel> = ({
  list,
  deleteListItem,
  submitEditDialog,
}) => {
  const mapItems = () => {
    return list.map((item, idx) => {
      return (
        <ContactListItem
          key={item.id}
          item={item}
          deleteItem={deleteListItem}
          submit={submitEditDialog}
        ></ContactListItem>
      );
    });
  };
  return (
    <>
      <List>{mapItems()}</List>
    </>
  );
};

export default ContactsList;
