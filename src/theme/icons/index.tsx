import { ReactNode } from "react";
import { APP_ICONS } from "../enums";
import CartIcon from "./cartIcon";
import FilterIcon from "./filterIcon";
import HomeIcon from "./homeIcon";
import SearchIcon from "./searchIcon";
import ShippingIcon from "./shipping";
import UserIcon from "./userIcon";

export const Icons: { name: string; iconComponent: ReactNode }[] = [
  {
    name: APP_ICONS.CART_ICON,
    iconComponent: <CartIcon />,
  },
  {
    name: APP_ICONS.FILTER_ICON,
    iconComponent: <FilterIcon />,
  },
  {
    name: APP_ICONS.HOME_ICON,
    iconComponent: <HomeIcon />,
  },
  {
    name: APP_ICONS.SEARCH_ICON,
    iconComponent: <SearchIcon />,
  },
  {
    name: APP_ICONS.USER_ICON,
    iconComponent: <UserIcon />,
  },
  {
    name: APP_ICONS.SHIPPING_ICON,
    iconComponent: <ShippingIcon />,
  },
];
