import './team.css';

class TeamView {
  // static draw(data: IObject<string>)
  static draw() {
    return `<div class="main-container-team">
    <h1>Наша команда</h1>
    <div class="team-container">
      <div class="card-container">
        <img class="card-img" src="./assets/images/team/dasha.png" alt="Team member picture 1" width="200">
        <div class="card-description">
          <p class="card-name">Name</p>
          <p>Frontend developer</p>
          <ul class="card-contribution">
          <li>Team lead</li>
          <li>Design</li>
          <li>Textbook</li>
          </ul>
          <a class="card-link" href="https://github.com/mynk-mynk" target="_blank">github</a>
        </div>
      </div>

      <div class="card-container">
        <img class="card-img" src="./assets/images/team/rustam.jpg" alt="Team member picture 1" width="200">
        <div class="card-description">
          <p class="card-name">Name</p>
          <p>Frontend developer</p>
          <ul class="card-contribution">
          <li>Backend</li>
          <li>game Audiocall</li>
          <li>game Sprint</li>
          </ul>
          <a class="card-link" href="https://github.com/spin4ester" target="_blank">github</a>
        </div>
      </div>

      <div class="card-container">
      <img class="card-img" src="./assets/images/team/ann.png" alt="Team member picture 1" width="200">
      <div class="card-description">
        <p class="card-name">Name</p>
        <p>Frontend developer</p>
        <ul class="card-contribution">
          <li>App architecture</li>
          <li>Routing</li>
          <li>Statistics</li>
          </ul>
        <a class="card-link" href="https://github.com/ann-makovskaya" target="_blank">github</a>
      </div>
    </div>
    </div>

  </div>`;
  }
}

export default TeamView;
