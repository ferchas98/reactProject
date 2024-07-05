export default function ListSections() {
  const options = [
    {
      icon: "https://img.icons8.com/?size=100&id=12229&format=png&color=000000",
      title: "Home",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=3jnrVS52owjR&format=png&color=000000",
      title: "Reading List",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=zSc7VWtAonLM&format=png&color=000000",
      title: "Podcasts",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=BplVSXvHsaMc&format=png&color=000000",
      title: "Videos",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=23062&format=png&color=000000",
      title: "Tags",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=30123&format=png&color=000000",
      title: "DEV Help",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=tpfCW2vDaYKA&format=png&color=000000",
      title: "Forem Shop",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=DFU1kReSUccu&format=png&color=000000",
      title: "Advertise on Dev",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=kuU7I7uPlHfo&format=png&color=000000",
      title: "DEV Challenges",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=LlgB5a8aAr0G&format=png&color=000000",
      title: "DEV Showcase",
    },
    {
      icon: "https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png",
      title: "About",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=Kb2AE0wgUNwl&format=png&color=000000",
      title: "Contact",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=32634&format=png&color=000000",
      title: "Guides",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=gCWKzO-Ww9oS&format=png&color=000000",
      title: "Software comparisons",
    },
  ];
  return (
    <section className="flex flex-col">
      {options.map((option, idx) => {
        return (
          <div
            className="flex flex-row justify-start items-center mb-3"
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
    </section>
  );
}
