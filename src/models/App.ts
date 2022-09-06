import { IErrorApi } from '../common/interfaces/IErrorApi';
import { IHtmlElements } from '../common/interfaces/IHtmlElemets';
import { IUser } from '../common/interfaces/IUser';
import { IGameParams } from '../common/interfaces/IGameParams';
import {
  closeBurgerMenu, findHtmlElement, hideBurgerMenu, showBurgerMenu,
} from '../common/utils/utils';
import config from '../config';
import AudiocallController from '../controllers/AudiocallController';
import ErrorController from '../controllers/ErrorController';
// eslint-disable-next-line import/no-cycle
import IndexController from '../controllers/IndexController';
import SprintController from '../controllers/SprintController';
import StatisticsController from '../controllers/StatisticsController';
import TeamController from '../controllers/TeamController';
import TextbookController from '../controllers/TextbookController';
import renderAuthorization from '../views/components/authorization/authorization';
import EventObserver from './EventObserver';
import User from './User';

interface IAppPages {
  index: IndexController,
  team: TeamController,
  textbook: TextbookController,
  sprint: SprintController,
  audiocall: AudiocallController,
  statistics: StatisticsController,
  error: ErrorController,
}

class App {
  private _url: string;

  private page: string;

  private readonly pages: IAppPages;

  private urlObserver: EventObserver<string>;

  private readonly htmlElemets: IHtmlElements;

  private _isAuth: boolean;

  private authObserver: EventObserver<boolean>;

  constructor() {
    this._url = window.location.pathname;

    this.page = '';
    const pattern = '/[a-zA-Z.]*$';
    const match = this._url.match(pattern);
    if (match) this.page = match[0].slice(1).split('.')[0] || 'index';
    if (this.page === 'index') {
      hideBurgerMenu();
    } else {
      showBurgerMenu();
    }

    this._isAuth = !!localStorage.getItem('token');
    this.authObserver = new EventObserver<boolean>();

    this.pages = {
      index: new IndexController(this),
      team: new TeamController(),
      textbook: new TextbookController(this),
      sprint: new SprintController(),
      audiocall: new AudiocallController(this),
      statistics: new StatisticsController(this),
      error: new ErrorController(),
    };
    this.urlObserver = new EventObserver<string>();
    this.htmlElemets = {
      body: findHtmlElement(document, 'body'),
      authContainer: findHtmlElement(document, '.authorization-container'),
      authIcon: findHtmlElement(document, '.authorization-icon'),
      tooltipText: findHtmlElement(document, '.tooltiptext'),
    };
    this._isAuth = !!localStorage.getItem('token');

    // add content into main according to link
    this.getContent();
  }

  get url() {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
    const pattern = '/[a-zA-Z.]*$';
    const match = this._url.match(pattern);
    if (match) this.page = match[0].slice(1).split('.')[0] || 'index';
    if (this.page === 'index') {
      hideBurgerMenu();
    } else {
      showBurgerMenu();
    }
  }

  get isAuth() {
    return this._isAuth;
  }

  set isAuth(value: boolean) {
    this._isAuth = value;
    const imgUrl = `./assets/images/${value ? '' : 'un'}verified.png`;
    (this.htmlElemets.authIcon as HTMLImageElement).src = imgUrl;
    this.htmlElemets.tooltipText.innerHTML = value ? 'Выйти' : 'Войти?';
    this.authObserver.broadcast(this.isAuth);
  }

  subscribeOnAuthChange(callback: () => void) {
    this.authObserver.subscribe(callback);
  }

  start() {
    this.router();
    this.authorization();
  }

  private router() {
    this.urlObserver.subscribe(() => {
      this.getContent();
    });

    // add event listener and observer to NavBar links
    this.setRouterToElements('.nav-bar li');
    this.setRouterToElements('.logo');

    const burgerIcon = findHtmlElement(document, '.burger');
    burgerIcon.addEventListener('click', () => App.toggleBurgerMenu());

    // add event listener to browser history buttons
    window.addEventListener('popstate', () => {
      this.url = window.location.pathname;
      this.urlObserver.broadcast(this.url);
    });
  }

  setRouterToElements(selector: string) {
    const menuLinks: NodeListOf<HTMLElement> = document.querySelectorAll(selector);
    menuLinks.forEach((link: HTMLElement) => {
      let { path } = link.dataset;
      if (path === '/statistics' && !this.isAuth) {
        link.style.display = 'none';
      }
      if (path) path = `${config.sitePath}${path}`;
      link.addEventListener('click', () => {
        if (path) {
          window.history.pushState({ state: path }, 'SyllaBus', path);
          this.url = path;
          this.urlObserver.broadcast(this.url);
        }
      });
    });
  }

  private getContent() {
    closeBurgerMenu();
    const controller = this.pages[this.page as keyof IAppPages];
    if (controller) {
      controller.actionIndex();
    } else {
      this.pages.error.actionIndex();
    }
  }

  private static toggleBurgerMenu() {
    const burgerIcon = findHtmlElement(document, '.burger');
    const navBar = findHtmlElement(document, '.nav-bar');
    burgerIcon.classList.toggle('open');
    navBar.classList.toggle('open');
  }

  private openAuthorizationBlock() {
    this.htmlElemets.body.style.height = '100%';
    this.htmlElemets.body.style.position = 'sticky';
    this.htmlElemets.authContainer.style.display = 'block';
  }

  private closeAuthorizationBlock() {
    this.htmlElemets.body.style.height = '';
    this.htmlElemets.body.style.position = '';
    this.htmlElemets.authContainer.style.display = 'none';
  }

  private setLoginForm() {
    this.htmlElemets.authBlockHeader.innerHTML = 'Авторизация';
    this.htmlElemets.registrationForm.style.display = 'none';
    this.htmlElemets.loginForm.style.display = 'flex';
    this.htmlElemets.authBlock.style.height = '330px';
    this.htmlElemets.loginBtn.style.display = 'inline-block';
    this.htmlElemets.loginLinkBtn.style.display = 'none';
    this.htmlElemets.registrationBtn.style.display = 'none';
    this.htmlElemets.registrationLinkBtn.style.display = 'inline-block';
  }

  private setRegistrationForm() {
    this.htmlElemets.authBlockHeader.innerHTML = 'Регистрация';
    this.htmlElemets.registrationForm.style.display = 'flex';
    this.htmlElemets.loginForm.style.display = 'none';
    this.htmlElemets.authBlock.style.height = '390px';
    this.htmlElemets.loginBtn.style.display = 'none';
    this.htmlElemets.registrationLinkBtn.style.display = 'none';
    this.htmlElemets.registrationBtn.style.display = 'inline-block';
    this.htmlElemets.loginLinkBtn.style.display = 'inline-block';
  }

  private clearLoginForm() {
    (this.htmlElemets.loginEmail as HTMLInputElement).value = '';
    (this.htmlElemets.loginPassword as HTMLInputElement).value = '';
    this.htmlElemets.loginError.style.display = 'none';
  }

  private clearRegistrationForm() {
    (this.htmlElemets.registrationName as HTMLInputElement).value = '';
    (this.htmlElemets.registrationEmail as HTMLInputElement).value = '';
    (this.htmlElemets.registrationPassword as HTMLInputElement).value = '';
    this.htmlElemets.registrationSuccess.style.display = 'none';
    this.htmlElemets.registrationError.style.display = 'none';
  }

  private addAuthorizationToHtml() {
    this.htmlElemets.authContainer.innerHTML = renderAuthorization();
    Object.assign(this.htmlElemets, {
      authBtn: findHtmlElement(document, '.authorization-link'),
      blur: findHtmlElement(document, '.blur'),
      closeAuthContainerBtn: findHtmlElement(document, '.close-icon'),
      authBlockHeader: findHtmlElement(document, '.authorization-block h2'),
      registrationForm: findHtmlElement(document, '.registration-form'),
      loginForm: findHtmlElement(document, '.login-form'),
      authBlock: findHtmlElement(document, '.authorization-block'),
      loginBtn: findHtmlElement(document, '.login-btn'),
      loginLinkBtn: findHtmlElement(document, '.login-link-btn'),
      registrationBtn: findHtmlElement(document, '.registration-btn'),
      registrationLinkBtn: findHtmlElement(document, '.registration-link-btn'),
      loginEmail: findHtmlElement(document, '.authorization-email'),
      loginPassword: findHtmlElement(document, '.authorization-password'),
      registrationName: findHtmlElement(document, '.registration-name'),
      registrationEmail: findHtmlElement(document, '.registration-email'),
      registrationPassword: findHtmlElement(document, '.registration-password'),
      loginError: findHtmlElement(document, '.authorization-error'),
      registrationError: findHtmlElement(document, '.registration-error'),
      registrationSuccess: findHtmlElement(document, '.registration-success'),
    });
  }

  private addAuthBtnClickListener() {
    this.htmlElemets.authBtn.addEventListener('click', () => {
      const token = localStorage.getItem('token');
      if (token) {
        localStorage.clear();
        this.isAuth = false;
      } else {
        this.openAuthorizationBlock();
      }
    });
  }

  private addBlurClickListener() {
    this.htmlElemets.blur.addEventListener('click', () => {
      this.closeAuthorizationBlock();
      this.clearLoginForm();
      this.clearRegistrationForm();
      this.setLoginForm();
    });
  }

  private addCloseAuthContainerBtnListener() {
    this.htmlElemets.closeAuthContainerBtn.addEventListener('click', () => {
      this.closeAuthorizationBlock();
      this.clearLoginForm();
      this.clearRegistrationForm();
      this.setLoginForm();
    });
  }

  private addRegistrationLinkBtnListener() {
    this.htmlElemets.registrationLinkBtn.addEventListener('click', () => {
      this.setRegistrationForm();
    });
  }

  private addLoginLinkBtnListener() {
    this.htmlElemets.loginLinkBtn.addEventListener('click', () => {
      this.setLoginForm();
    });
  }

  private addLoginBtnListener() {
    this.htmlElemets.loginBtn.addEventListener('click', () => {
      const formData = new FormData(this.htmlElemets.loginForm as HTMLFormElement);
      const userData: IUser = {};
      formData.forEach((value, key) => {
        userData[key as keyof IUser] = value as string;
      });
      (async () => {
        const auth: User | null = await User.signin(userData);
        if (auth) {
          this.clearLoginForm();
          this.clearRegistrationForm();
          this.closeAuthorizationBlock();
          (this.htmlElemets.authIcon as HTMLImageElement).src = './assets/images/verified.png';
          this.isAuth = true;
        } else {
          this.htmlElemets.loginError.style.display = 'block';
          (this.htmlElemets.loginPassword as HTMLInputElement).value = '';
        }
      })();
    });
  }

  private addRegistrationBtnListener() {
    this.htmlElemets.registrationBtn.addEventListener('click', () => {
      const formData = new FormData(this.htmlElemets.registrationForm as HTMLFormElement);
      const userData: IUser = {};
      formData.forEach((value, key) => {
        userData[key as keyof IUser] = value as string;
      });
      (async () => {
        const auth: IUser | IErrorApi | null = await User.createUser(userData);
        if (auth) {
          if ('error' in auth) {
            this.htmlElemets.registrationError.style.display = 'block';
            this.htmlElemets.registrationSuccess.style.display = 'none';
            this.htmlElemets.registrationError.innerHTML = 'Невозможно зарегистрировать пользователя с такими данными';
          } else {
            this.htmlElemets.registrationError.style.display = 'none';
            this.htmlElemets.registrationSuccess.style.display = 'block';
          }
        } else {
          this.htmlElemets.registrationError.style.display = 'block';
          this.htmlElemets.registrationSuccess.style.display = 'none';
          this.htmlElemets.registrationError.innerHTML = 'Пользователь уже зарегистрирован в системе';
        }
      })();
    });
  }

  private authorization() {
    this.isAuth = !!localStorage.getItem('token');
    this.addAuthorizationToHtml();
    this.addAuthBtnClickListener();
    this.addBlurClickListener();
    this.addCloseAuthContainerBtnListener();
    this.addRegistrationLinkBtnListener();
    this.addLoginLinkBtnListener();
    this.addLoginBtnListener();
    this.addRegistrationBtnListener();
  }

  openGamePage(page: keyof IAppPages, params: IGameParams) {
    console.log(page);
    this.pages[page].actionIndex(params.page, params.difficulty, true);
  }
}

export default App;
