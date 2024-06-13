export const KEY = {
  _00_ACTIVE_WEEK: "00-active-week",
  _02_MONTH: "02-cashbook-month",
};

class LocalStorage {
  #instance;

  constructor() {
    this.#instance = window.localStorage;
  }

  get(key) {
    return this.#instance.getItem(key);
  }

  set(key, val) {
    this.#instance.setItem(key, val);
  }

  clear() {
    this.#instance.clear();
  }
}

export default new LocalStorage();
