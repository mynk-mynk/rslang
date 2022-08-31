import './team.css';

class TeamView {
  // static draw(data: IObject<string>)
  static draw() {
    return `<div class="main-container-team">
    <h1>Наша команда</h1>
    <div class="team-container">
      <div class="card-container">
        <img class="card-img" src="../../assets/images/team/anonymous.png" alt="Team member picture 1" width="200">
        <div class="card-description">
          <p class="card-name">Name</p>
          <p>Frontend developer</p>
          <p class="card-contribution">Because Firefox saves state objects to the user's disk so they can be restored after the user restarts the browser, we impose a size limit of 16 MiB on the serialized representation of a state object.</p>
          <a class="card-link" href="">github</a>
        </div>
      </div>
    </div>
  </div>`;
  }
}

export default TeamView;
