"use client"

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Power } from "lucide-react";
import { useRouter } from 'next/navigation';
import { getDecodedToken } from "@/utils/tokenUtils";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "@/providers/userContext";

export const DropDown = () => {
  
  const router = useRouter();
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log("user:", user);
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push('/login');
  };

  return (
    <Menu>
      <MenuButton className='transition-transform scale-100 hover:scale-105'>
        <Avatar>
          <AvatarImage
            className="w-[100%] transition-transform scale-100 hover:scale-125"
            src={"https://media.istockphoto.com/id/1490616772/pt/foto/portrait-of-thoughtful-young-man.jpg?s=612x612&w=0&k=20&c=5ZJ_x0IgWkKAKQTu8_GDVIpnn1hxa5v0uZ3Bgl45BrA="}
          />
          <AvatarFallback>Profile</AvatarFallback>
        </Avatar>
      </MenuButton>

      <MenuItems
        transition
        className="relative z-[100000] bg-[#142937] p- rounded-xl origin-top transition duration-300 ease-in-out transform scale-95 opacity-100 mt-3 shadow-lg"
        anchor={{ to: "bottom" }}
      >
        <MenuItem className="flex justify-center items-center gap-1 p-3">
          <button
            onClick={handleLogout}
            className="text-white bg-transparent transition-all duration-200 ease-in-out hover:bg-transparent"
          >
            Logout <Power size={18} />
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};
