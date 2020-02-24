// d3.csv("cereal.csv", function(err, data) {
//   console.log(d3)
// })

d3.csv("cereal.csv")
  .then(function(data) {
    console.log(data)

    const names = data.map(a => a.name)
    const sugars = data.map(a => a.sugars)
    // ...

    // d3.select('#svg-names')
    //   .selectAll('circles')
    //   .data(names)
    //   .enter()
    //   .append('circle')
    //   //...
    //
    // d3.select('#svg-sugars')
    //   .selectAll('circles')
    //   .data(sugars)
    //   .enter()
    //   .append('circle')
    //   //...


  }).catch(function(err) {
    console.log(err.message)
  })
