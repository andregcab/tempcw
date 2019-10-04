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


  //The highest profit wins!

  function minMax(arr){
    newArr =[]
    newArr.push(Math.min(...arr))
    newArr.push(Math.max(...arr))
    return newArr
  }

  //expressions matter

  function expressionMatter(a, b, c) {
    let test1 = a * (b + c)
    let test2 = (a + b) * c
    let test3 = a + b + c
    let test4 = a * b * c
    let numbers = [test1, test2, test3, test4]
    return Math.max(...numbers)
  }

  //Grasshopper - Grade book

  function getGrade (s1, s2, s3) {
    let mean = (s1 + s2 + s3)/3
      if (mean >= 90){
        return 'A'
      } else if (mean >= 80 && mean < 90){
        return 'B'
      } else if (mean >= 70 && mean < 80){
        return 'C'
      } else if (mean >= 60 && mean < 70){
        return 'D'
      } else if (mean < 60) {
        return 'F'
      }
  }