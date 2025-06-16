
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface Stock {
  name: string;
  price: number;
  change: number;
  direction: "up" | "down";
}

interface StockListProps {
  stocks: Stock[];
}

const StockList: React.FC<StockListProps> = ({ stocks }) => {
  const [selectedStock, setSelectedStock] = useState<string | null>(null);

  const handleStockClick = (stockName: string) => {
    setSelectedStock(selectedStock === stockName ? null : stockName);
  };

  return (
    <div className="flex-1">
      {stocks.length === 0 ? (
        <div className="py-20 text-center text-gray-500">
          No stocks found
        </div>
      ) : (
        stocks.map((stock) => (
          <div key={stock.name} className="flex flex-col">
            <div 
              onClick={() => handleStockClick(stock.name)}
              className="px-4 py-3 flex items-center justify-between hover:bg-sidebar-accent transition-colors duration-150 cursor-pointer"
            >
              <span 
                className={`font-medium ${
                  stock.name === "KPITECH" ? "text-kpitech" :
                  stock.name === "QUICKHEAL" ? "text-quickheal" :
                  stock.name === "WIPRO" ? "text-wipro" :
                  stock.name === "M&M" ? "text-mnm" :
                  stock.name === "RELIANCE" ? "text-reliance" :
                  stock.name === "HUL" ? "text-hul" : 
                  "text-gray-700"
                }`}
              >
                {stock.name}
              </span>
              
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-end">
                  <span className="font-medium">{stock.price}</span>
                  <div className="flex items-center">
                    <span 
                      className={`text-xs ${stock.direction === "up" ? "text-green-600" : "text-red-600"}`}
                    >
                      {stock.direction === "up" ? "+" : ""}{stock.change}%
                    </span>
                    <span 
                      className={`ml-1 ${stock.direction === "up" ? "text-green-600" : "text-red-600"}`}
                    >
                      {stock.direction === "up" ? "▲" : "▼"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {selectedStock === stock.name && (
              <div className="px-4 py-2 flex gap-2 bg-sidebar-accent/30">
                <Button 
                  size="sm" 
                  className="flex-1 bg-blue-500 hover:bg-blue-600 transition-all duration-200 shadow-sm"
                >
                  Buy
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 bg-red-500 hover:bg-red-600 transition-all duration-200 shadow-sm"
                >
                  Sell
                </Button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default StockList;
