export interface User {
  id: string;
  name: string;
  phoneNo: string;
  email: string;
  college: string;
  address: string;
  pinCode: number;
  participatingEvents: Array<string>;
  transportation: boolean;
  newUser: boolean;
  gender: string;
}

export interface UserNew {
  id: string;
  name: string;
  email: string;
  newUser: boolean;
}
