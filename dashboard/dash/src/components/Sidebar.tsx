
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import StockList from "@/components/StockList";
import StockChart from "@/components/StockChart";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Define stock data with proper typing
  const stocks = [
    { name: "KPITECH", price: 266.45, change: 3.54, direction: "up" as const },
    { name: "QUICKHEAL", price: 308.55, change: -0.15, direction: "down" as const },
    { name: "WIPRO", price: 577.75, change: 0.32, direction: "up" as const },
    { name: "M&M", price: 779.8, change: -0.01, direction: "down" as const },
    { name: "RELIANCE", price: 212.4, change: 1.44, direction: "up" as const },
    { name: "HUL", price: 512.4, change: 1.04, direction: "up" as const },
  ];

  // Define market indices data
  const marketIndices = [
    { name: "NIFTY 50", value: "22,217.80", change: "+0.54%", direction: "up" as const },
    { name: "SENSEX", value: "73,128.12", change: "+0.62%", direction: "up" as const },
  ];

  // Filter stocks based on search query
  const filteredStocks = stocks.filter(stock => 
    stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Prepare chart data
  const chartData = [
    { name: "INFY", value: 20, color: "#f87171" },
    { name: "ONGC", value: 15, color: "#60a5fa" },
    { name: "TCS", value: 25, color: "#facc15" },
    { name: "KPITECH", value: 10, color: "#4ade80" },
    { name: "QUICKHEAL", value: 5, color: "#e879f9" },
    { name: "WIPRO", value: 12, color: "#fb923c" },
    { name: "M&M", value: 13, color: "#f87171" }
  ];

  if (!isOpen) {
    return null;
  }

  return (
    <div className="w-72 border-r bg-sidebar overflow-y-auto flex flex-col">
      {/* Market Indices Section */}
      <div className="p-3 border-b border-sidebar-border">
        <div className="grid grid-cols-2 gap-2">
          {marketIndices.map((index) => (
            <div key={index.name} className="bg-sidebar-accent/50 rounded-md p-2">
              <div className="text-xs text-muted-foreground">{index.name}</div>
              <div className="flex items-center justify-between">
                <span className="font-medium">{index.value}</span>
                <span className={`text-xs ${index.direction === "up" ? "text-emerald-500" : "text-red-500"}`}>
                  {index.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search stocks..."
            className="pl-8 bg-sidebar-accent border-sidebar-border"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <StockList stocks={filteredStocks} />
      
      <div className="mt-auto p-4">
        <StockChart data={chartData} />
      </div>
    </div>
  );
};

export default Sidebar;
