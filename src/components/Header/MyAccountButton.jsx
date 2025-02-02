import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Divider, IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItemBase from "@mui/material/MenuItem";

import { deleteCookie, getCookie } from "../../JavaScript/Cookies";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import UserIcon from "../../../public/images/user.svg?react";
import ShoppingBagIcon from "../../../public/images/shopping-bag.svg?react";
import HelpIcon from "../../../public/images/help.svg?react";
import LogoutIcon from "../../../public/images/Logout-black.svg?react";

import { styled } from "@mui/system";

const MenuItem = styled(MenuItemBase)(
   ({ theme }) => `
   display: flex;
   gap: 1rem;
   padding-left: 1rem;
   font-family: "Cera Pro";
`
);

export default function MyAccountButton() {
   const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);
   const navigate = useNavigate();
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };
   function handleMenuItemClick(index) {
      handleClose();
      if (index == 0) {
         navigate("/profile");
      } else if (index == 1) {
         navigate("/profile/orders");
      } else if (index == 2) {
         navigate("/profile/support");
      } else if (index == 3) {
         deleteCookie("userInfo");
         navigate("/");
      }
   }

   const [username, email] = getCookie("userInfo").split("|Divider|");

   return (
      <div>
         <IconButton
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            variant="contained"
            size="large"
            sx={{
               display: "flex",
               flexDirection: "column",
               position: "relative",
            }}
         >
            <AccountCircleIcon fontSize="large" />
            <span className="text-[12px] absolute bottom-[-1.6px]">
               {username}
            </span>
         </IconButton>
         <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
               vertical: "bottom",
               horizontal: "left",
            }}
            transformOrigin={{
               vertical: "top",
               horizontal: "left",
            }}
         >
            <MenuItem onClick={() => handleMenuItemClick(0)}>
               <UserIcon className="w-[11px] h-[11px]" />
               <span>Profile</span>
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick(1)}>
               <ShoppingBagIcon className="w-[11px] h-[11px]" />
               My orders
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick(2)}>
               <HelpIcon className="w-[11px] h-[11px]" />
               Support
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => handleMenuItemClick(3)}>
               <LogoutIcon className="w-[11px] h-[11px] *:stroke-black" />
               Logout
            </MenuItem>
         </Menu>
      </div>
   );
}
