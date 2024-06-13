import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import userAPI from "../api/user.api";
import { logIn } from "../redux/reducers/auth.reducer";
import LocalStorage, { KEY } from "../utils/LocalStorage";

function SignInPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const refId = useRef();
  const refPw = useRef();
  // const dispatch = useDispatch();

  const validate = useCallback((id, pw) => {
    if (!id) {
      return "아이디를 입력해주세요";
    } else if (!pw) {
      return "비밀번호를 입력해주세요";
    }
    return null;
  }, []);

  const handleSignIn = useCallback(() => {
    const id = refId.current.value;
    const pw = refPw.current.value;
    const validationMessage = validate(id, pw);
    if (validationMessage) {
      alert(validationMessage);
      return;
    }
    userAPI
      .signIn(id, pw)
      .then((user) => {
        LocalStorage.set(KEY._03_ACCESS_TOKEN, user.accessToken);
        const action = logIn({ ...user, id: user.userId });
        dispatch(action);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        alert(`${error.response.data.message}`);
      });
  }, []);

  return (
    <article className="flex flex-col justify-center items-center bg-white rounded w-3/5 m-auto p-5">
      <h3 className="font-bold text-lg">로그인</h3>
      <label className="w-full text-xs text-left font-bold" htmlFor="InputId">
        아이디
      </label>
      <input
        autoFocus
        id="InputId"
        ref={refId}
        className="w-full border-b-2 indent-1 p-1 mb-2 outline-none"
      />
      <label className="w-full text-xs text-left font-bold" htmlFor="InputPw">
        비밀번호
      </label>
      <input
        id="InputPw"
        ref={refPw}
        type="password"
        className="w-full border-b-2 indent-1 p-1 mb-2 outline-none"
      />
      <button
        onClick={handleSignIn}
        className="w-full rounded bg-gray-600 text-white p-1 m-1"
      >
        로그인
      </button>
      <Link
        to="/signUp"
        className="w-full rounded bg-gray-400 text-white p-1 m-1 text-center"
      >
        회원가입
      </Link>
    </article>
  );
}

export default SignInPage;
