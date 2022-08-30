import { findHtmlElement } from '../common/utils/utils';
import AudiocallController from '../controllers/AudiocallController';
import ErrorController from '../controllers/ErrorController';
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

  constructor() {
    this._url = window.location.pathname;
    this.page = this._url.slice(1) || 'index';
    this.pages = {
      index: IndexController,
      team: TeamController,
      textbook: TextbookController,
      sprint: SprintController,
      audiocall: AudiocallController,
      statistics: StatisticsController,
      error: ErrorController,
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
    // add event listener and observer to NavBar links
    const urlObserver = new EventObserver<string>();
    urlObserver.subscribe(() => {
      this.getContent();
    });

    const menuLinks: NodeListOf<HTMLElement> = document.querySelectorAll('.nav-bar li');
    menuLinks.forEach((link: HTMLElement) => {
      const { path } = link.dataset;
      link.addEventListener('click', () => {
        if (path) {
          window.history.pushState({ state: path }, 'SyllaBus', path);
          this.url = path;
          urlObserver.broadcast(this.url);
        }
      });
    });

    // add event listener to browser history buttons
    window.addEventListener('popstate', () => {
      this.url = window.location.pathname;
      urlObserver.broadcast(this.url);
    });

    const burgerIcon = findHtmlElement(document, '.burger');
    burgerIcon.addEventListener('click', App.toggleBurgerMenu.bind(this));
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
}

export default App;
