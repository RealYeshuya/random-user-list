export interface IUser {
  name: UserName;
  gender: string;
  phone: string;
  email: string;
  picture: UserPicture;
  location: Location;
  id: UserId;
  nationality?: string;
}

export interface Location {
  street: LocationStreet;
  city: string;
  state: string;
  country: string;
}

export interface LocationStreet {
  number: string;
  name: string;
}

export interface UserId {
  name: string;
  value: string;
}

export interface UserPicture {
  large: string;
  medium?: string;
  thumbnail?: string;
}

export interface UserName {
  first: string;
  last: string;
  title?: string;
}
