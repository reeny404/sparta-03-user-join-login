import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { logIn, logOut } from "../redux/reducers/auth.reducer";

function Header() {
  const navigate = useNavigate();
  const user = useLoaderData();
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.auth);
  console.log("header", user);

  const handleLogOut = useCallback(() => {
    const action = logOut();
    dispatch(action);
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/signIn");
    } else {
      const action = logIn(user);
      dispatch(action);
    }
  }, []);

  if (!user) {
    return (
      <header className="w-full bg-gray-700 text-white px-4 py-3 flex flex-row box-border justify-center items-center">
        <span className="text-left w-full">
          <Link to="/" className="mr-4">
            HOME
          </Link>
        </span>
      </header>
    );
  }
  return (
    <header className="w-full bg-gray-700 text-white px-4 py-3 flex flex-row box-border justify-center items-center">
      <span className="text-left w-1/2">
        <Link to="/" className="mr-4">
          HOME
        </Link>
        <Link to="/profile" className="">
          내 프로필
        </Link>
      </span>
      <span className="text-right w-1/2">
        <span className="">
          <span className="">
            <img src={user.avatar} />
          </span>
          <span>{user.nickname}</span>
        </span>
        <button
          onClick={handleLogOut}
          className="rounded bg-red-500 py-1.5 px-2 text-sm ml-4"
        >
          로그아웃
        </button>
      </span>
    </header>
  );
}

export default Header;
