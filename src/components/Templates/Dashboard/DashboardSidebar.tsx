import { Avatar } from "@nextui-org/react";
import dune from "../../../assets/images/dune-part2.webp";
import { dashboardSidebarItem } from "../../../constants/dashboardSidebarItem";
import { Link } from "@tanstack/react-router";
import { useGetUserInfoApi } from "../../../hooks/api/useUserApi";

export default function DashboardSidebar() {
  const { data } = useGetUserInfoApi();

  return (
    <div className="bg-white h-full dark:bg-black-6 border-2 dark:border-black-15 rounded-xl py-8 px-5 space-y-8 md:w-max xl:w-full">
      <div className="flex flex-col items-center gap-3 px-5">
        <Avatar size="lg" isBordered src={dune} />
        <div className="text-center">
          <h2 className="text-xl font-manropeSemiBold">Welcome Back</h2>
          <span className="text-base font-manropeRegular text-red-45">
            {data?.username}
          </span>
        </div>
      </div>
      <ul className="space-y-3 child:text-base">
        {dashboardSidebarItem.map((item, index) => (
          <Link
            className={`flex transition-all duration-250 p-2 rounded-lg cursor-pointer ${
              window.location.pathname === item.route
                ? "bg-red-45 dark:bg-red-45/80 text-white"
                : "hover:bg-gray-85 dark:hover:bg-black-12"
            }`}
            key={index}
            to={item.route}
          >
            <li className={`flex items-center gap-2`}>
              <item.Icon />
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
