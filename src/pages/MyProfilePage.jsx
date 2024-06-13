import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import userAPI from "../api/user.api";

function MyProfilePage() {
  const { user } = useSelector((state) => state.auth);
  const refName = useRef();
  const [img, setImg] = useState("");

  useEffect(() => {
    if (user) {
      refName.current.value = user.nickname;
    }
  }, [user]);

  const handleUpdateProfile = useCallback(async () => {
    const name = refName.current.value;
    userAPI
      .setProfile(name, img)
      .then((res) => {
        alert(res.message);
        location.reload();
      })
      .catch((e) => console.warn(e));
  }, [user, img]);

  return (
    <article className="flex flex-col justify-center items-center bg-white rounded w-3/5 m-auto p-5">
      <h3 className="font-bold text-lg">프로필 수정</h3>
      <label
        className="w-full text-xs text-left font-bold"
        htmlFor="InputNickName"
      >
        닉네임
      </label>
      <input
        autoFocus
        id="InputNickName"
        className="w-full border-b-2 indent-1 p-1 mb-2 outline-none"
        ref={refName}
      />
      <label
        className="w-full text-xs text-left font-bold"
        htmlFor="InputProfile"
      >
        아바타 이미지
      </label>
      <input
        id="InputProfile"
        accept="image/*"
        type="file"
        className="w-full border-b-2 indent-1 p-1 mb-2 outline-none text-xs"
        onChange={(e) => setImg(e.target.files[0])}
      />
      <button
        onClick={() => handleUpdateProfile(user.accessToken)}
        className="w-full rounded bg-gray-600 text-white p-1 m-1"
      >
        프로필 업데이트
      </button>
    </article>
  );
}

export default MyProfilePage;
