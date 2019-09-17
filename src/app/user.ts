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
}

export interface UserNew {
  id: string;
  name: string;
  email: string;
}
