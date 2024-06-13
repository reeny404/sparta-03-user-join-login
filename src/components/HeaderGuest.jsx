import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export function HeaderGuest() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/signIn");
  }, []);

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
