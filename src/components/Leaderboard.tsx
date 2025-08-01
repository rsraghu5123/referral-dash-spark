import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy,
  Medal,
  Award,
  ArrowLeft,
  Crown,
  TrendingUp,
  Users
} from "lucide-react";

interface LeaderboardProps {
  onBackToDashboard: () => void;
}

const Leaderboard = ({ onBackToDashboard }: LeaderboardProps) => {
  const leaderboardData = [
    { rank: 1, name: "Sarah Chen", amount: 5420, donors: 45, trend: "up", avatar: "SC" },
    { rank: 2, name: "Michael Rodriguez", amount: 4890, donors: 38, trend: "up", avatar: "MR" },
    { rank: 3, name: "Alex Johnson", amount: 2847, donors: 23, trend: "up", avatar: "AJ", isCurrentUser: true },
    { rank: 4, name: "Emma Thompson", amount: 2650, donors: 28, trend: "down", avatar: "ET" },
    { rank: 5, name: "David Kim", amount: 2340, donors: 19, trend: "up", avatar: "DK" },
    { rank: 6, name: "Lisa Park", amount: 2100, donors: 22, trend: "stable", avatar: "LP" },
    { rank: 7, name: "James Wilson", amount: 1950, donors: 16, trend: "up", avatar: "JW" },
    { rank: 8, name: "Maria Garcia", amount: 1820, donors: 15, trend: "down", avatar: "MG" },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Award className="w-5 h-5 text-orange-500" />;
      default:
        return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getTrendIcon = (trend: string) => {
    if (trend === "up") return <TrendingUp className="w-4 h-4 text-success" />;
    if (trend === "down") return <TrendingUp className="w-4 h-4 text-destructive rotate-180" />;
    return <div className="w-4 h-4 bg-muted-foreground rounded-full" />;
  };

  return (
    <div className="min-h-screen bg-gradient-card">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-6">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="secondary" 
            onClick={onBackToDashboard}
            className="bg-white/20 text-white border-white/30 hover:bg-white/30 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold">Global Leaderboard</h1>
          <p className="text-white/80 mt-2">See how you rank against other fundraisers worldwide</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 animate-slide-up">
          {leaderboardData.slice(0, 3).map((user, index) => (
            <Card 
              key={user.rank} 
              className={`shadow-elevation transform transition-all duration-300 hover:scale-105 ${
                user.rank === 1 ? 'md:order-2 bg-gradient-accent text-white border-0' :
                user.rank === 2 ? 'md:order-1' :
                'md:order-3'
              } ${user.isCurrentUser ? 'ring-2 ring-primary ring-offset-2' : ''}`}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-lg font-bold ${
                  user.rank === 1 ? 'bg-white text-accent' : 'bg-primary text-white'
                }`}>
                  {user.avatar}
                </div>
                <div className="mb-3">
                  {getRankIcon(user.rank)}
                </div>
                <h3 className={`font-bold text-lg mb-2 ${user.rank === 1 ? 'text-white' : 'text-foreground'}`}>
                  {user.name}
                  {user.isCurrentUser && (
                    <Badge variant="secondary" className="ml-2 bg-primary/20 text-primary">
                      You
                    </Badge>
                  )}
                </h3>
                <p className={`text-2xl font-bold mb-1 ${user.rank === 1 ? 'text-white' : 'text-foreground'}`}>
                  ${user.amount.toLocaleString()}
                </p>
                <p className={`text-sm flex items-center justify-center ${
                  user.rank === 1 ? 'text-white/80' : 'text-muted-foreground'
                }`}>
                  <Users className="w-4 h-4 mr-1" />
                  {user.donors} donors
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Full Leaderboard */}
        <Card className="shadow-card animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-primary" />
              Complete Rankings
            </CardTitle>
            <CardDescription>
              Rankings update in real-time based on total donations raised
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {leaderboardData.map((user) => (
                <div
                  key={user.rank}
                  className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-200 hover:bg-secondary/50 ${
                    user.isCurrentUser 
                      ? 'bg-primary/5 border-primary/20 ring-1 ring-primary/20' 
                      : 'border-border'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-8 h-8">
                      {getRankIcon(user.rank)}
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                      user.rank <= 3 ? 'bg-primary text-white' : 'bg-secondary text-foreground'
                    }`}>
                      {user.avatar}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-foreground">{user.name}</h4>
                        {user.isCurrentUser && (
                          <Badge variant="secondary" className="bg-primary/20 text-primary text-xs">
                            You
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {user.donors} donors
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    {getTrendIcon(user.trend)}
                    <div className="text-right">
                      <p className="font-bold text-lg text-foreground">
                        ${user.amount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-primary text-white border-0 shadow-elevation mt-6 animate-slide-up">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Want to climb higher? 🚀</h3>
            <p className="text-white/80 mb-4">
              Share your referral link and encourage more donations to boost your ranking!
            </p>
            <Button 
              onClick={onBackToDashboard}
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              View My Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;