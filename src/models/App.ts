import EventObserver from './EventObserver';

class App {
  private url: string;

  private pages: string[];

  private mainContainer: HTMLElement | null;

  constructor() {
    this.url = window.location.pathname;
    this.pages = ['', 'textbook', 'sprint', 'audiocall', 'statistics', 'error'];
    this.mainContainer = document.querySelector('main');

    // add content into main according to link
    /*
      TODO:
        replace "...innerHTML = url" with "...innerHTML = this.getContent(url)"
    */
    if (this.mainContainer) this.mainContainer.innerHTML = this.url;
  }

  start() {
    // add event listener and observer to NavBar links
    const urlObserver: EventObserver = new EventObserver();
    urlObserver.subscribe((url: string) => {
      /*
        TODO:
          replace "...innerHTML = url" with "...innerHTML = this.getContent(url)"
      */
      if (this.mainContainer) this.mainContainer.innerHTML = url;
    });

    const menuLinks: NodeListOf<HTMLElement> = document.querySelectorAll('.nav-bar li');
    menuLinks.forEach((link: HTMLElement) => {
      const { path } = link.dataset;
      link.addEventListener('click', () => {
        if (path) {
          window.history.pushState({ state: path }, 'RS Clone', path);
          this.url = path;
          urlObserver.broadcast(this.url);
        }
      });
    });
  }

  /*
    TODO:
      function "private getContent() {}"
        get content from this.url and inner html it into <main>
            check:
                    if (this.pages.includes(this.url.substr(1))) {
                      *return content from this page*
                    } else {
                      const currentState = window.history.state;
                      this.url = '/error';
                      window.history.replaceState(currentState, 'RS Clone', this.url);
                      *return content from error page*
                    }
  */
}

export default App;
