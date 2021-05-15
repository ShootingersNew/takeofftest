import react, { useState } from "react";
import ContactModel from "../../Models/ContactModel";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import EditContact from "../EditContact/EditContact";

const ContactListItem: React.FC<{
  item: ContactModel;
  deleteItem: (id: number) => void;
  submit: (id: number, item: ContactModel) => void;
}> = ({ item, deleteItem, submit }) => {
  const [isDialogOpened, setIsDialogOpened] = useState(false);
  return (
    <>
      <ListItem key={item.id}>
        <ListItemText>
          {item.name} {item.phone}
          {item.id}
          <button onClick={() => setIsDialogOpened(true)}>Редактировать</button>
          <button onClick={() => deleteItem(item.id)}>Удалить</button>
        </ListItemText>

        <Dialog
          children={
            <EditContact
              item={item}
              submit={submit}
              close={() => setIsDialogOpened(false)}
            ></EditContact>
          }
          open={isDialogOpened}
        />
      </ListItem>
    </>
  );
};
export default ContactListItem;
