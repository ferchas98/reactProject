import PostLayout from "./PostLayout";

export default function MainPost({ posts, users }) {
  return (
    <main className="col-start-1 col-end-11 mt-[7%] md:col-start-4 lg:col-start-3 lg:col-end-9 lg:mr-4">
      <div className="mt-4">
        <PostLayout posts={posts} users={users} />
      </div>
    </main>
  );
}
