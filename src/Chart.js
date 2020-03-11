import React, { Component } from 'react';
import * as d3 from 'd3'
const data =[1,2,3,]
class Chart extends Component {
    componentDidMount(){
        d3.select(this.refs.temperatures)
        .selectAll("h2")
        .data(data)
        .enter()
            .append("h2")
            .text("New Temperature")
    }
    render() {
        return (
            <div ref="temperatures">
                
            </div>
        );
    }
}

export default Chart;