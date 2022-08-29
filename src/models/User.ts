import { IUser } from '../common/interfaces/IUser';

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
