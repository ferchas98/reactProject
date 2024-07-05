import ActiveDiscussion from "./ActiveDiscussions";

export default function RightSideBar() {
  return (
    <aside className="hidden lg:flex flex-col lg:col-start-9 lg:col-end-11 mt-[40%] w-[100%] ">
      <div className="border rounded-lg p-2 bg-white">
        <p className="font-bold ">Active discussions</p>
        <ActiveDiscussion />
      </div>
      <div className="border rounded-lg p-2 bg-white mt-3">
        <div className="mb-8 border-b-2 p-1">
          <h3 className="text-xl font-bold">#discuss</h3>
          <p>Lidership- food for thought</p>
          <p className="text-sm opacity-50 mb-2">1 Comment</p>
        </div>
      </div>
      <div className="border rounded-lg p-2 bg-white mt-3">
        <div className="mb-8 border-b-2 p-1">
          <h3 className="text-xl font-bold">#watercooler</h3>
          <p>Weekly watercooler Thread</p>
          <p className="text-sm opacity-50 mb-2">14 Comment</p>
        </div>
      </div>
    </aside>
  );
}
