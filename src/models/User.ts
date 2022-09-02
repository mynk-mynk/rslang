import jwtDecode from 'jwt-decode';
import { IAuth } from '../common/interfaces/IAuth';
import { IErrorApi } from '../common/interfaces/IErrorApi';
import { IObject } from '../common/interfaces/IObject';
import { ISetting } from '../common/interfaces/ISetting';
import { IStatistic } from '../common/interfaces/IStatistic';
import { IToken } from '../common/interfaces/IToken';
import { IUser } from '../common/interfaces/IUser';
import { IUserWord } from '../common/interfaces/IUserWord';
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
      .then((data) => data.json())
      .then((data: IUser | IErrorApi) => data)
      .catch((err) => {
        console.log('Error text:', err);
        return null;
      });
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
    const { id, token } = User.getIdAndTokenFromLocalStorage();
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
      .catch((err) => {
        console.log('Error text:', err);
        return null;
      });
    return user;
  }

  static async getNewToken() {
    const { id, token } = User.getIdAndTokenFromLocalStorage();
    const refreshToken: string | null = localStorage.getItem('refreshToken');
    if (!id || !token || !refreshToken) return null;

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
    return user;
  }

  static async getUserWords() {
    const { id, token } = User.getIdAndTokenFromLocalStorage();
    if (!id || !token) return null;

    const url = `${config.api.url}users/${id}/words`;
    const words = fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((data) => data.json())
      .catch((err) => {
        console.log('Error text:', err);
        return null;
      });
    return words;
  }

  static async getUserWord(wordId: string) {
    const { id, token } = User.getIdAndTokenFromLocalStorage();
    if (!id || !token) return null;

    const url = `${config.api.url}users/${id}/words/${wordId}`;
    const word = fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((data) => data.json())
      .catch((err) => {
        console.log('Error text:', err);
        return null;
      });
    return word;
  }

  static async createUserWord(wordId: string, userWord: IUserWord) {
    const { id, token } = User.getIdAndTokenFromLocalStorage();
    if (!id || !token) return null;

    const url = `${config.api.url}users/${id}/words/${wordId}`;
    const word = fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userWord),
    })
      .then((data) => data.json())
      .catch((err) => {
        console.log('Error text:', err);
        return null;
      });
    return word;
  }

  static async updateUserWord(wordId: string, userWord: IUserWord) {
    const { id, token } = User.getIdAndTokenFromLocalStorage();
    if (!id || !token) return null;

    const url = `${config.api.url}users/${id}/words/${wordId}`;
    const word = fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userWord),
    })
      .then((data) => data.json())
      .catch((err) => {
        console.log('Error text:', err);
        return null;
      });
    return word;
  }

  static async deleteUserWord(wordId: string) {
    const { id, token } = User.getIdAndTokenFromLocalStorage();
    if (!id || !token) return null;

    const url = `${config.api.url}users/${id}/words/${wordId}`;
    const word = fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((data) => data.json())
      .catch((err) => {
        console.log('Error text:', err);
        return null;
      });
    return word;
  }

  static async getUserAggregatedWords() {
    const { id, token } = User.getIdAndTokenFromLocalStorage();
    if (!id || !token) return null;

    const url = `${config.api.url}users/${id}/words`;
    const word = fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((data) => data.json())
      .catch((err) => {
        console.log('Error text:', err);
        return null;
      });
    return word;
  }

  static async getUserAggregatedWord(
    wordId: string,
    page = 0,
    group = 0,
    wordsPerPage = 20,
    filter: IUserWord | null = null,
  ) {
    const { id, token } = User.getIdAndTokenFromLocalStorage();
    if (!id || !token) return null;

    const url = `${config.api.url}users/${id}/words/${wordId}`;
    const wordData: IObject<number>[] = [{ page }, { group }, { wordsPerPage }];
    const bodyData = {
      filter: {
        // eslint-disable-next-line quotes, quote-props
        "$and": wordData,
      },
    };
    const word = fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData),
    })
      .then((data) => data.json())
      .catch((err) => {
        console.log('Error text:', err);
        return null;
      });
    return word;
  }

  static async getUserStatistic() {
    const { id, token } = User.getIdAndTokenFromLocalStorage();
    if (!id || !token) return null;

    const url = `${config.api.url}users/${id}/statistics`;
    const words = fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((data) => data.json())
      .catch((err) => {
        console.log('Error text:', err);
        return null;
      });
    return words;
  }

  static async upsertUserStatistic(statistic: IStatistic) {
    const { id, token } = User.getIdAndTokenFromLocalStorage();
    if (!id || !token) return null;

    const url = `${config.api.url}users/${id}/statistics`;
    const words = fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(statistic),
    })
      .then((data) => data.json())
      .catch((err) => {
        console.log('Error text:', err);
        return null;
      });
    return words;
  }

  static async getUserSetting() {
    const { id, token } = User.getIdAndTokenFromLocalStorage();
    if (!id || !token) return null;

    const url = `${config.api.url}users/${id}/settings`;
    const words = fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((data) => data.json())
      .catch((err) => {
        console.log('Error text:', err);
        return null;
      });
    return words;
  }

  static async upsertUserSetting(settings: ISetting) {
    const { id, token } = User.getIdAndTokenFromLocalStorage();
    if (!id || !token) return null;

    const url = `${config.api.url}users/${id}/statistics`;
    const words = fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(settings),
    })
      .then((data) => data.json())
      .catch((err) => {
        console.log('Error text:', err);
        return null;
      });
    return words;
  }

  private static getIdAndTokenFromLocalStorage() {
    const id: string | null = localStorage.getItem('id');
    let token: string | null = localStorage.getItem('token');
    if (token) {
      const parseToken: IToken = jwtDecode(token);
      const currentTime: number = new Date().getTime();
      if (!(currentTime >= parseToken.iat * 1000 && currentTime <= parseToken.exp * 1000)) {
        (async () => {
          await User.getNewToken();
          token = localStorage.getItem('token');
        })();
      }
    }
    return { id, token };
  }
}

export default User;
