import { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ContactModel from "../../Models/ContactModel";

interface EditContactModel {
  close: () => void;
  submit: (id: number, item: ContactModel) => void;
  item: ContactModel;
}
const EditContact: React.FC<EditContactModel> = ({ close, submit, item }) => {
  const [editItem, setEditItem] = useState(new ContactModel());

  useEffect(() => {
    setEditItem(item);
  }, [item]);

  const changeForm = ({ target }, key: string) => {
    let val = (target as HTMLInputElement).value;
    setEditItem({ ...editItem, [key]: val });
  };
  const submitDialog = () => {
    submit(item.id, editItem);
    close();
  };
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Редактирование контакта
        </Typography>
        <div>
          <TextField
            onChange={(e) => changeForm(e, "name")}
            value={editItem.name}
            label="Имя"
          />
        </div>
        <div>
          <TextField
            onChange={(e) => changeForm(e, "phone")}
            value={editItem.phone}
            label="Телефон"
          />
        </div>
      </CardContent>
      <CardActions>
        <Button onClick={close}>Отмена</Button>
        <Button onClick={submitDialog}>Подтвердить</Button>
      </CardActions>
    </Card>
  );
};
export default EditContact;
