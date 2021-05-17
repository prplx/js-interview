export class EventEmitter {
  constructor() {
    this.events = {};
  }
  _remove(event, cb) {
    if (event in this.events) {
      const idx = this.events[event].indexOf(cb);
      ~idx && this.events[event].splice(idx, 1);
    }
  }
  on(event, cb) {
    if (event in this.events) {
      this.events[event].push(cb);
    } else {
      this.events[event] = [cb];
    }
    return () => this._remove(event, cb);
  }
  off(event, cb) {
    this._remove(event, cb);
  }
  emit(event, ...args) {
    if (event in this.events) {
      this.events[event].forEach(cb => cb.apply(this, args));
    }
  }
  once(event, cb) {
    const remove = this.on(event, (...args) => {
      remove();
      cb.apply(this, args);
    });
  }
}
