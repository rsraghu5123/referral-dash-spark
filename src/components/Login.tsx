import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Mail, Lock } from "lucide-react";

interface LoginProps {
  onLogin: () => void;
  isSignup: boolean;
  onToggleMode: () => void;
}

const Login = ({ onLogin, isSignup, onToggleMode }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-slide-up">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-elevation mb-4">
            <Heart className="w-8 h-8 text-primary fill-current" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">DonateConnect</h1>
          <p className="text-white/80">Make every donation count</p>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm shadow-elevation border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {isSignup ? "Join the Mission" : "Welcome Back"}
            </CardTitle>
            <CardDescription>
              {isSignup 
                ? "Start making a difference today" 
                : "Continue your fundraising journey"
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignup && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Full Name</label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-11"
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-11"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 h-11"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-primary border-0 h-11 text-white font-semibold shadow-elevation hover:shadow-lg transition-all duration-300"
              >
                {isSignup ? "Start Fundraising" : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={onToggleMode}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {isSignup 
                  ? "Already have an account? Sign in" 
                  : "Don't have an account? Sign up"
                }
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;