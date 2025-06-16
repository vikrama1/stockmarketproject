
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Holdings = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Holdings (0)</h1>
      
      <Card>
        <CardHeader>
          <div className="grid grid-cols-7 gap-4 text-sm font-medium">
            <div>Instrument</div>
            <div>Qty.</div>
            <div>Avg. cost</div>
            <div>LTP</div>
            <div>Cur. val</div>
            <div>P&L</div>
            <div>Day chg.</div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Empty state */}
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Total investment</h3>
          <div className="text-3xl font-bold">29,875.55</div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Current value</h3>
          <div className="text-3xl font-bold">31,428.95</div>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>P&L</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-green-500">1,553.40 (+5.20%)</div>
          
          <h3 className="text-lg font-semibold mt-6 mb-2">Holdings</h3>
          <div className="h-40 border rounded-md flex items-center justify-center">
            <p className="text-gray-400">No holdings data to display</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Holdings;
