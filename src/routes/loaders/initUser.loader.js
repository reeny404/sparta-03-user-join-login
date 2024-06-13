import userAPI from "../../api/user.api";
import LocalStorage, { KEY } from "../../utils/LocalStorage";

export async function initUserLoader() {
  const token = LocalStorage.get(KEY._03_ACCESS_TOKEN);
  if (!token) {
    return null;
  }

  const user = await userAPI
    .getUserInfo(token)
    .then((user) => ({ ...user, accessToken: token }))
    .catch((e) => {
      LocalStorage.set(KEY._03_ACCESS_TOKEN, "");
      console.error(e);
      return null;
    });

  return user;
}
