import { findHtmlElement } from '../common/utils/utils';
import TeamView from '../views/pages/team/team';

class TeamController {
  static actionIndex() {
    const main = findHtmlElement(document, 'main');
    main.innerHTML = TeamView.draw();
  }
}

export default TeamController;
