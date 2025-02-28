import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { SheetDemo } from "./Sidebar";
import Image from "next/image";

export function Navbar() {
  return (
    <>
      <Menubar className="sm:flex justify-center items-center max-w-fit fixed top-10 inset-x-0 mx-auto min-w-min p-6 hidden">
        <MenubarMenu>
          <MenubarTrigger>
            <Link href={"features"}>Features</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link href={"pricing"}>Pricing</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <Link href={"/"}>
            <MenubarTrigger className="text-primary font-bold italic focus:bg-transparent hover:bg-transparent focus:text-accent-foreground data-[state=open]:bg-transparent data-[state=open]:text-accent-foreground">
              <Image src={"/logo.png"} alt="logo" width={150} height={150} />
            </MenubarTrigger>
          </Link>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>
            <Link href={"profile"}>Profile</Link>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="benoit">
              <MenubarRadioItem value="andy">test@gmail.com</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Name</MenubarRadioItem>
              <MenubarSeparator />
              <MenubarRadioItem value="Luis">Logout</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Login</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <nav className="flex sm:hidden justify-end">
        <SheetDemo />
      </nav>
    </>
  );
}
