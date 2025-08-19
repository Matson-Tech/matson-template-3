import useWedding from "@/hooks/useWedding";

interface LogoutButtonProps {
    handleLogout: () => void | Promise<void>;
    className?: string;
}
const LogoutButton: React.FC<LogoutButtonProps> = ({
    handleLogout,
    className,
}) => {
    const { isLoggedIn } = useWedding();

    if (!isLoggedIn) {
        return;
    }
    return (
        <button
            key={"logoutButton"}
            onClick={handleLogout}
            className={className}
            type="button"
        >
            Logout
        </button>
    );
};

export default LogoutButton;
