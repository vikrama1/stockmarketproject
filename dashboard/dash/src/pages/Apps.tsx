
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Apps = () => {
  const appsList = [
    { 
      title: "Trading View", 
      description: "Advanced charting platform",
      icon: "📊"
    },
    { 
      title: "Screener", 
      description: "Stock screening tool",
      icon: "🔍"
    },
    { 
      title: "Portfolio Analyzer", 
      description: "Track and analyze your investments",
      icon: "📈"
    },
    { 
      title: "Market News", 
      description: "Latest market updates and news",
      icon: "📰"
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Apps</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appsList.map((app, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="text-2xl">{app.icon}</div>
                <CardTitle>{app.title}</CardTitle>
              </div>
              <CardDescription>{app.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" className="w-full">Open App</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Apps;
