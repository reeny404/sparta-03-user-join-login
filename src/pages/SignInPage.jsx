import { useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import userAPI from "../api/user.api";

function SignInPage() {
  const navigate = useNavigate();
  const refId = useRef();
  const refPw = useRef();
  const refNickName = useRef();

  const validate = useCallback((id, pw, nickname) => {
    if (!id) {
      return "아이디를 입력해주세요";
    } else if (!pw) {
      return "비밀번호를 입력해주세요";
    } else if (!nickname) {
      return "닉네임을 입력해주세요";
    }
    return null;
  }, []);

  const handleSignIn = useCallback(() => {
    const id = refId.current.value;
    const pw = refPw.current.value;
    const nick = refNickName.current.value;

    const validationMessage = validate(id, pw, nick);
    if (validationMessage) {
      alert(validationMessage);
      return;
    }
    userAPI
      .signIn(id, pw)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        alert(`${error.response.data.message}`);
      });
  }, []);

  return (
    <article className="flex flex-row">
      <span>로그인</span>
      <span>아이디</span>
      <input ref={refId} placeholder="아이디" />
      <span>비밀번호</span>
      <input ref={refPw} placeholder="비밀번호" type="password" />
      <button onClick={handleSignIn}>로그인</button>
      <Link to="/signUp">회원가입</Link>
    </article>
  );
}

export default SignInPage;
