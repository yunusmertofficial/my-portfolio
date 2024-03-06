import ThemeToggler from "../ThemeToggler";
import Head from "./Head";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  return (
    <Head>
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 bottom-0 h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </Head>
  );
};

export default Header;
