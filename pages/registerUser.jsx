import { useForm } from "react-hook-form";
import { create } from "./api/users";
import Link from "next/link";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/router";

export default function RegisterUser() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { erorr },
    setError,
  } = useForm();

  async function onSubmit(data) {
    try {
      if (data.password === data.confiredPass) {
        await create(data.email, data.password, data.name, data.profilePic)
          .then(() => {
            toast.message("User Created correctly");
            router.push("/login");
          })
          .catch((error) => {
            toast.error("Error Creating User");
          });
      } else {
        toast.error("Passwords do not match");
      }
    } catch (error) {
      toast.error("Error creating user");
    }
  }
  return (
    <>
      <Toaster />
      <main className="flex flex-col justify-items-center items-center p-8">
        <div className="flex flex-col justify-items-center items-center mb-5">
          <img
            className="h-[50px] w-[60px] mb-5"
            src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="Logo"
          />
          <h1 className="font-bold text-4xl mb-1">Join the DEV Community</h1>
          <h4 className=" opacity-60 text-lg">
            DEV Community is a community of 1,693,354 amazing developers
          </h4>
        </div>
        <div className="flex flex-col justify-items-center items-center w-[100%] md:w-[90%] lg:w-[70%] xl:w-[50%] 2xl:w-[40%] p-2 ">
          <button className="flex flex-row border rounded-md w-[100%] mb-3 justify-evenly h-[50px] items-center">
            <img
              className="h-[20px] w-[20px] ml-3"
              src="https://turbologo.com/articles/wp-content/uploads/2018/03/apple-logo-black.png"
              alt="Apple"
            />
            <p className="flex-1">Continue with Apple</p>
          </button>
          <button className="flex flex-row border rounded-md w-[100%] mb-3 justify-evenly h-[50px] items-center">
            <img
              className="h-[40px] w-[40px] ml-1"
              src="https://static.vecteezy.com/system/resources/previews/018/930/698/original/facebook-logo-facebook-icon-transparent-free-png.png"
              alt="Facebook"
            />
            <p className="flex-1">Continue with Facebook</p>
          </button>
          <button className="flex flex-row border rounded-md w-[100%] mb-3 justify-evenly h-[50px] items-center">
            <img
              className="h-[25px] w-[25px] ml-3 rounded-md"
              src="https://avatars.githubusercontent.com/u/65030610?s=200&v=4"
              alt="Forem"
            />
            <p className="flex-1">Continue with Forem</p>
          </button>
          <button className="flex flex-row border rounded-md w-[100%] mb-3 justify-evenly h-[50px] items-center">
            <img
              className="h-[25px] w-[25px] ml-3"
              src="https://cdn.icon-icons.com/icons2/2428/PNG/512/github_black_logo_icon_147128.png"
              alt="GitHub"
            />
            <p className="flex-1">Continue with GitHub</p>
          </button>
          <button className="flex flex-row border rounded-md w-[100%] mb-3 justify-evenly h-[50px] items-center">
            <img
              className="h-[30px] w-[30px] ml-2.5"
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="Google"
            />
            <p className="flex-1">Continue with Google</p>
          </button>
          <button className="flex flex-row border rounded-md w-[100%] mb-3 justify-evenly h-[50px] items-center">
            <img
              className="h-[30px] w-[40px] ml-1.5"
              src="https://t3.ftcdn.net/jpg/06/28/21/10/360_F_628211083_PCJPCvA0I32B6ZCQPOiGVkNnqiSjzFCL.png"
              alt="Twiiter"
            />
            <p className="flex-1">Continue with Twitter (X)</p>
          </button>
        </div>
        <div className="relative flex items-center justify-center my-4 w-[98%] md:w-[90%] lg:w-[70%] xl:w-[50%] 2xl:w-[40%]">
          <div className="border h-[1px] w-[50%]"></div>
          <div className="relative bg-white px-2 text-gray-500">OR</div>
          <div className="border h-[1px] w-[50%]"></div>
        </div>
        <div className="flex flex-col justify-items-center items-center w-[100%] md:w-[90%] lg:w-[70%] xl:w-[50%] 2xl:w-[40%]">
          <form
            className="flex flex-col w-[70%]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label>Name</label>
            <input
              className="border rounded-md p-1 mb-2 mt-1"
              required
              type="text"
              placeholder="Name"
              name=""
              id=""
              {...register("name", {
                required: { value: true, message: "Name Requiered" },
              })}
            />
            <label>Profile Picture</label>
            <input
              className="border rounded-md p-1 mb-2 mt-1"
              required
              type="text"
              placeholder="Profile Pic"
              name=""
              id=""
              {...register("profilePic", {
                required: { value: false },
              })}
            />
            <label>Email</label>
            <input
              className="border rounded-md p-1 mb-2 mt-1"
              required
              type="text"
              placeholder="Email"
              name=""
              id=""
              {...register("email", {
                required: { value: true, message: "Email Requiered" },
              })}
            />
            <label>Password</label>
            <input
              className="border rounded-md p-1 mb-2 mt-1"
              required
              type="password"
              placeholder="Password"
              name=""
              id=""
              {...register("password", {
                required: { value: true, message: "Password Requiered" },
              })}
            />
            <label>Confirm Password</label>
            <input
              className="border rounded-md p-1 mb-2 mt-1"
              required
              type="password"
              placeholder="Confirm Password"
              name=""
              id=""
              {...register("confiredPass", {
                required: { value: true, message: "Please Confirm Password" },
              })}
            />
            <button className="border-2 p-1 rounded-md self-center w-[100%] md:w-[52%] xl:w-[30%]  h-[100%] md:p-1 border-[#3B49DF] text-[#3B49DF]  hover:bg-[#3B49DF] hover:text-white">
              Create account
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
