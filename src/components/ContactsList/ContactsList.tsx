import List from "@material-ui/core/List";
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
