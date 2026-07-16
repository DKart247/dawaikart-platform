import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const expiryMedicines = [
  {
    name: "Paracetamol 500mg",
    batch: "PCM2401",
    expiry: "15 Aug 2026",
    quantity: 120,
    status: "Expires in 30 days",
    color: "bg-red-100 text-red-700",
  },
  {
    name: "Azithromycin 250mg",
    batch: "AZM2310",
    expiry: "05 Sep 2026",
    quantity: 75,
    status: "Expires in 60 days",
    color: "bg-orange-100 text-orange-700",
  },
  {
    name: "Vitamin D3 60000 IU",
    batch: "VD3201",
    expiry: "10 Oct 2026",
    quantity: 45,
    status: "Expires in 90 days",
    color: "bg-yellow-100 text-yellow-700",
  },
];

export default function ExpiryAlerts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>⚠️ Expiry Medicine Alerts</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {expiryMedicines.map((medicine) => (
            <div
              key={medicine.batch}
              className="rounded-lg border p-4 hover:bg-gray-50 transition"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">
                    {medicine.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Batch No: {medicine.batch}
                  </p>

                  <p className="text-sm text-gray-500">
                    Expiry Date: {medicine.expiry}
                  </p>

                  <p className="text-sm text-gray-500">
                    Available Stock: {medicine.quantity}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-sm font-semibold ${medicine.color}`}
                >
                  {medicine.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}