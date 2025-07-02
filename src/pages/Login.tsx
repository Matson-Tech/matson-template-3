import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useWedding } from "@/contexts/WeddingContext";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useWedding();
    const { toast } = useToast();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const result = await login(email, password);

            if (result.error) {
                toast({
                    title: "Error",
                    description: result.error.message,
                    variant: "destructive",
                });
            } else {
                toast({
                    title: "Success",
                    description: "Logged in successfully!",
                });
                navigate("/");
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "An unexpected error occurred",
                variant: "destructive",
            });
            console.log("Error logging in:", error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 flex items-center justify-center px-4">
            <div className="backdrop-blur-md bg-white/30 rounded-3xl p-8 border border-white/20 shadow-2xl w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Login
                </h1>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="backdrop-blur-sm bg-white/50"
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="backdrop-blur-sm bg-white/50"
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                    >
                        {isLoading ? "Logging in..." : "Login"}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;
