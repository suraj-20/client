import React, { Fragment, useState } from 'react';
import { Backdrop, SpeedDial, SpeedDialAction } from "@mui/material";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdPerson, MdExitToApp } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdAirplaneTicket } from "react-icons/md";
import './UserOption.css'





const UserOption = ({ user = {},cartItems}) => {

  const [open, setOpen] = useState(false);



  const options = [
    { icon: <MdAirplaneTicket />, name: "Bookings", func: orders },
    { icon: <MdPerson />, name: "Profile", func: account },
    {icon: (<FaShoppingCart/>),
      name: `3`,
      func: cart,
    },
    { icon: <MdExitToApp />, name: "Logout", func: logoutUser },
  
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <LuLayoutDashboard />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function logoutUser() {
    
    
  }

   function dashboard() {
    
  }

  function orders() {
   
  }
  function account() {
    
  }
  function cart() {
   
  }


  return (
    <Fragment>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11" }}
        open={open}
        direction="down"
        className="speedDial"
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar?.url ? user.avatar.url : "https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"}
            alt="Profile"
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
};

export default UserOption;

