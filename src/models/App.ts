import { closeBurgerMenu, findHtmlElement, toggleBurgerMenu } from '../common/utils/utils';
import AudiocallController from '../controllers/AudiocallController';
import ErrorController from '../controllers/ErrorController';
// eslint-disable-next-line import/no-cycle
import IndexController from '../controllers/IndexController';
import SprintController from '../controllers/SprintController';
import StatisticsController from '../controllers/StatisticsController';
import TeamController from '../controllers/TeamController';
import TextbookController from '../controllers/TextbookController';
import EventObserver from './EventObserver';

class App {
  private _url: string;

  private page: string;

  private readonly pages;

  private urlObserver: EventObserver<string>;

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
  }

  private router() {
    this.urlObserver.subscribe(() => {
      this.getContent();
    });

    // add event listener and observer to NavBar links
    this.setRouterToElements('.nav-bar li');
    this.setRouterToElements('.logo');

    const burgerIcon = findHtmlElement(document, '.burger');
    burgerIcon.addEventListener('click', toggleBurgerMenu);

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
    closeBurgerMenu();
    const controller = this.pages[this.page as keyof typeof this.pages];
    if (controller) {
      controller.actionIndex();
    } else {
      this.pages.error.actionIndex();
    }
  }
}

export default App;
