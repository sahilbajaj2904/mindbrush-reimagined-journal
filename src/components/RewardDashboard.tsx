
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, Check, Star } from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Legend 
} from "recharts";
import { useIsMobile } from "@/hooks/use-mobile";

const RewardDashboard = () => {
  const isMobile = useIsMobile();

  // Mock data for line chart showing points over time
  const progressData = [
    { day: "Day 1", points: 5 },
    { day: "Day 3", points: 12 },
    { day: "Day 7", points: 20 },
    { day: "Day 14", points: 45 },
    { day: "Day 21", points: 68 },
    { day: "Day 30", points: 95 },
    { day: "Day 45", points: 140 },
    { day: "Day 60", points: 180 },
  ];

  // Mock data for points distribution (where points come from)
  const pointsDistribution = [
    { name: "Journal Entries", value: 45, color: "#9b87f5" },
    { name: "Games Completed", value: 30, color: "#F97316" },
    { name: "Card Activities", value: 25, color: "#0EA5E9" },
  ];

  // Mock data for recent activities
  const recentActivities = [
    {
      activity: "Completed 'Identify Your Emotions' game",
      date: "2 hours ago",
      points: 10,
    },
    {
      activity: "Filled daily journal entry",
      date: "Yesterday",
      points: 5,
    },
    {
      activity: "Completed 3 emotion cards",
      date: "2 days ago",
      points: 15,
    },
    {
      activity: "Achieved 'Consistent Journaling' badge",
      date: "1 week ago",
      points: 20,
    },
  ];

  // Mock data for upcoming milestones
  const upcomingMilestones = [
    {
      milestone: "Silver Tier",
      pointsNeeded: 150,
      currentPoints: 95,
    },
    {
      milestone: "Emotion Master Badge",
      pointsNeeded: 200,
      currentPoints: 95,
    },
  ];

  // Calculate current points and tier information
  const currentPoints = 95;
  const maxPoints = 500;
  const percentProgress = (currentPoints / maxPoints) * 100;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Current Points</CardDescription>
            <CardTitle className="text-3xl font-bold">{currentPoints}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              <span className="text-dearme-primary font-medium">{percentProgress.toFixed(0)}%</span> to next tier
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Current Tier</CardDescription>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-600" />
              Bronze
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              <span className="text-dearme-primary font-medium">55</span> more points to Silver
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Activities Completed</CardDescription>
            <CardTitle className="text-3xl font-bold">23</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              <span className="text-dearme-primary font-medium">+8</span> from last month
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Badges Earned</CardDescription>
            <CardTitle className="text-3xl font-bold">4</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              <Award className="h-4 w-4 text-dearme-primary inline mr-1" />
              <span>Latest: Consistent Journaling</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Points Progress</CardTitle>
            <CardDescription>Track your points growth over time</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={progressData}
                  margin={{ 
                    top: 10, 
                    right: isMobile ? 10 : 30, 
                    left: isMobile ? -20 : 0, 
                    bottom: 0 
                  }}
                >
                  <defs>
                    <linearGradient id="colorPoints" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#9b87f5" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="day" 
                    tick={{ fontSize: 12 }} 
                    padding={{ left: 10, right: 10 }}
                    tickMargin={8}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    width={40}
                    tickMargin={8}
                  />
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: "white", 
                      borderRadius: "8px", 
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      border: "1px solid #f0f0f0"
                    }}
                    labelStyle={{ fontWeight: "bold", marginBottom: "4px" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="points"
                    stroke="#9b87f5"
                    fillOpacity={1}
                    fill="url(#colorPoints)"
                    name="Points"
                    activeDot={{ r: 6 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Points Distribution</CardTitle>
            <CardDescription>How you're earning your points</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                  <Pie
                    data={pointsDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={isMobile ? 60 : 80}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                  >
                    {pointsDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value} points`} />
                  <Legend 
                    layout="vertical" 
                    verticalAlign="middle" 
                    align={isMobile ? "center" : "right"}
                    iconSize={10}
                    iconType="circle"
                    wrapperStyle={{ 
                      paddingLeft: isMobile ? 0 : 20,
                      paddingTop: isMobile ? 20 : 0,
                      position: isMobile ? "relative" : "absolute", 
                      right: isMobile ? 0 : 10,
                      top: isMobile ? 0 : "50%",
                      transform: isMobile ? "none" : "translateY(-50%)"
                    }}
                    payload={pointsDistribution.map(item => ({
                      value: item.name,
                      type: 'circle',
                      id: item.name,
                      color: item.color,
                    }))}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Your latest completed emotional wellness tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Activity</TableHead>
                  <TableHead className="w-[100px] text-right">Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentActivities.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="font-medium">{item.activity}</div>
                      <div className="text-sm text-muted-foreground">{item.date}</div>
                    </TableCell>
                    <TableCell className="text-right font-medium">+{item.points}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Milestones</CardTitle>
            <CardDescription>Next achievements to aim for</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {upcomingMilestones.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{item.milestone}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.currentPoints}/{item.pointsNeeded} points
                    </div>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-dearme-primary rounded-full"
                      style={{ width: `${(item.currentPoints / item.pointsNeeded) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 border border-dearme-primary/20 rounded-lg bg-dearme-light/20">
              <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-1.5">
                <Check className="h-4 w-4 text-dearme-primary" />
                Parent Tip
              </h4>
              <p className="text-sm text-muted-foreground">
                Set custom rewards for your child when they reach these milestones to encourage their emotional growth journey.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RewardDashboard;
