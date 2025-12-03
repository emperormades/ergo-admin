import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import './LineChart.css'

interface LineChartProps {
  data: Array<{ date: string; value: number }>
  title?: string
  yAxisDomain?: [number, number]
  yAxisTicks?: number[]
}

export default function LineChart({ data, title, yAxisDomain = [0, 60], yAxisTicks = [0, 15, 30, 45, 60] }: LineChartProps) {
  return (
    <div className="line-chart-container">
      {title && <h3 className="chart-title">{title}</h3>}
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <RechartsLineChart
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
            <Line
              type="monotone"
              dataKey="value"
              stroke="#030213"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: '#030213' }}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

