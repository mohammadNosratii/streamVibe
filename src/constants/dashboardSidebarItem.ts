import DashboardIcon from "../assets/icons/Dashboard";
import SubscriptionIcon from "../assets/icons/Subscription";
import WalletIcon from "../assets/icons/Wallet";
import TicketIcon from "../assets/icons/Ticket";
import CommentIcon from "../assets/icons/Comment";
import EditIcon from "../assets/icons/Edit";
import PaymentIcon from "../assets/icons/Payment";
import { dashboardSidebarItemProps } from "../interfaces/dashboardSidebarItemProps.interface";

export const dashboardSidebarItem: dashboardSidebarItemProps[] = [
  { title: "Dashboard", Icon: DashboardIcon, route: "/dashboard" },
  {
    title: "Subscription",
    Icon: SubscriptionIcon,
    route: "/dashboard/subscription",
  },
  { title: "Wallet", Icon: WalletIcon, route: "/dashboard/wallet" },
  { title: "Tickets", Icon: TicketIcon, route: "/dashboard/tickets" },
  { title: "Comments", Icon: CommentIcon, route: "/dashboard/comments" },
  { title: "Edit Info", Icon: EditIcon, route: "/dashboard/editInfo" },
  { title: "Payments", Icon: PaymentIcon, route: "/dashboard/payments" },
];
