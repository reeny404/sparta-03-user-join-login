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
    <div className="flex flex-col justify-center items-center">
      <span>회원가입</span>
      <span>아이디</span>
      <input ref={refId} placeholder="아이디" />
      <span>비밀번호</span>
      <input ref={refPw} placeholder="비밀번호" type="password" />
      <span>닉네임</span>
      <input ref={refNickName} placeholder="닉네임" />
      <button onClick={handleSignUp}>회원가입</button>
      <Link to="/signIn">로그인</Link>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default SignUpPage;
