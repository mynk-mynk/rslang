import { IHtmlElements } from '../common/interfaces/IHtmlElemets';
import { IUser } from '../common/interfaces/IUser';
import { findHtmlElement } from '../common/utils/utils';
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

class App {
  private _url: string;

  private page: string;

  private readonly pages;

  private urlObserver: EventObserver<string>;

  private readonly htmlElemets: IHtmlElements;

  constructor() {
    this._url = window.location.pathname;
    this.page = this._url.slice(1) || 'index';
    this.pages = {
      index: new IndexController(this),
      team: TeamController,
      textbook: TextbookController,
      sprint: SprintController,
      audiocall: AudiocallController,
      statistics: StatisticsController,
      error: ErrorController,
    };
    this.urlObserver = new EventObserver<string>();
    this.htmlElemets = {
      body: findHtmlElement(document, 'body'),
      authContainer: findHtmlElement(document, '.authorization-container'),
      authIcon: findHtmlElement(document, '.authorization-icon'),
    };

    // add content into main according to link
    this.getContent();
  }

  get url() {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
    this.page = this._url.slice(1) || 'index';
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

    const burgerIcon = findHtmlElement(document, '.burger');
    burgerIcon.addEventListener('click', App.toggleBurgerMenu.bind(this));

    // add event listener to browser history buttons
    window.addEventListener('popstate', () => {
      this.url = window.location.pathname;
      this.urlObserver.broadcast(this.url);
    });
  }

  setRouterToElements(selector: string) {
    const menuLinks: NodeListOf<HTMLElement> = document.querySelectorAll(selector);
    menuLinks.forEach((link: HTMLElement) => {
      const { path } = link.dataset;
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
    const controller = this.pages[this.page as keyof typeof this.pages];
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
    this.htmlElemets.authBlockHeader.innerHTML = 'Login';
    this.htmlElemets.registrationForm.style.display = 'none';
    this.htmlElemets.loginForm.style.display = 'flex';
    this.htmlElemets.authBlock.style.height = '320px';
    this.htmlElemets.loginBtn.style.display = 'inline-block';
    this.htmlElemets.loginLinkBtn.style.display = 'none';
    this.htmlElemets.registrationBtn.style.display = 'none';
    this.htmlElemets.registrationLinkBtn.style.display = 'inline-block';
  }

  private setRegistrationForm() {
    this.htmlElemets.authBlockHeader.innerHTML = 'Registration';
    this.htmlElemets.registrationForm.style.display = 'flex';
    this.htmlElemets.loginForm.style.display = 'none';
    this.htmlElemets.authBlock.style.height = '370px';
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
      loginEmail: findHtmlElement(document, '.login-form .authorization-email'),
      loginPassword: findHtmlElement(document, '.login-form .authorization-password'),
      registrationName: findHtmlElement(document, '.registration-form .authorization-name'),
      registrationEmail: findHtmlElement(document, '.registration-form .authorization-email'),
      registrationPassword: findHtmlElement(document, '.registration-form .authorization-password'),
      loginError: findHtmlElement(document, '.authorization-error'),
    });
  }

  private addAuthBtnClickListener() {
    this.htmlElemets.authBtn.addEventListener('click', () => {
      this.openAuthorizationBlock();
    });
  }

  private addBlurClickListener() {
    this.htmlElemets.blur.addEventListener('click', () => {
      this.closeAuthorizationBlock();
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
          (this.htmlElemets.authIcon as HTMLImageElement).src = './assets/svg/verified.svg';
        } else {
          this.htmlElemets.loginError.style.display = 'block';
          (this.htmlElemets.loginPassword as HTMLInputElement).value = '';
        }
      })();
    });
  }

  private addRegistrationBtnListener() {
    this.htmlElemets.registrationBtn.addEventListener('click', () => {
      console.log(new FormData(this.htmlElemets.registrationForm as HTMLFormElement).values());
      // submit form
      // if true: reset form data, draw message SUCCESS
      // if false: draw red error
    });
  }

  private authorization() {
    this.addAuthorizationToHtml();
    this.addAuthBtnClickListener();
    this.addBlurClickListener();
    this.addCloseAuthContainerBtnListener();
    this.addRegistrationLinkBtnListener();
    this.addLoginLinkBtnListener();
    this.addLoginBtnListener();
    this.addRegistrationBtnListener();
  }
}

export default App;
