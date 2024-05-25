import Link from "next/link";
import { signIn, signOut } from "@/actions";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
} from "@nextui-org/react";
import HeaderAuth from "./header-auth";

const Header = () => {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Menter
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
