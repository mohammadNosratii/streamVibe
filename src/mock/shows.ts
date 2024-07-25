import sonsOfAnarchy from "../assets/images/sons-of-anarchy.webp";
import strangerThings from "../assets/images/stranger-things.webp";
import theOriginals from "../assets/images/the-originals.webp";
import vikings from "../assets/images/vikings.webp";

export default function showsSlider() {
  return [
    {
      id: 1,
      title: "Sons of Anarchy",
      img: sonsOfAnarchy,
      description:
        "A biker struggles to balance being a father and being involved in an outlaw motorcycle club.",
      genres: "Crime, Drama, Thriller",
    },
    {
      id: 2,
      title: "Stranger Things",
      img: strangerThings,
      description:
        "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
      genres: "Drama, Fantasy, Horror",
    },
    {
      id: 3,
      title: "The Originals",
      img: theOriginals,
      description:
        "A family of power-hungry thousand-year-old vampires look to take back the city that they built and dominate all those who have done them wrong.",
      genres: "Drama, Fantasy, Horror",
    },
    {
      id: 4,
      title: "Vikings",
      img: vikings,
      description:
        "Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore--and raid--the distant shores across the ocean.",
      genres: "Action, Adventure, Drama",
    },
  ];
}
