import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  Trophy, 
  Share2, 
  Copy, 
  Target,
  TrendingUp,
  Gift,
  Star
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DashboardProps {
  onLogout: () => void;
  onViewLeaderboard: () => void;
}

const Dashboard = ({ onLogout, onViewLeaderboard }: DashboardProps) => {
  const { toast } = useToast();
  const [userData, setUserData] = useState({
    name: "Alex Johnson",
    referralCode: "alex2025",
    totalRaised: 2847,
    goal: 5000,
    donors: 23,
    rank: 3
  });

  const progress = (userData.totalRaised / userData.goal) * 100;

  const rewards = [
    { id: 1, name: "First Donation", icon: Heart, unlocked: true, type: "bronze" },
    { id: 2, name: "Team Player", icon: Users, unlocked: true, type: "silver" },
    { id: 3, name: "Top Fundraiser", icon: Trophy, unlocked: false, type: "gold" },
    { id: 4, name: "Goal Crusher", icon: Target, unlocked: false, type: "gold" }
  ];

  const copyReferralCode = () => {
    navigator.clipboard.writeText(`DonateConnect.com/donate/${userData.referralCode}`);
    toast({
      title: "Referral link copied!",
      description: "Share this link to get donations credited to your account",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-card">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Heart className="w-8 h-8 fill-current" />
            <h1 className="text-2xl font-bold">DonateConnect</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="secondary" 
              onClick={onViewLeaderboard}
              className="bg-white/20 text-white border-white/30 hover:bg-white/30"
            >
              <Trophy className="w-4 h-4 mr-2" />
              Leaderboard
            </Button>
            <Button 
              variant="secondary" 
              onClick={onLogout}
              className="bg-white/20 text-white border-white/30 hover:bg-white/30"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 space-y-6">
        {/* Welcome Section */}
        <div className="text-center animate-slide-up">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {userData.name}! 🎉
          </h2>
          <p className="text-muted-foreground">
            You're making an incredible difference. Keep up the amazing work!
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-slide-up">
          <Card className="bg-gradient-success text-white border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm">Total Raised</p>
                  <p className="text-2xl font-bold">${userData.totalRaised.toLocaleString()}</p>
                </div>
                <Heart className="w-8 h-8 fill-current" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Donors</p>
                  <p className="text-2xl font-bold text-foreground">{userData.donors}</p>
                </div>
                <Users className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Global Rank</p>
                  <p className="text-2xl font-bold text-foreground">#{userData.rank}</p>
                </div>
                <Trophy className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Progress</p>
                  <p className="text-2xl font-bold text-foreground">{Math.round(progress)}%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Progress Section */}
          <Card className="shadow-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-primary" />
                Fundraising Progress
              </CardTitle>
              <CardDescription>
                You're {Math.round(progress)}% of the way to your ${userData.goal.toLocaleString()} goal!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Current: ${userData.totalRaised.toLocaleString()}</span>
                  <span className="text-muted-foreground">Goal: ${userData.goal.toLocaleString()}</span>
                </div>
                <Progress value={progress} className="h-3" />
              </div>
              <div className="p-4 bg-donation-bg rounded-lg">
                <p className="text-sm text-foreground">
                  <strong>${(userData.goal - userData.totalRaised).toLocaleString()}</strong> left to reach your goal!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Referral Code Section */}
          <Card className="shadow-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Share2 className="w-5 h-5 mr-2 text-primary" />
                Your Referral Link
              </CardTitle>
              <CardDescription>
                Share this link to get donations credited to your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-secondary rounded-lg border-2 border-dashed border-primary/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-sm text-foreground">
                      DonateConnect.com/donate/{userData.referralCode}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Code: {userData.referralCode}
                    </p>
                  </div>
                  <Button 
                    onClick={copyReferralCode} 
                    size="sm"
                    className="bg-gradient-primary text-white border-0"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Every donation through your link helps you climb the leaderboard! 🚀
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Rewards Section */}
        <Card className="shadow-card animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Gift className="w-5 h-5 mr-2 text-primary" />
              Your Achievements
            </CardTitle>
            <CardDescription>
              Unlock rewards as you reach new fundraising milestones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {rewards.map((reward) => (
                <div
                  key={reward.id}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                    reward.unlocked
                      ? 'border-success bg-success/10'
                      : 'border-muted bg-muted/50'
                  }`}
                >
                  <div className="text-center space-y-2">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${
                      reward.unlocked
                        ? reward.type === 'gold' 
                          ? 'bg-reward-gold text-white'
                          : reward.type === 'silver'
                          ? 'bg-reward-silver text-white'
                          : 'bg-reward-bronze text-white'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      <reward.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-sm">{reward.name}</h4>
                    {reward.unlocked && (
                      <Badge variant="secondary" className="bg-success/20 text-success border-success/20">
                        <Star className="w-3 h-3 mr-1" />
                        Unlocked
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;