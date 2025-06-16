import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const Dashboard = () => {
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Hi, User!</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Equity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold mb-4">3.74k</div>
            
            <div className="grid grid-cols-2 gap-y-3">
              <div className="text-sm text-gray-600">Margins used</div>
              <div className="text-sm font-medium text-right">0</div>
              
              <div className="text-sm text-gray-600">Opening balance</div>
              <div className="text-sm font-medium text-right">3.74k</div>
            </div>
            
            <div className="mt-6">
              <div className="text-sm text-gray-600 mb-1">Margin available</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{
                width: "100%"
              }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Equity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-y-4">
              <div>
                <div className="text-sm text-gray-500">Available margin</div>
                <div className="text-lg font-semibold">4,043.10</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Used margin</div>
                <div className="text-lg font-semibold">3,757.30</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Available cash</div>
                <div className="text-lg font-semibold">4,043.10</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Opening Balance</div>
                <div className="text-lg font-semibold">4,043.10</div>
              </div>
              <div className="col-span-2 pt-3 border-t">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500"></div>
                  
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Holdings (13)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-7 gap-4 p-3 bg-gray-50 border-b text-sm font-medium">
              <div>Instrument</div>
              <div>Qty.</div>
              <div>Avg. cost</div>
              <div>LTP</div>
              <div>Cur. val</div>
              <div>P&L</div>
              <div>Day chg.</div>
            </div>
            <div className="p-4 text-center text-gray-500">
              Your holdings data will appear here
            </div>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default Dashboard;