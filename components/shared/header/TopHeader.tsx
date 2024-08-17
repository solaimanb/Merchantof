import { Container } from "@/components/Container";
import SearchBar from "@/components/SearchBar";
import { Facebook, Instagram, MessageCircleIcon } from "lucide-react";
import Link from "next/link";

const TopHeader = () => {
  return (
    <Container>
      <section className="flex justify-between items-center py-4">
        <div>
          <Link href="/" className="font-bold text-2xl">
            MerchantOF
          </Link>
        </div>

        <div>
          <SearchBar />
        </div>

        <div>
          <nav className="text-sm">
            <ul className="flex items-center gap-6 lg:gap-8">
              <li>About us</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>Help & Support</li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/">
            <Instagram size={18} />
          </Link>
          <Link href="/">
            <Facebook size={18} />
          </Link>
          <Link href="/">
            <MessageCircleIcon size={18} />
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default TopHeader;
