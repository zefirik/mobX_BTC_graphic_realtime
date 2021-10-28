//import { toJS } from 'mobx';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function RenderLines (data) {

  // console.log("data input :", data)
  // console.log("graphic :",  toJS(data.coin.graphic));
 

    return (
         <LineChart
            width={600}
            height={400}
            data={data.coin.graphic.slice(-30)}
          >
                        <CartesianGrid strokeDasharray="2 2" />
                        <XAxis dataKey="dateUpdated" />
                        <YAxis domain={['auto', 'auto']} allowDataOverflow={true} />
                        <Tooltip />
                        
                        <Line
                          type="monotone"
                          dataKey="price"
                          stroke="#8884d8"
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
  )
};
