import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCart from "../../public/images/shoppingC.svg?react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
   "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
   },
}));

export default function CustomizedBadges() {
   const productsInCartCount = useSelector(
      (state) => state.cartProducts.length
   );
   const navigate = useNavigate();
   function handleColorBadgeClick() {
      navigate("/shop/cart");
   }
   return (
      <IconButton aria-label="cart" onClick={handleColorBadgeClick}>
         <StyledBadge
            badgeContent={productsInCartCount}
            color="primary"
         >
            <ShoppingCart />
         </StyledBadge>
      </IconButton>
   );
}
