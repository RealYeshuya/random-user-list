interface IUser {
  name: {
    first: string;
    last: string;
    title?: string;
  };
  gender: string;
  phone: string;
  email: string;
  picture: {
    large: string;
    medium?: string;
    thumbnail?: string;
  };
  location: {
    street: {
      number: string;
      name: string;
    };
    city: string;
    state: string;
    country: string;
  };
  id: {
    name: string;
    value: string;
  };
  nationality?: string;
}

export default IUser;
