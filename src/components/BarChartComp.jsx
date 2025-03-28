import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const feedingData = [
  {
    day: "L",
    comidas: 3,
  },
  {
    day: "M",
    comidas: 2,
  },
  {
    day: "M",
    comidas: 3,
  },
  {
    day: "J",
    comidas: 2,
  },
  {
    day: "V",
    comidas: 3,
  },
  {
    day: "S",
    comidas: 4,
  },
  {
    day: "D",
    comidas: 4,
  },
];

export default class BarChartComp extends PureComponent {
  render() {
    return (
      <div style={{ width: "100%", height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={feedingData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              label={{
                value: "Día de la semana",
                position: "insideBottom",
                offset: -15,
                style: { textAnchor: "middle" },
              }}
            />
            <YAxis
              label={{
                value: "Num de comidas",
                angle: -90,
                position: "insideMiddle",
                style: { textAnchor: "middle" },
                offset: 10,
              }}
              allowDecimals={false}
            />
            <Tooltip
              formatter={(value) => [`${value}`, "comidas"]}
              labelFormatter={(label) => `On ${label}`}
            />
            <Legend
              verticalAlign="top"
              height={36}
              payload={[
                {
                  value: "Comidas Diarias",
                  type: "rect",
                  color: "#4CAF50",
                },
              ]}
            />
            <Bar
              dataKey="comidas"
              fill="#4CAF50"
              name="comidas"
              activeBar={<Rectangle fill="#81C784" stroke="#388E3C" />}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
