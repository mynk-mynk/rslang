import { IAuth } from '../common/interfaces/IAuth';
import { IUser } from '../common/interfaces/IUser';
import config from '../config';

class User {
  // private readonly id: string;

  // private readonly name: string;

  // private readonly token: string;

  // private readonly refreshToken: string;

  // constructor(private readonly auth: IAuth) {
  //   this.id = auth.userId;
  //   this.name = auth.name;
  //   this.token = auth.token;
  //   this.refreshToken = auth.refreshToken;
  // }

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
      .then((data: IAuth) => {
        localStorage.setItem('name', data.name);
        localStorage.setItem('id', data.userId);
        localStorage.setItem('token', data.token);
        localStorage.setItem('refreshToken', data.refreshToken);
        return data;
      })
      .catch((err) => {
        console.log('Error text:', err);
        return null;
      });
    return authData;
  }

  static async getUser() {
    const id: string | null = localStorage.getItem('id');
    const token: string | null = localStorage.getItem('token');
    if (!id || !token) return null;

    const url = `${config.api.url}users/${id}`;
    const user = fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
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

  static async getNewToken() {
    const id: string | null = localStorage.getItem('id');
    const refreshToken: string | null = localStorage.getItem('refreshToken');
    if (!id || !refreshToken) return null;

    const url = `${config.api.url}users/${id}/tokens`;
    const user = fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${refreshToken}`,
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
