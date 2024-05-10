import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  User,
  Divider,
} from "@nextui-org/react";
import profile from "../../../assets/images/joker.webp";
import SignOut from "../../../assets/icons/SignOut";

export default function PopOver() {
  return (
    <Popover backdrop="blur" showArrow placement="bottom">
      <PopoverTrigger>
        <User
          name=""
          className="transition-transform cursor-pointer"
          avatarProps={{}}
        />
      </PopoverTrigger>
      <PopoverContent className="py-3 w-48 flex flex-col items-start">
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
      </PopoverContent>
    </Popover>
  );
}
