import { useState } from "react";
import Login from "@/components/Login";
import Dashboard from "@/components/Dashboard";
import Leaderboard from "@/components/Leaderboard";

type AppState = "login" | "dashboard" | "leaderboard";

const Index = () => {
  const [currentView, setCurrentView] = useState<AppState>("login");
  const [isSignup, setIsSignup] = useState(false);

  const handleLogin = () => {
    setCurrentView("dashboard");
  };

  const handleLogout = () => {
    setCurrentView("login");
    setIsSignup(false);
  };

  const handleViewLeaderboard = () => {
    setCurrentView("leaderboard");
  };

  const handleBackToDashboard = () => {
    setCurrentView("dashboard");
  };

  const toggleLoginMode = () => {
    setIsSignup(!isSignup);
  };

  if (currentView === "login") {
    return (
      <Login 
        onLogin={handleLogin} 
        isSignup={isSignup}
        onToggleMode={toggleLoginMode}
      />
    );
  }

  if (currentView === "leaderboard") {
    return (
      <Leaderboard onBackToDashboard={handleBackToDashboard} />
    );
  }

  return (
    <Dashboard 
      onLogout={handleLogout} 
      onViewLeaderboard={handleViewLeaderboard}
    />
  );
};

export default Index;