import worldWarZ from "../assets/images/worldWarZ.jpg";
import evilDeadRise from "../assets/images/evilDeadRise.jpg";
import fall from "../assets/images/fall.jpg";
import hacksawRidge from "../assets/images/hacksawRidge.png";

export default function newMoviesInfo() {
  return [
    {
      id: 1,
      title: "Evil Dead Rise",
      img: evilDeadRise,
      description:
        "A twisted tale of two estranged sisters whose reunion is cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
      genres: "Horror",
    },
    {
      id: 2,
      title: "World War Z",
      img: worldWarZ,
      description:
        "Former United Nations employee Gerry Lane traverses the world in a race against time to stop a zombie pandemic that is toppling armies and governments and threatens to destroy humanity itself.",
      genres: "Action, Adventure, Horror, Sci-Fi",
    },
    {
      id: 3,
      title: "Fall 2022",
      img: fall,
      description:
        "When a high-rise climb goes wrong, best friends Becky and Hunter find themselves stuck at the top of a 2,000-foot TV tower.",
      genres: "Action, Thriller",
    },
    {
      id: 4,
      title: "Hacksaw Ridge",
      img: hacksawRidge,
      description:
        "World War II American Army Medic Desmond T. Doss, serving during the Battle of Okinawa, refuses to kill people and becomes the first man in American history to receive the Medal of Honor without firing a shot.",
      genres: "Biography, Drama, History, War",
    },
  ];
}
