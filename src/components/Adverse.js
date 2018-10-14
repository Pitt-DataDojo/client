import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
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

  formatData(data){
    let total = 0;
    data.forEach((item) => {
      total += item.count;
    });
    
    return total;
  }

  render() {
    if(this.props.data.adverseEffects){
      const total = this.formatData(this.props.data.adverseEffects);
      const pieData = this.props.data.adverseEffects.slice(0, 9);
      
      return (
        <div className="Drug">
          <h1>Adverse Effects</h1>
          <h3>Total reported: {total}</h3>
          <ResponsiveContainer width="100%" height={500}>
            <PieChart >
              <Pie dataKey="count" nameKey="term" data={pieData} cx="50%" cy="50%" innerRadius={80} outerRadius={160} fill="#82ca9d" label={this.renderCustomizedLabel}/>
              <Tooltip/>
            </PieChart>
          </ResponsiveContainer>
         </div>
      );
    }else{
      return null;
    }

  }
}

export default Adverse;
