import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color?: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  color = "text-green-600",
}: StatCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm text-gray-500">{title}</p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div className={`rounded-full bg-green-100 p-4 ${color}`}>
          <Icon size={28} />
        </div>
      </CardContent>
    </Card>
  );
}