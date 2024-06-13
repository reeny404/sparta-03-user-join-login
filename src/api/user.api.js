import axios from "axios";

class UserAPI {
  #client;

  constructor() {
    this.#client = axios.create({
      baseURL: "https://moneyfulpublicpolicy.co.kr",
    });
  }

  async signUp(id, password, nickname) {
    const response = await this.#client.post("/register", {
      id,
      password,
      nickname,
    });
    return response.data;
  }

  async signIn(id, password) {
    const response = await this.#client.post("/login", {
      id,
      password,
    });
    return response.data;
  }

  async getUserInfo(accessToken) {
    const response = await this.#client.get("/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }

  async setProfile(accessToken, img, nickname) {
    const form = new FormData();
    form.append("avatar", img);
    form.append("nickname", nickname);

    const response = await axios.patch("/profile", form, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }
}

const userAPI = new UserAPI();
export default userAPI;
