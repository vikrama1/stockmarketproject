
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Funds = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Funds</h1>
        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-500">Instant, zero-cost fund transfers with UPI</p>
          <Button className="bg-indigo-600 hover:bg-indigo-700">Add funds</Button>
          <Button variant="outline">Withdraw</Button>
        </div>
      </div>
      
      <h2 className="text-xl font-semibold">Equity</h2>
      
      <Card>
        <CardContent className="p-6">
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
            <div>
              <div className="text-sm text-gray-500">Opening Balance</div>
              <div className="text-lg font-semibold">3736.40</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Payin</div>
              <div className="text-lg font-semibold">4064.00</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">SPAN</div>
              <div className="text-lg font-semibold">0.00</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Delivery margin</div>
              <div className="text-lg font-semibold">0.00</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Funds;
