// d3.csv("cereal.csv", function(err, data) {
//   console.log(d3)
// })

// Instanting button states
let showCalories = false
let showProtein = false
let showFat = false
let showSodium = false
let showFiber = false
let showCarbo = false
let showSugar = false
let showPotass = false
let showVitamins = false
let showShelf = false
let showRating = false

d3.csv("cereal.csv")
  .then(function(data) {
    // console.log(data)

    const byBrand = {}
    data.forEach((cereal) => {
      if (byBrand[cereal.mfr] === undefined) {
        byBrand[cereal.mfr] = { name: cereal.mfr, children: [] }
      }
      byBrand[cereal.mfr].children.push(cereal)
    })

    // console.log(byBrand)


  // Base for search URL
  const baseURL = "https://www.safeway.com/shop/search-results.html?q="

  // (Removed) Instantiating all properties we will use
  // const names = data.map(a => a.name)
  // const manufacturer = data.map(a => a.mfg)
  // const type = data.map(a => a.type)
  // const calories = data.map(a => a.calories)
  // const proteins = data.map(a => a.protein)
  // const fats = data.map(a => a.fat)
  // const sodiums = data.map(a => a.sodium)
  // const fibers = data.map(a => a.fiber)
  // const carbos = data.map(a => a.carbo)
  // const sugars = data.map(a => a.sugars)
  // const postasses = data.map(a => a.potass)
  // const vitamins = data.map(a => a.vitamins)
  // const shelf = data.map(a => a.shelf)
  // const weights = data.map(a => a.weight)
  // const cups = data.map(a => a.cups)
  // const ratings = data.map(a => a.rating)
  // ...


  // Grabbing buttons
  const buttonCalories = document.getElementById("button-calories")
  const buttonProtein = document.getElementById("button-protein")
  const buttonFat = document.getElementById("button-fat")
  const buttonSodium = document.getElementById("button-sodium")
  const buttonFiber = document.getElementById("button-fiber")
  const buttonCarbo = document.getElementById("button-carbo")
  const buttonSugar = document.getElementById("button-sugar")
  const buttonPotass = document.getElementById("button-potass")
  const buttonVitamins = document.getElementById("button-vitamins")
  const buttonShelf = document.getElementById("button-shelf")
  const buttonRating = document.getElementById("button-rating")
  const buttonReset = document.getElementById("button-reset")


  // Index All Cereal Names (Removed)
  // const allCereals = document.getElementById("all-cereals")
  // names.forEach(name => {
  //   const el = document.createElement("p")
  //   allCereals.appendChild(el)
  //   el.innerHTML = name + " - "
  // })

  // Create standard circle distribution
  d3.select('#svg-circles')
    .style('border', '1px solid #4f4f4f')
    .selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr("stroke-width", () => {
      return 2
    })
    .attr("stroke", () => {
      return "#4f4f4f"
    })
    .attr('r', (d, i) => {
      return 5
    })
    .attr('cx', (d, i) => {
      return i % 10 * 150 + (200 / 2)
      // return i * 1500/data.length
    })
    .attr('cy', (d, i) => {
      return Math.floor(i / 10) * 100 + (150 / 2)
      // return i * 900/data.length
    })
    .on("mouseover", handleMouseOver)
    .on("mouseout", handleMouseOff)

  // Adding hover and click effects


  // Event handlers
  // Buttons
  buttonCalories.addEventListener("click", (e) => {
    showCalories != showCalories
    displayCalories()
    if (showCalories) {
      e.target.classList.add("button-selected")
    } else {
      e.target.classList.remove("button-selected")
    }
  })

  buttonProtein.addEventListener("click", (e) => {
    showProtein != showProtein
    displayProtein()
    if (showProtein) {
      e.target.classList.add("button-selected")
    } else {
      e.target.classList.remove("button-selected")
    }
  })
  buttonFat.addEventListener("click", (e) => {
    showFat != showFat
    displayFat()
    if (showFat) {
      e.target.classList.add("button-selected")
    } else {
      e.target.classList.remove("button-selected")
    }
  })
  buttonSodium.addEventListener("click", (e) => {
    showSodium != showSodium
    displaySodium()
    if (showSodium) {
      e.target.classList.add("button-selected")
    } else {
      e.target.classList.remove("button-selected")
    }
  })
  buttonFiber.addEventListener("click", (e) => {
    showFiber != showFiber
    displayFiber()
    if (showFiber) {
      e.target.classList.add("button-selected")
    } else {
      e.target.classList.remove("button-selected")
    }
  })
  buttonCarbo.addEventListener("click", (e) => {
    showCarbo != showCarbo
    displayCarbo()
    if (showCarbo) {
      e.target.classList.add("button-selected")
    } else {
      e.target.classList.remove("button-selected")
    }
  })
  buttonSugar.addEventListener("click", (e) => {
    showSugar != showSugar
    displaySugar()
    if (showSugar) {
      e.target.classList.add("button-selected")
    } else {
      e.target.classList.remove("button-selected")
    }
  })
  buttonPotass.addEventListener("click", (e) => {
    showPotass != showPotass
    displayPotass()
    if (showPotass) {
      e.target.classList.add("button-selected")
    } else {
      e.target.classList.remove("button-selected")
    }
  })
  buttonVitamins.addEventListener("click", (e) => {
    showVitamins != showVitamins
    displayVitamins()
    if (showVitamins) {
      e.target.classList.add("button-selected")
    } else {
      e.target.classList.remove("button-selected")
    }
  })
  buttonShelf.addEventListener("click", (e) => {
    showShelf != showShelf
    displayShelf()
    if (showShelf) {
      e.target.classList.add("button-selected")
    } else {
      e.target.classList.remove("button-selected")
    }
  })
  buttonRating.addEventListener("click", (e) => {
    showRating != showRating
    displayRating()
    if (showRating) {
      e.target.classList.add("button-selected")
    } else {
      e.target.classList.remove("button-selected")
    }
  })

  buttonReset.addEventListener("click", (e) => {
    displayDefault()
  })

  // Display callbacks
  function displayCalories() {
    d3.selectAll('circle')
      .data(data)
      .attr('r', (d, i) => {
        return d.calories * 0.25
      })
      .attr("fill", () => {
        return "rgba(238, 32, 77, 0.5)"
      })

  }

  function displayProtein() {
    d3.selectAll('circle')
      .data(data)
      .attr('r', (d, i) => {
        return d.protein * 5
      })
      .attr("fill", () => {
        return "rgba(107, 142, 35, 0.5)"
      })
  }

  function displayFat() {
    d3.selectAll('circle')
      .data(data)
      .attr('r', (d, i) => {
        return d.fat * 5 + 5
      })
      .attr("fill", () => {
        return "rgba(238, 32, 77, 0.5)"
      })
  }

  function displaySodium() {
    d3.selectAll('circle')
      .data(data)
      .attr('r', (d, i) => {
        return d.sodium * 0.1 + 5
      })
      .attr("fill", () => {
        return "rgba(238, 32, 77, 0.5)"
      })
  }
  function displayFiber() {
    d3.selectAll('circle')
      .data(data)
      .attr('r', (d, i) => {
        return d.fiber * 5 + 5
      })
      .attr("fill", () => {
        return "rgba(107, 142, 35, 0.5)"
      })
  }
  function displayCarbo() {
    d3.selectAll('circle')
      .data(data)
      .attr('r', (d, i) => {
        return d.carbo * 1 + 1
      })
      .attr("fill", () => {
        return "rgba(107, 142, 35, 0.5)"
      })
  }
  function displaySugar() {
    d3.selectAll('circle')
      .data(data)
      .attr('r', (d, i) => {
        return d.sugars * 1 + 5
      })
      .attr("fill", () => {
        return "rgba(238, 32, 77, 0.5)"
      })
  }
  function displayPotass() {
    d3.selectAll('circle')
      .data(data)
      .attr('r', (d, i) => {
        return d.potass * 0.1 + 5
      })
      .attr("fill", () => {
        return "rgba(107, 142, 35, 0.5)"
      })
  }
  function displayVitamins() {
    d3.selectAll('circle')
      .data(data)
      .attr('r', (d, i) => {
        return d.vitamins * .5 + 5
      })
      .attr("fill", () => {
        return "rgba(107, 142, 35, 0.5)"
      })
  }
  function displayShelf() {
    d3.selectAll('circle')
      .data(data)
      .attr('r', (d, i) => {
        return d.shelf * 10
      })
      .attr("fill", () => {
        return "rgba(107, 142, 35, 0.5)"
      })
  }

  function displayRating() {
    d3.selectAll('circle')
      .data(data)
      .attr('r', (d, i) => {
        return d.rating * 0.5
      })
      .attr("fill", () => {
        return "rgba(107, 142, 35, 0.5)"
      })
  }

  function displayDefault() {
    d3.selectAll("circle")
      .data(data)
      .attr("r", (d) => {
        return 5
      })
      .attr("fill", () => {
        return "#4f4f4f"
      })
  }

  // Mouseover and Mouseoff helper functions
  function handleMouseOver(d, i) {
    d3.select(this)
      .attr('stroke', 'rgba(255, 181, 15, 1.0)')
      .attr('stroke-width', 5)
  }

  function handleMouseOff(d, i) {
    d3.select(this)
      .attr("stroke", "#4f4f4f")
      .attr('stroke-width', 2)
  }


  // End d3.csv with catch
  }).catch(function(err) {
  console.log(err.message)
  })






// Functionality to close modal once opened
const modalCloseButton = document.querySelector('.modal button')
modalCloseButton.addEventListener('click', function(e) {
  document.querySelector('.modal').classList.add('hide')
})

function showModal() {
  document.querySelector(".modal").classList.remove("hide")
}

// Define spans
const selectedName = document.getElementById("selected-name")
const selectedCalories = document.getElementById("selected-calorie")
const selectedProtein = document.getElementById("selected-protein")
const selectedFats = document.getElementById("selected-fats")
const selectedSodium = document.getElementById("selected-sodium")
const selectedFiber = document.getElementById("selected-fiber")
const selectedSugar = document.getElementById("selected-sugar")
const selectedCarbo = document.getElementById("selected-carbo")
const selectedPotass = document.getElementById("selected-potass")
const selectedVitamins = document.getElementById("selected-vitamins")
const selectedShelf = document.getElementById("selected-shelf")
const selectedRating = document.getElementById("selected-rating")


function populateModel(data){
  selectedName.innerHTML = data.name
  selectedCalories.innerHTML = data.calories
  selectedProtein.innerHTML = data.protein
  selectedFats.innerHTML = data.fats
  selectedSodium.innerHTML = data.sodium
  selectedFiber.innerHTML = data.fiber
  selectedSugar.innerHTML = data.sugar
  selectedCarbo.innerHTML = data.carbo
  selectedPotass.innerHTML = data.potass
  selectedVitamins.innerHTML = data.vitamins
  selectedShelf.innerHTML = data.shelf
  selectedRating.innerHTML = data.rating
}

// Helper Function: Convert String To HTTP Friendly
function httpFriendly(string) {
  let friendlyString = ""
  for (let i = 0; i < string.length; i++) {
    if (string[i] == " ") {
      friendlyString = friendlyString + "%20"
    }
    else {
      friendlyString = friendlyString + string[i]
    }
  }
}
