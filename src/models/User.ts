// import { IWord } from "./Word";

interface IUser {
  name: string;
  email: string;
  password: string;
}

// interface IAuth{
//   message: string;
//   token: string;
//   refreshToken: string;
//   userId: string;
//   name: string;
// }

class User {
  private readonly name: string;

  private readonly email: string;

  private readonly password: string;

  // private readonly token: IAuth;

  // private words: IWord[];

  constructor(private readonly user: IUser) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
  }
}

export default User;
