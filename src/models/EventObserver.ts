class EventObserver {
  private observers: Array<(data: string) => void>;

  constructor() {
    this.observers = [];
  }

  subscribe(func: (data: string) => void) {
    this.observers.push(func);
  }

  unsubscribe(func: () => void) {
    this.observers = this.observers.filter((subs) => subs !== func);
  }

  broadcast(data: string) {
    this.observers.forEach((subs) => subs(data));
  }
}

export default EventObserver;
