import { PieChart, Pie, Legend, Tooltip } from 'recharts';
import React, { Component } from 'react';

const data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
                  {name: 'Group E', value: 278}, {name: 'Group F', value: 189}]

const data02 = [{name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
                  {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
                  {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}];

                
class Adverse extends Component {


  render() {
    if(this.props.data){
      const pieData = this.props.data.slice(0, 9);
      console.log(pieData);
      return (
        <PieChart width={800} height={400}>
          <Pie dataKey="count" nameKey="term" isAnimationActive={false} data={pieData} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
          <Pie dataKey="count" nameKey="term" data={pieData} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" label="name"/>
          <Tooltip/>
         </PieChart>
      );
    }else{
      return null;
    }

  }
}

export default Adverse
