import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import './BarChart.css'

interface BarChartProps {
  data: Array<{ date: string; value: number }>
  title?: string
  yAxisDomain?: [number, number]
  yAxisTicks?: number[]
}

export default function BarChart({ data, title, yAxisDomain = [0, 60], yAxisTicks = [0, 15, 30, 45, 60] }: BarChartProps) {
  return (
    <div className="bar-chart-container">
      {title && <h3 className="chart-title">{title}</h3>}
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <RechartsBarChart
            data={data}
            margin={{ top: 5, right: 20, left: 50, bottom: 50 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
            <XAxis
              dataKey="date"
              stroke="#666666"
              tick={{ fill: '#666666', fontSize: 12, fontFamily: 'Inter, Arial, sans-serif' }}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={{ stroke: '#e5e7eb' }}
            />
            <YAxis
              stroke="#666666"
              tick={{ fill: '#666666', fontSize: 12, fontFamily: 'Inter, Arial, sans-serif' }}
              domain={yAxisDomain}
              ticks={yAxisTicks}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={{ stroke: '#e5e7eb' }}
              label={{
                value: 'Quantidade',
                angle: -90,
                position: 'insideLeft',
                style: {
                  textAnchor: 'middle',
                  fill: '#666666',
                  fontSize: 12,
                  fontFamily: 'Inter, Arial, sans-serif'
                },
                offset: -40
              }}
            />
            <Bar
              dataKey="value"
              fill="#030213"
              radius={[4, 4, 0, 0]}
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

