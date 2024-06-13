import axios from "axios";

const BASE_URL = "https://moneyfulpublicpolicy.co.kr";

class UserAPI {
  #client;

  constructor() {
    this.#client = axios.create({ baseURL: BASE_URL });
  }

  async signUp(id, password, nickname) {
    const response = await this.#client.post("/register", {
      id,
      password,
      nickname,
    });
    console.log(response);
    return response;
  }

  async signIn(id, password) {
    const response = this.#client.post("/login", {
      id,
      password,
    });
    return response;
  }
}

const userAPI = new UserAPI();
export default userAPI;
