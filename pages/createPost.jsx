import { useForm } from "react-hook-form";
import { useState } from "react";
import { create } from "./api/posts";
import { getUsers } from "./api/users";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CreatePost() {
  const router = useRouter();
  const [values, setValues] = useState([]);
  const handleChange = (event) => {
    const { value } = event.target;
    const newValues = value.split(/[, ]+/); // Split by commas or spaces
    setValues(newValues);
  };

  const {
    handleSubmit,
    register,
    formState: { erorr },
    setError,
  } = useForm();

  async function onSubmit(data) {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    if (token) {
      const users = await getUsers(token);
      const userId = users.filter((user) => {
        return user.email === email;
      });

      create(
        data.title,
        data.image,
        data.body,
        userId[0]._id,
        values,
        token
      ).then(() => {
        toast.message("Creating Post");
        router.push("/");
      });
    } else {
      toast.error("Debes de estar loggeado");
    }
  }

  return (
    <>
      <Toaster />
      <main className=" bg-[#F5F5F5] max-h-fit">
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          <img
            className="h-[40px] w-[45px] md:h-[45px] md:w-[50px] md:m-2"
            src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="logo"
          />
        </button>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border mt-[50px] md:mt-[80px]  relative rounded-md md:w-[100%] h-[700px] bg-white lg:ml-[90px] lg:w-[66%] 2xl:w-[60%] 2xl:ml-[150px]"
        >
          <div className="flex flex-col absolute top-[3%] left-[5%] md:top-[8%] md:left-[13%]">
            <input
              type="text"
              placeholder="Add a cover photo"
              className="h-[40px] w-[83%] md:w-[50%] border rounded-lg p-3 text-center text-md "
              {...register("image", {
                required: { value: false },
              })}
            />
            <input
              className="font-bold text-3xl mt-6 mb-4 md:text-5xl"
              type="text"
              placeholder="New post title here..."
              {...register("title", {
                required: { value: true },
              })}
            />
            <input
              type="text"
              onChange={handleChange}
              placeholder="Add up to 4 tags..."
            />
          </div>
          <div className="absolute top-[26%] left-[5%] md:top-[32%] md:left-[13%]">
            <div className="flex flex-row md:w-[70%]">
              {values.length > 0 &&
                values.map((value, index) => (
                  <div
                    className="flex flex-row border rounded-md h-[36px] w-[30%] p-2 items-center"
                    key={`tags-${index}`}
                  >
                    <p className="mr-1">#</p>
                    <input
                      disabled
                      key={index}
                      type="text"
                      value={value}
                      onChange={() => {}}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="bg-[#F5F5F5] absolute top-[34%] w-[100%] h-[60px] md:top-[39%] md:p-4 items-center border flex flex-row ">
            <img
              className="h-[30px] w-[30px] mr-4  hover:rounded hover:bg-[#3B49DF] hover:bg-opacity-15 hover:p-1"
              src="https://img.icons8.com/?size=100&id=Ao9Capo3tPjH&format=png&color=000000"
              alt=""
            />
            <img
              className="h-[30px] w-[30px] mr-4  hover:rounded hover:bg-[#3B49DF] hover:bg-opacity-15 hover:p-2"
              src="https://img.icons8.com/?size=100&id=78944&format=png&color=000000"
              alt=""
            />
            <img
              className="h-[30px] w-[30px] mr-4  hover:rounded hover:bg-[#3B49DF] hover:bg-opacity-15 hover:p-2"
              src="https://img.icons8.com/?size=100&id=16073&format=png&color=000000"
              alt=""
            />
            <img
              className="h-[30px] w-[30px] mr-4  hover:rounded hover:bg-[#3B49DF] hover:bg-opacity-15 hover:p-2"
              src="https://img.icons8.com/?size=100&id=11266&format=png&color=000000"
              alt=""
            />
            <img
              className="h-[30px] w-[30px] mr-4  hover:rounded hover:bg-[#3B49DF] hover:bg-opacity-15 hover:p-2"
              src="https://img.icons8.com/?size=100&id=8800&format=png&color=000000"
              alt=""
            />
            <img
              className="h-[30px] w-[30px] mr-4  hover:rounded hover:bg-[#3B49DF] hover:bg-opacity-15 hover:p-2"
              src="https://img.icons8.com/?size=100&id=88166&format=png&color=000000"
              alt=""
            />
          </div>
          <input
            type="text"
            placeholder="Write your post content here..."
            className=" absolute top-[49%] h-[51%] w-[100%] text-2xl  p-3 align-top "
            {...register("body", {
              required: { value: true },
            })}
          />
          <div className="absolute top-[100%] flex flex-row">
            <button className="bg-[#3B49DF] text-white  ml-2  h-[45px] mt-4 rounded-md w-[100px]">
              Publish
            </button>
            <button className="ml-3 hover:text-[#8892ff] hover:rounded hover:bg-[#3B49DF] hover:bg-opacity-15  h-[45px] mt-4 rounded-md w-[100px]">
              Save draft
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
