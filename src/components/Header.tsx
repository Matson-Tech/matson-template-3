import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import useWedding from "@/hooks/useWedding";
import { cn } from "@/lib/utils";
import scrollToElement from "@/utils/scrollToElement";
import LogoutButton from "./ui-custome/LogoutButton";

const Header: React.FC<{ isNotIndexPage?: boolean }> = ({ isNotIndexPage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { weddingData, user, logout } = useWedding();
    const { toast } = useToast();
    const location = useLocation();
    const navigate = useNavigate();
    const { username } = useParams();

    const navItems = [
        { name: "Home", href: "#hero", disabled: false },
        {
            name: "Our Story",
            href: "#story",
            disabled: weddingData.story.disabled,
        },
        {
            name: "Details",
            href: "#details",
            disabled: weddingData.weddingDetails.disabled,
        },
        { name: "Schedule", href: "#schedule", disabled: false },
        { name: "Gallery", href: "#gallery", disabled: false },
        { name: "Wishes", href: "#wishes", disabled: weddingData.wishDisabled },
        {
            name: "Contact",
            href: "#contact",
            disabled: weddingData.contact.disabled,
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > window.innerHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLogout = () => {
        logout();
        setIsOpen(false);
        toast({ title: "You have logged out!" });
    };

    const scrollToSection = useCallback(
        (elementId: string) => {
            if (user?.username && location.pathname !== `/${user.username}`) {
                navigate(`/${user.username}`, {
                    state: { scrollTo: elementId },
                });
                return;
            }
            scrollToElement(elementId);
            setIsOpen(false);
        },
        [user.username, location.pathname, navigate],
    );

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/20 border-b border-white/20 transition-all duration-200 h-auto",
                (!isScrolled || isNotIndexPage) && "bg-transparent",
            )}
        >
            <nav
                className={cn(
                    "container mx-auto px-4 py-4",
                    isOpen && "h-screen",
                )}
            >
                <div className="flex items-center justify-between">
                    <button
                        className={cn(
                            "text-2xl font-bold font-Faculty-Glyphic text-white",
                            (isScrolled || isNotIndexPage) && "text-purple-600",
                        )}
                        onClick={() => scrollToSection("#hero")}
                    >
                        {weddingData.couple.groomName[0]} &{" "}
                        {weddingData.couple.brideName[0]} Wedding
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems
                            .filter((item) => !item.disabled)
                            .map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
                                    type="button"
                                >
                                    {item.name}
                                </button>
                            ))}
                        <LogoutButton
                            handleLogout={handleLogout}
                            className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
                        />
                    </div>

                    {/* Mobile Navigation Button */}
                    <button
                        className="md:hidden p-2 rounded-lg backdrop-blur-sm bg-white/30 border border-white/20"
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    className={cn(
                        "md:hidden mt-4 backdrop-blur-md bg-white/30 rounded-2xl border border-white/20 p-4 transition-opacity duration-200",
                        isOpen
                            ? "translate-x-0 opacity-100"
                            : "translate-x-full opacity-0 -mt-10",
                    )}
                >
                    <div className={cn("space-y-3", !isOpen && "hidden")}>
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-white/20 rounded-lg transition-all duration-200"
                                type="button"
                            >
                                {item.name}
                            </button>
                        ))}
                        <LogoutButton
                            handleLogout={handleLogout}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-white/20 rounded-lg transition-all duration-200"
                        />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
