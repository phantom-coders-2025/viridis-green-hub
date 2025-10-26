// src/pages/SignUp.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bgImage from "@/assets/hero-hospital.jpg"; 

export const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add real sign-up logic here (e.g., Firebase auth)
    navigate("/dashboard"); // redirect to dashboard after successful signup
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img src={bgImage} alt="Eco background" className="w-full h-full object-cover brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-emerald-900/40 to-black/70" />
      </div>

      {/* Sign-up Card */}
      <Card className="w-full max-w-md bg-card/90 border-border/40 backdrop-blur-xl shadow-xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-3">
            <Leaf className="w-8 h-8 text-emerald-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">
            Create your <span className="text-emerald-500">Viridis</span> account
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Start your sustainability journey today 🌱
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSignUp} className="space-y-4">
            <Input type="text" placeholder="Full Name" required />
            <Input type="email" placeholder="Email address" required />
            <Input type="password" placeholder="Password" required />
            <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
              Sign Up
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/signin")}
                className="text-emerald-400 hover:underline"
              >
                Sign In
              </button>
            </p>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};
