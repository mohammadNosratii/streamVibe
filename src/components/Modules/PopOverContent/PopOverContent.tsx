import { Avatar, Chip, Divider } from "@nextui-org/react";
import profile from "../../../assets/images/joker.webp";
import SignOut from "../../../assets/icons/SignOut";
import SearchForm from "../SearchInput/SearchForm";
import joker from "../../../assets/images/joker.webp";
import roadHouse from "../../../assets/images/road-house.avif";
import granTurismo from "../../../assets/images/granTurismo.jpg";

const UserPopOverContent = () => {
  return (
    <div className="w-48">
      <div className="w-full flex items-center gap-2 px-2">
        <img
          className="rounded-full object-cover w-8 h-8"
          src={profile}
          alt=""
        />
        <div>
          <h3>joker</h3>
          <span className="text-orange-400">Premium user</span>
        </div>
      </div>
      <Divider className="my-2" />
      <ul className="w-full child:transition-all child:duration-200 child-hover:bg-black-30 child:p-2 child:rounded-lg child:cursor-pointer">
        <li>
          <a href="">Subscription</a>
        </li>
        <li>
          <a href="">Wallet</a>
        </li>
        <li>
          <a href="">Ticket</a>
        </li>
        <li>
          <a href="">Favorite list</a>
        </li>
        <li>
          <a href="">Edit Profile</a>
        </li>
      </ul>
      <Divider className="my-2" />
      <div className="flex items-center justify-between gap-2 hover:bg-red-45 translate-x-0 duration-200 w-full p-2 cursor-pointer rounded-lg">
        <span>Sign out</span>
        <SignOut />
      </div>
    </div>
  );
};

const SerachPopOverContent = () => {
  return (
    <div className="space-y-4 w-64">
      <SearchForm />
      <div className="flex items-center gap-4 flex-wrap">
        <Chip variant="flat" avatar={<Avatar src={joker} />}>
          Joker 2019
        </Chip>
        <Chip variant="flat" avatar={<Avatar src={roadHouse} />}>
          Road House
        </Chip>
        <Chip variant="flat" avatar={<Avatar src={granTurismo} />}>
          Gran Turismo
        </Chip>
      </div>
    </div>
  );
};

export { UserPopOverContent, SerachPopOverContent };
