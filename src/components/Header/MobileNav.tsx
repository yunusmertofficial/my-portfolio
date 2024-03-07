import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { AlignJustify } from "lucide-react";

import Nav from "./Nav";
import Logo from "./Logo";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>content</SheetContent>
    </Sheet>
  );
};

export default MobileNav;
