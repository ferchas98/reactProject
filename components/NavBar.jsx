import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getUsers } from "@/pages/api/users";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [userProfilePic, setUserProfilePic] = useState("");

  const getUsersData = async () => {
    const users = await getUsers(token);
    const userPic = users.filter((user) => {
      return user.email === email;
    });
    setUserProfilePic(userPic);
  };

  useEffect(() => {
    const tkn = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    setToken(tkn);
    setEmail(email);
  }, [token]);

  return (
    <nav className="flex flex-row border-b-2 fixed h-[55px] w-[100%] p-2 col-start-1 col-end-7 bg-white">
      <div className="flex flex-row w-[100%] xl:mr-[100px] xl:ml-[100px]">
        <button className="flex flex-col justify-center mr-2 items-center md:hidden">
          <img
            className="h-[25px] w-[25px]"
            src="https://img.icons8.com/?size=100&id=36389&format=png&color=000000"
            alt="menu"
          />
        </button>
        <div className="flex flex-row grow justify-start ml-0">
          <button
            onClick={() => {
              router.push("/");
            }}
          >
            <img
              className="h-[40px] w-[45px] md:h-[45px] md:w-[50px] md:mr-2"
              src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="logo"
            />
          </button>
          <input
            className="hidden md:block w-[85%] lg:w-[100%] h-[100%] border-2 rounded-md md:mt-1 p-3"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className="flex flex-row justify-end w-[25%] md:flex-1 md:justify-around lg:justify-evenly xl:justify-end ">
          {!token && (
            <button className="hidden md:block md:w-[35%] lg:w-[30%] xl:w-[20%] p-1 mr-1 hover:text-[#8892ff] hover:rounded hover:bg-[#3B49DF] hover:bg-opacity-15">
              <Link href="/login">Log in</Link>
            </button>
          )}

          <img
            className="h-[25px] w-[25px] mt-1.5 mr-3 md:hidden "
            src="https://img.icons8.com/?size=100&id=132&format=png&color=000000"
            alt="Search"
          />

          {token && (
            <button className="hidden md:block border-2 rounded-md md:w-[50%] lg:w-[40%] xl:w-[30%] xl:mr-3 h-[100%] md:p-1 border-[#3B49DF] text-[#3B49DF]  hover:bg-[#3B49DF] hover:text-white">
              <Link href="/CreatePost">Create Post</Link>
            </button>
          )}
          {token && (
            <button className="h-[100%] w-[30px] md:w-[30px] md:h-[100%] mr-1 md:mr-0 xl:mr-3">
              <img
                src="https://www.iconpacks.net/icons/1/free-bell-icon-860-thumb.png"
                alt="Notifications"
              />
            </button>
          )}
          {token && (
            <button className="h-[100%] w-[40px] md:w-[35px] md:h-[100%] border rounded-[50%] border-black ml-2 md:ml-0 xl:mr-3">
              <img src={userProfilePic} alt="avatar" />
            </button>
          )}

          {!token && (
            <button className="border-2 p-1 rounded-md  w-[100%] md:w-[52%] xl:w-[30%]  h-[100%] md:p-1 border-[#3B49DF] text-[#3B49DF]  hover:bg-[#3B49DF] hover:text-white">
              <Link href="/register">Create account</Link>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
