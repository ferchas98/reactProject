import { getUsers } from "@/pages/api/users";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import Link from "next/link";

export default function PostLayout({ posts }) {
  const [users, setUsers] = useState([]);
  const [latestPost, setLatestPost] = useState([]);
  const [topPost, setTopPost] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    getUsers(token)
      .then((user) => {
        setUsers(user);
      })
      .catch((error) => {
        toast.error("Error al cargar los usuarios");
      });
  }, []);

  function handleLatest() {
    posts.map((post) => console.log(post.createdAt));

    const latest = [...posts];
    latest.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    console.log(latest);
    return latestPost;
  }

  return (
    <>
      <Toaster />
      <section className="mt-4">
        <header className="flex flex-row mb-4">
          <button className="ml-2 text-xl">Relevant</button>
          <button
            onClick={() => {
              handleLatest();
            }}
            className="ml-4 text-xl"
          >
            Latest
          </button>
          <button
            o
            onClick={() => {
              handleTop();
            }}
            className="ml-4 text-xl"
          >
            Top
          </button>
        </header>
        {posts.map((post, idx) => {
          return (
            <Link href={`/posts/${post._id}`} key={`post-${idx}`}>
              <article
                key={`post-${idx}`}
                className="border rounded-md mb-3 bg-white"
              >
                {idx === 0 && (
                  <img
                    key={`img-${idx}`}
                    src={post.image}
                    alt=""
                    className="border rounded-md w-[100%]"
                  />
                )}
                {users.map((user, idx) => {
                  return (
                    <div key={`user-${idx}`} className="m-5">
                      {user._id === post.user && (
                        <div className="flex flex-row" key={`user-${idx}`}>
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
                <h2 className="m-5 font-bold text-2xl">{post.title}</h2>
                <div className="m-5 flex flex-row ">
                  {post.tags.map((tag) => {
                    return (
                      <div className="mr-5" key={`tags-${tag}`}>
                        <p>#{tag}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="m-5 flex flex-row  ">
                  <div className="flex flex-row items-center">
                    <img
                      src="https://img.icons8.com/?size=100&id=AiTe9HD0R6qV&format=png&color=000000"
                      alt=""
                      className="h-[22px] w-[22px] rounded-[50%]  "
                    />
                    <img
                      src="https://img.icons8.com/?size=100&id=MiaB7VmxAIAO&format=png&color=000000"
                      alt=""
                      className="h-[22px] w-[22px] rounded-[50%]  "
                    />
                    <img
                      src="https://img.icons8.com/?size=100&id=VPImuRG4xXS2&format=png&color=000000"
                      alt=""
                      className="h-[22px] w-[22px] rounded-[50%]  "
                    />
                    <img
                      src="https://img.icons8.com/?size=100&id=101728&format=png&color=000000"
                      alt=""
                      className="h-[22px] w-[22px] rounded-[50%]  "
                    />
                    <img
                      src="https://img.icons8.com/?size=100&id=V6zmBDTUPL-g&format=png&color=000000"
                      alt=""
                      className="h-[22px] w-[22px] rounded-[50%]   "
                    />
                    <p className="ml-2 md:text-xs">144 Reactions</p>
                  </div>
                  <div className=" flex flex-row ml-[10%] md:ml-[5%]">
                    <img
                      src="https://img.icons8.com/?size=100&id=547sAUNETri4&format=png&color=000000"
                      alt=""
                      className="h-[22px] w-[22px] mr-2 md:h-[17px] md:w-[17px]"
                    />
                    <p className="text-xs">19 Comments</p>
                  </div>
                  <div className=" ml-[23%] md:ml-[10%] flex flex-row">
                    <p className="text-sm mr-4 md:text-xs">2 min read</p>
                    <img
                      src="https://img.icons8.com/?size=100&id=82461&format=png&color=000000"
                      alt=""
                      className="h-[22px] w-[22px] md:h-[17px] md:w-[17px]"
                    />
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </section>
    </>
  );
}
