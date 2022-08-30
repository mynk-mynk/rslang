class TeamView {
  // static draw(data: IObject<string>)
  static draw() {
    return `<style>
    .main-container {
      height: 100%;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      padding: 0 50px;
    }
    
    .team-container {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 50px;
      flex-wrap: wrap;
      margin: 50px 0;
    }
    
    .card-container {
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 300px;
      padding: 20px;
      border: 2px solid var(--color);
      box-shadow: 0 0 10px var(--color);
      border-radius: 20px;
      color: var(--color);
      opacity: 90%;
      overflow: hidden;
    }
    
    .card-img {
      margin-bottom: 20px;
    }
    
    .card-description {
      text-align: center;
    }
    
    .card-name {
      font-family: var(--font-primary);
      font-size: 1.2rem;
      margin-bottom: 3px;
    }
    
    .card-contribution {
      margin: 20px 0;
      text-align: justify;
    }
    
    .card-link {
      display: inline-block;
      font-weight: 600;
    }
    
    .card-link:hover {
      text-shadow: 1px 1px 2px var(--ligth-color);
    }
    
    .card-link:active {
      transform: scale(0.98);
    }
    </style>
    <div class="main-container">
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
