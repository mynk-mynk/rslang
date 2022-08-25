class EventObserver<T> {
  private observers: Array<(data: T) => void>;

  constructor() {
    this.observers = [];
  }

  subscribe(func: (data: T) => void) {
    this.observers.push(func);
  }

  unsubscribe(func: (data: T) => void) {
    this.observers = this.observers.filter((subs) => subs !== func);
  }

  broadcast(data: T) {
    this.observers.forEach((subs) => subs(data));
  }
}

export default EventObserver;
