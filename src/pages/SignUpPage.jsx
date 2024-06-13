import { useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import userAPI from "../api/user.api";

function SignUpPage() {
  const navigate = useNavigate();
  const refId = useRef();
  const refPw = useRef();
  const refNickName = useRef();

  const validate = useCallback((id, pw, nickname) => {
    //아이디는 4~10글자로, 비밀번호는 4~15글자로, 닉네임은 1~10글자로 제한하세요.
    if (id.length > 10 || id.length < 4) {
      return "아이디는 4~10글자로 입력해주세요";
    } else if (pw.length > 15 || pw.length < 4) {
      return "비밀번호는 4~15글자로 입력해주세요";
    } else if (nickname.length > 10 || nickname.length < 1) {
      return "닉네임은 10글자 이내로 입력해주세요";
    }
    return null;
  }, []);

  const handleSignUp = () => {
    const id = refId.current.value;
    const pw = refPw.current.value;
    const nick = refNickName.current.value;

    const validationMessage = validate(id, pw, nick);
    if (validationMessage) {
      alert(validationMessage);
      return;
    }
    userAPI
      .signUp(id, pw, nick)
      .then(() => {
        navigate("/signIn");
      })
      .catch((error) => {
        console.error(error);
        alert(`${error.response.data.message}`);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-white rounded w-3/5 m-auto p-5">
      <h3 className="font-bold text-lg">회원가입</h3>
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
      <label
        className="w-full text-xs text-left font-bold"
        htmlFor="InputNickName"
      >
        닉네임
      </label>
      <input
        id="InputNickName"
        ref={refNickName}
        className="w-full border-b-2 indent-1 p-1 mb-2 outline-none"
      />
      <button
        onClick={handleSignUp}
        className="w-full rounded bg-gray-600 text-white p-1 m-1"
      >
        회원가입
      </button>
      <Link
        to="/signIn"
        className="w-full rounded bg-gray-400 text-white p-1 m-1 text-center"
      >
        로그인
      </Link>
    </div>
  );
}

export default SignUpPage;
