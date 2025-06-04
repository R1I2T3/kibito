import { useState, useEffect } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { authClient } from "@/lib/auth-client";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const authData = authClient.useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  console.log("authData", authData);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Sparkles className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Kibito
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="font-medium hover:text-primary transition-colors duration-300"
          >
            Home
          </Link>
          <a
            href="#features"
            className="font-medium hover:text-primary transition-colors duration-300"
          >
            Features
          </a>
          <Link
            to="/dashboard"
            className="font-medium hover:text-primary transition-colors duration-300"
          >
            Dashboard
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          {authData.data?.user.email ? (
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 shadow-md hover:shadow-lg transition-all duration-300"
              onClick={async () => {
                await authClient.signOut().then(() => {
                  navigate({
                    to: "/login",
                    replace: true,
                  });
                });
              }}
            >
              Logout
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              className="border-primary/20 hover:bg-primary/5"
              onClick={() => {
                navigate({
                  to: "/login",
                  replace: true,
                });
              }}
            >
              Log In
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="hover:bg-primary/5"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b animate-in fade-in slide-in-from-top-5">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <a
              href="/"
              className="py-2 font-medium hover:text-primary transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#features"
              className="py-2 font-medium hover:text-primary transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="py-2 font-medium hover:text-primary transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </a>
            <a
              href="#about"
              className="py-2 font-medium hover:text-primary transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <div className="flex flex-col gap-3 pt-4 border-t">
              <Button
                variant="outline"
                className="border-primary/20 hover:bg-primary/5"
              >
                Log In
              </Button>
              <Button className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
