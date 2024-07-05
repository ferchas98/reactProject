import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getUsers } from "../api/users";
import { getPostByID } from "../api/posts";
import { Toaster, toast } from "sonner";

export default function PostDetail({ posts }) {
  const router = useRouter();
  const { id } = router.query;
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    getUsers(token)
      .then((user) => {
        setUsers(user);
      })
      .catch((error) => {
        toast.error("Error getting users");
      });
    getPostByID(id).then((postData) => {
      setPost(postData.data?.post);
    });
  }, [id]);

  return (
    <>
      <Toaster />
      <main className="col-start-1 col-end-11 grid grid-rows-10 bg-[#F5F5F5]">
        <NavBar />
        <div className="grid grid-cols-9 mt-[7%]">
          <div className=" col-start-1 flex felx-col">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <div className="col-start-2 col-end-7 rounded-md border flex flex-col  bg-white w-[100%] h-[750px] ">
            <img src={post.image} alt="" className="rounded" />
            <div className="pl-10 pt-4">
              {users.map((user, idx) => {
                return (
                  <div key={`user-${idx}`} className="mb-3">
                    {user._id === post.user && (
                      <div className="flex flex-row">
                        <img
                          src={user.profilePic}
                          alt={user.name}
                          className=" rounded-[50%] h-[40px] w-[40px]"
                        />
                        <div className="flex flex-col ml-1">
                          <p>{user.name}</p>
                          <p className=" opacity-30 text-xs">
                            {new Date(post.createdAt).toDateString()}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              <h1 className="font-bold text-4xl">{post.title}</h1>
              <div className="flex flex-row mt-3.5 mb-10">
                {post.tags?.map((tag) => {
                  return (
                    <div className="mr-5" key={`tag-${tag}`}>
                      <p>#{tag}</p>
                    </div>
                  );
                })}
              </div>
              <p>{post.body}</p>
            </div>
          </div>
          <div className=" col-start-7 col-end-9 rounded-md border flex flex-col ml-5 bg-white w-[100%] h-[400px] pl-5 pr-5 pt-3">
            {users.map((user, idx) => {
              return (
                <div key={`user-${idx}`} className="mb-3">
                  {user._id === post.user && (
                    <div className="flex flex-row">
                      <img
                        src={user.profilePic}
                        alt={user.name}
                        className=" rounded-[50%] h-[40px] w-[40px]"
                      />
                      <div className="flex flex-col ml-1 self-end">
                        <p>{user.name}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <button className="bg-[#3B49DF] text-white rounded-md h-[10%]">
              Follow
            </button>
            <div className="flex flex-col mt-3">
              <p className=" opacity-50 mb-4">frontend Developer</p>
              <p className=" font-semibold text-md">Location</p>
              <p className="mb-2">Congo (RDC)</p>
              <p className=" font-semibold text-md">Eduction</p>
              <p className="mb-2">Kadea Academy</p>
              <p className=" font-semibold text-md">Joined</p>
              <p className="mb-2">Jul 12, 2023</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
