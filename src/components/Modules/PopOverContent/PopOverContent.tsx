import { Avatar, Button, Chip, Divider, User } from "@nextui-org/react";
import profile from "../../../assets/images/joker.webp";
import SignOut from "../../../assets/icons/SignOut";
import SearchForm from "../SearchInput/SearchForm";
import joker from "../../../assets/images/joker.webp";
import roadHouse from "../../../assets/images/road-house.webp";
import granTurismo from "../../../assets/images/granTurismo.webp";
import { Link } from "@tanstack/react-router";
import { useLogoutApi } from "../../../hooks/api/useAuthApi";

const UserPopOverContent = () => {
  const { mutate, isPending } = useLogoutApi()
  const signoutUserHandler = () => {
    mutate()
  };
  return (
    <div className="w-48">
      <User
        name="Mohammad Nosrati"
        description="Premium"
        avatarProps={{
          src: profile,
        }}
        classNames={{
          description: ["text-red-45"],
        }}
      />
      <Divider className="my-2" />
      <ul className="w-full child:transition-all child:duration-200 child:block child-hover:bg-mainLight dark:child-hover:bg-black-30 child:p-2 child:rounded-lg child:cursor-pointer">
        <Link to="/dashboard">
          <li>Profile</li>
        </Link>
        <Link to="/dashboard/subscription">
          <li>
            Subscription
          </li>
        </Link>
        <Link to="/dashboard/wallet">
          <li>
            Wallet
          </li>
        </Link>
        <Link to="/dashboard/tickets">
          <li>
            Ticket
          </li>
        </Link>
      </ul>
      <Divider className="my-2" />
      <Button
        onClick={signoutUserHandler}
        isLoading={isPending}
        className="flex items-center justify-between gap-2 bg-transparent hover:text-white hover:bg-red-45 translate-x-0 duration-200 w-full p-2 cursor-pointer rounded-lg"
      >
        <span>Sign out</span>
        <SignOut />
      </Button>
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
