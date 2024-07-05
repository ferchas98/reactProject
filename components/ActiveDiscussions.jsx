export default function ActiveDiscussion() {
  const discussions = [
    {
      title: "Weekly Watercooler Thread",
      comments: "6 Comments",
    },
    {
      title:
        "6 ways to turn your browser into super-debug-hero (ft. node.js + next.js!)",
      comments: "8 comments",
    },
    {
      title: "Lidership- food for thought",
      comments: "1 Comments",
    },
    {
      title: "Powerful AI Tools You SHould know",
      comments: "6 Comments",
    },
    {
      title: "Meme Monday",
      comments: "26 Comments",
    },
    {
      title: "Something Extra",
      comments: "16 Comments",
    },
  ];

  return (
    <div>
      {discussions.map((discussion) => {
        return (
          <div
            className="mb-8 border-b-2 p-1"
            key={`discussion-${discussion.title}`}
          >
            <h3 className="text-md">{discussion.title}</h3>
            <p className="text-sm opacity-50 mb-2">{discussion.comments}</p>
          </div>
        );
      })}
    </div>
  );
}
