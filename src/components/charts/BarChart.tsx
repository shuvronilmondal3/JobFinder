
import { 
  ResponsiveContainer, 
  BarChart as RechartsBarChart, 
  XAxis, 
  YAxis, 
  Bar, 
  Tooltip, 
  CartesianGrid, 
  Legend 
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BarChartProps {
  title: string;
  data: any[];
  categories: { key: string; name: string; color: string }[];
  className?: string;
}

export function BarChart({ title, data, categories, className }: BarChartProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }} 
                tickLine={false}
                axisLine={{ stroke: '#E5E7EB' }}
              />
              <YAxis 
                tick={{ fontSize: 12 }} 
                tickLine={false}
                axisLine={{ stroke: '#E5E7EB' }}
              />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '0.375rem',
                  boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              />
              <Legend verticalAlign="top" height={36} />
              {categories.map((category) => (
                <Bar 
                  key={category.key} 
                  dataKey={category.key} 
                  name={category.name} 
                  fill={category.color} 
                  radius={[4, 4, 0, 0]}
                />
              ))}
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
