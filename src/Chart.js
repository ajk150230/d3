d3.select()
d3.selectAll()

d3.select('chart').style('color', 'blue')
    .attr('class', 'heading')
    .text('Updated')

d3.select('body').append('p').text('First paragraph')