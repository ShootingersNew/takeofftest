export class ContactModel {
  id: number;
  name: string;
  phone: string;
  constructor(init?: Partial<ContactModel>) {
    if (init) {
      Object.assign(this, init);
    }
  }
}
export default ContactModel;
