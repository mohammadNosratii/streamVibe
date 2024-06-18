import oblivion from "../assets/images/oblivion.jpg";
import spiderMan from "../assets/images/spider-man.jpeg";
import mazeRunner from "../assets/images/the-maze-runner.jpg";
import theHungerGames from "../assets/images/the-hunger-games.jpg";

export default function MoviesCardInfo() {
  return [
    {
      title: "Oblivion",
      img: oblivion,
      date: "12 April 2013",
      rate: "7",
      review: "555k",
      dec: "A veteran assigned to extract Earth's remaining resources begins to question what he knows about his mission and himself.",
      geners: [{ gen: "Action" }, { gen: "Adventure" }, { gen: "Sci-Fi" }],
      color: "from-blue-900",
      mainColor: "bg-red-45/50"
    },
    {
      title: "Spider-Man: Across the Spider-Verse",
      img: spiderMan,
      date: "30 May 2023",
      rate: "8.6",
      review: "379k",
      dec: "Miles Morales catapults across the multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
      geners: [{ gen: "Animation" }, { gen: "Action" }, { gen: "Adventure" }],
      color: "from-red-45/80",
      mainColor: "bg-green-900/60"
    },
    {
      title: "The Maze Runner",
      img: mazeRunner,
      date: "19 September 2014",
      rate: "6.8",
      review: "514k",
      dec: "Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow runners for a shot at escape.",
      geners: [{ gen: "Action" }, { gen: "Mystery" }, { gen: "Sci-Fi" }],
      color: "from-green-900",
      mainColor: "bg-blue-900/50"
    },
    {
      title: "The Hunger Games",
      img: theHungerGames,
      date: "12 April 2013",
      rate: "7.2",
      review: "1M",
      dec: "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.",
      geners: [{ gen: "Action" }, { gen: "Adventure" }, { gen: "Sci-Fi" }],
      color: "from-red-60/40",
      mainColor: "bg-green-900/60"
    },
  ];
}
