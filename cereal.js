// d3.csv("cereal.csv", function(err, data) {
//   console.log(d3)
// })

d3.csv("cereal.csv")
  .then(function(data) {
    console.log(data)

    // Instantiating all properties we will use
    const names = data.map(a => a.name)
    const sugars = data.map(a => a.sugars)
    // ...

    const allCereals = document.getElementById("all-cereals")
    names.forEach(name => {
      const el = document.createElement("p")
      allCereals.appendChild(el)
      el.innerHTML = name + " - "
    })



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
