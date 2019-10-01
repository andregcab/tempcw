//testing!!

//messi goals

const goals = (ll, cdr, cl) => ll + cdr + cl

//Cat years, dog years(2) > Could have done better...

var ownedCatAndDog = function(catYears, dogYears) {
    let ownedYears = []
    const earlyYears = (years) => years >= 24 ? 2 : years >= 15 ? 1 : 0;
  
    if(catYears >= 28) {
      ownedYears.push(Math.floor((catYears - 24) / 4)+2)
     } else {
      ownedYears.push(earlyYears(catYears))
    }
  
    if (dogYears >= 29) {
      ownedYears.push(Math.floor((dogYears - 24) / 5)+2)
    } else {
      ownedYears.push(earlyYears(dogYears))
    }
    
    return ownedYears;
  }
