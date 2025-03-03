import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { AlignLeft } from "lucide-react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignLeft className="w-10 h-10 fixed mx-2 my-2" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-primary font-bold italic hover:text-black">
            DMpilot
          </SheetTitle>
        </SheetHeader>
        <Menubar className="flex flex-col h-full justify-center items-center gap-4 border-none">
          <MenubarMenu>
            <Link href={"features"}>
              <SheetClose asChild>
                <MenubarTrigger className="focus:bg-transparent focus:text-inherit">
                  Features
                </MenubarTrigger>
              </SheetClose>
            </Link>
          </MenubarMenu>
          <MenubarMenu>
            <Link href={"pricing"}>
              <SheetClose asChild>
                <MenubarTrigger className="">Pricing</MenubarTrigger>
              </SheetClose>
            </Link>
          </MenubarMenu>

          <MenubarMenu>
            {" "}
            <SignedOut>
              <div className="flex flex-col gap-4">
                <SignInButton />
                <SignUpButton />
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </MenubarMenu>
        </Menubar>
      </SheetContent>
    </Sheet>
  );
}
