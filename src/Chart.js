import React, { Component } from 'react';
import * as d3 from 'd3'
class Chart extends Component {
    componentDidMount(){
        const data =[1,2,3]
        d3.select(this.refs.temp)
        .selectAll("h2")
        this.draw(data)
    }
    draw(data){
        const tempHeight = 400;
        const tempWidth = 500;
        const scale = 20;
        const svgTemp = d3.select(this.refs.temp)
            .append("svg")
            .attr("width", tempWidth)
            .attr("height", tempHeight)
        svgTemp.selectAll("rectangle")
            .data(data).enter()
            .append("rectangle")
            .attr("width", 30)
            .attr("height", (e)=> e * scale)
            .attr("fill", "red")
            .attr('x', (e, i) => i * 45 )
            .attr('y', (e) => tempHeight - e * scale )
            .text(e=>e)
    }
    render() {
        return (
            <div ref="temp">
                
            </div>
        );
    }
}

export default Chart;