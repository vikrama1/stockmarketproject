
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Positions = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Positions</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Current Positions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <p className="text-gray-500">You don't have any open positions</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Position History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4 text-sm font-medium py-2 border-b">
            <div>Instrument</div>
            <div>Type</div>
            <div>Quantity</div>
            <div>Entry Price</div>
            <div>P&L</div>
          </div>
          <div className="py-8 text-center text-gray-500">
            No position history to display
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Positions;
