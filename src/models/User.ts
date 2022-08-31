import { IAuth } from '../common/interfaces/IAuth';
import { IUser } from '../common/interfaces/IUser';
import config from '../config';

class User {
  private readonly id: string;

  private readonly name: string;

  private readonly token: string;

  private readonly refreshToken: string;

  constructor(private readonly auth: IAuth) {
    this.id = auth.userId;
    this.name = auth.name;
    this.token = auth.token;
    this.refreshToken = auth.refreshToken;
  }

  static async createUser(newUser: IUser) {
    const url = `${config.api.url}users`;
    const user = fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((data) => data.json());
    return user;
  }

  static async signin(user: IUser) {
    const url = `${config.api.url}signin`;
    const authData = fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((data) => data.json())
      .then((data: IAuth) => new User(data))
      .catch((err) => {
        console.log('Error text:', err);
        return null;
      });
    return authData;
  }

  async getUser() {
    const url = `${config.api.url}users/${this.id}`;
    const user = fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((data) => data.json())
      .then((data: IUser) => data)
      .catch((err) => {
        console.log('Error text:', err);
        return null;
      });
    return user;
  }

  async getNewToken() {
    const url = `${config.api.url}users/${this.id}/tokens`;
    const user = fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.refreshToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((data) => data.json())
      .then((data: IAuth) => data)
      .catch((err) => {
        console.log('Error text:', err);
        return null;
      });
    return user;
  }
}

export default User;
