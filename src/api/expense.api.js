import axios from "axios";
import { v4 as uuid } from "uuid";

class ExpenseAPI {
  #client;
  constructor() {
    this.#client = axios.create({ baseURL: "http://localhost:5000/expenses" });
  }

  async getList() {
    const response = await this.#client.get();
    return response.data;
  }

  async get(recordId) {
    const response = await this.#client.get(`/${recordId}`);
    return response.data;
  }

  async add(expense, user) {
    return await this.#client.post("", {
      ...expense,
      id: uuid(),
      userId: user?.id,
      createdBy: user?.nickname,
    });
  }

  async update(expense, user) {
    if (expense.userId !== user.id) {
      throw new Error("본인이 작성한 글만 수정 할 수 있습니다.");
    }

    return await this.#client.put(`/${expense.id}`, {
      ...expense,
      id: uuid(),
      userId: user?.id,
      createdBy: user?.nickname,
    });
  }

  async delete(expense, user) {
    if (expense.userId !== user.id) {
      throw new Error("본인이 작성한 글만 삭제 할 수 있습니다.");
    }
    return await this.#client.delete(`/${expense.id}`);
  }
}

export default new ExpenseAPI();
