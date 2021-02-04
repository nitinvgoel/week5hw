function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}
function renderRides(ridesArray) {
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]
    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)
    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }
    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]
      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}
window.addEventListener('DOMContentLoaded', async function() {
  // YOUR CODE
  let response = await fetch("https://kiei451.com/api/rides.json")
  let ride = await response.json()
  let AllRides = document.querySelector("#all-filter")
  AllRides.addEventListener("click", function(event){
    event.preventDefault()
    let ClearHTML = document.querySelector(".rides")
    ClearHTML.innerHTML = ""
    renderRides(ride)
  })
  let ridesDisplayed = []
  let NooberPurple = document.querySelector("#noober-purple-filter")
  NooberPurple.addEventListener("click", function(event){
    event.preventDefault()
    alert('You have selected Noober Purple')
    console.log("You have selected Noober Purple")
    let ridesDisplayed = []
    for (i=0; i<ride.length; i++){
      if (levelOfService(ride[i]) == 'Noober Purple'){  
        ridesDisplayed.push(ride[i])
      }
    }
    let ClearHTML = document.querySelector(".rides")
    ClearHTML.innerHTML = ""
    renderRides(ridesDisplayed)
  })
  let NooberPool = document.querySelector("#noober-pool-filter")
  NooberPool.addEventListener("click", function(event){
    event.preventDefault()
    alert('You have selected Noober Pool')
    console.log("You have selected Noober Pool")
    let ridesDisplayed = []
    for (i=0; i<ride.length; i++){
      if (levelOfService(ride[i]) == 'Noober Pool'){  
        ridesDisplayed.push(ride[i])
      }
    }
    let ClearHTML = document.querySelector(".rides")
    ClearHTML.innerHTML = ""
    renderRides(ridesDisplayed)
  })
  let NooberXL = document.querySelector("#noober-xl-filter")
  NooberXL.addEventListener("click", function(event){
    event.preventDefault()
    alert('You have selected Noober XL')
    console.log("You have selected Noober XL")
    let ridesDisplayed = []
    for (i=0; i<ride.length; i++){
      if (levelOfService(ride[i]) == 'Noober XL'){  
        ridesDisplayed.push(ride[i])
      }
    }
    let ClearHTML = document.querySelector(".rides")
    ClearHTML.innerHTML = ""
    renderRides(ridesDisplayed)
  })
  let NooberX = document.querySelector("#noober-x-filter")
  NooberX.addEventListener("click", function(event){
    event.preventDefault()
    alert('You have selected Noober X')
    console.log("You have selected Noober X")
    let ridesDisplayed = []
    for (i=0; i<ride.length; i++){
      if (levelOfService(ride[i]) == 'Noober X'){  
        ridesDisplayed.push(ride[i])
      }
    }
    let ClearHTML = document.querySelector(".rides")
    ClearHTML.innerHTML = ""
    renderRides(ridesDisplayed)
  })
})