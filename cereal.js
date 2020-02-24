// d3.csv("cereal.csv", function(err, data) {
//   console.log(d3)
// })

d3.csv("cereal.csv")
  .then(function(data) {
    console.log(data)

    const byBrand = {}
    data.forEach((cereal) => {
      if (byBrand[cereal.mfr] === undefined) {
        byBrand[cereal.mfr] = { name: cereal.mfr, children: [] }
      }
      byBrand[cereal.mfr].children.push(cereal)
    })

    console.log(byBrand)

    // Instantiating all properties we will use
    const names = data.map(a => a.name)
    const manufacturer = data.map(a => a.mfg)
    const type = data.map(a => a.type)
    const calories = data.map(a => a.calories)
    const proteins = data.map(a => a.protein)
    const fats = data.map(a => a.fat)
    const sodiums = data.map(a => a.sodium)
    const fibers = data.map(a => a.fiber)
    const carbos = data.map(a => a.carbo)
    const sugars = data.map(a => a.sugars)
    const postasses = data.map(a => a.potass)
    const vitamins = data.map(a => a.vitamins)
    const shelf = data.map(a => a.shelf)
    const weights = data.map(a => a.weight)
    const cups = data.map(a => a.cups)
    const ratings = data.map(a => a.rating)
    // ...

    // Index All Cereal Names
    const allCereals = document.getElementById("all-cereals")
    names.forEach(name => {
      const el = document.createElement("p")
      allCereals.appendChild(el)
      el.innerHTML = name + " - "
    })


    d3.select('#svg-circles')
      .style('border', '1px solid #f0f')
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', (d, i) => {
        return d.protein * 5
      })
      .attr('cx', (d, i) => {
        return i * 400/data.length
      })
      .attr('cy', (d, i) => {
        return i * 400/data.length
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
