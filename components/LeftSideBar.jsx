import ListSections from "./ListSections";

export default function LeftSideBar() {
  const infoTabs = [
    {
      icon: "https://img.icons8.com/?size=100&id=FYJ9HNSqf_uK&format=png&color=000000",
      title: "Code of Conduct",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=4dTBn5vlN-an&format=png&color=000000",
      title: "Privacy Policy",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=runYFO7RVbcD&format=png&color=000000",
      title: "Terms of use",
    },
  ];
  const socials = [
    {
      icon: "https://cdn.icon-icons.com/icons2/4029/PNG/512/twitter_x_new_logo_x_rounded_icon_256078.png",
    },
    {
      icon: "https://i.pinimg.com/originals/b6/99/1c/b6991c27a36077737c09a40cb31ecdef.jpg",
    },
    {
      icon: "https://xmorse.gallerycdn.vsassets.io/extensions/xmorse/dark-theme-github/2.0.0/1565294235331/Microsoft.VisualStudio.Services.Icons.Default",
    },
    {
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/black-instagram-icon.png",
    },
    {
      icon: "https://images.freeimages.com/fic/images/icons/2779/simple_icons/4096/twitch_4096_black.png",
    },
    {
      icon: "https://cdn.icon-icons.com/icons2/3398/PNG/512/mastodon_logo_icon_214664.png",
    },
  ];
  return (
    <aside className="hidden col-start-1 md:col-end-4 lg:col-end-3 row-start-1 p-3 mt-[40%] md:flex flex-col w-[100%] ml-2 ">
      <ListSections />
      <p className="font-bold mt-3 text-lg mb-4">Other</p>
      <div>
        {infoTabs.map((option, idx) => {
          return (
            <div
              className="flex flex-row justify-start items-center mb-2"
              key={`option-${idx}`}
            >
              <img
                className="h-[30px] w-[30px] mr-2"
                src={option.icon}
                alt={option.title}
              />
              <p>{option.title}</p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row mt-6">
        {socials.map((social, idx) => {
          return (
            <div key={`social-${idx}`}>
              <img
                className="h-[30px] w-[30px] mr-6 "
                src={social.icon}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </aside>
  );
}
