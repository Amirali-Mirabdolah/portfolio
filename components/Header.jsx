import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Luce <span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Why me?</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
