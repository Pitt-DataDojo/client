import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import React, { Component } from 'react';
                
class Adverse extends Component {

  renderCustomizedLabel = (data) => {
    const RADIAN = Math.PI / 180;  
    const radius = data.innerRadius + (data.outerRadius - data.innerRadius) * 0.5;
    const x  = data.cx + radius * Math.cos(-data.midAngle * RADIAN);
    
   return (
    <text x={data.x} y={data.y} textAnchor={x > data.cx ? 'start' : 'end'} fill="black">
      {data.name}
    </text>
   );
  }

  render() {
    if(this.props.data.adverseEffects){
      const pieData = this.props.data.adverseEffects.slice(0, 9);
      
      return (
        <React.Fragment>
          <h1>Adverse Effects</h1>
          <ResponsiveContainer width="100%" height={500}>
            <PieChart >
              <Pie dataKey="count" nameKey="term" data={pieData} cx="50%" cy="50%" innerRadius={80} outerRadius={160} fill="#82ca9d" label={this.renderCustomizedLabel}/>
              <Tooltip/>
            </PieChart>
          </ResponsiveContainer>
         </React.Fragment>
      );
    }else{
      return null;
    }

  }
}

export default Adverse
