// Homework 1 : Age-ify
const yearOfBirth =1987
const yearFuture = 2027

const age = yearFuture - yearOfBirth
console.log(`You will be ${age} years old in ${yearFuture}`)

// Homework 2 : Goodboy-Oldboy (A dog age calculator) 
const dogYearOfBirth = 2017
const dogYearFuture = 2027
const dogYear = dogYearFuture-dogYearOfBirth
const shouldShowResultInDogYears = true
if(shouldShowResultInDogYears){
  console.log(`Your dog will be ${dogYear*7} dog years old in ${dogYearFuture}`)
}else {
  console.log(`Your dog wille be ${dogYear} human years old in ${dogYearFuture}`)
}

// Homework 3 : Housey pricey (A house price estimator)


function estimatedHousePrice(width,depth,height,gardenSizeM2){
  let volumeInMeters= width*depth*height
  let estimatedHousePrice = volumeInMeters*2.5*1000 + gardenSizeM2*300
  return estimatedHousePrice
}

if(estimatedHousePrice(8,10,10,100)<2500000){
  console.log('Peter paid too much')}
  else{
    console.log('Peter paid too little')
  } 

if (estimatedHousePrice(5,11,8,70)<1000000){
  console.log('Julia paid too much')
}else{
  console.log('Julia paid too little')
}

// Homework 4 : Ez Namey (Startup name generator) Optional 
const firstWords = ["Easy", "Awesome", "Creative", "Dynamic", "Bold", "Bright", "Next", "Smart", "Happy", "Future"]
const secondWords = ["Solutions", "Corporation", "Ventures", "Technologies", "Designs", "Concepts", "Enterprises", "Works", "Studios", "Hub"]

const randomNumber1= Math.floor(Math.random()*10)
const randomNumber2= Math.floor(Math.random()*10)

let startupName= firstWords[randomNumber1]+ ' ' + secondWords[randomNumber2]
console.log(`The startup: "${startupName}" contains ${startupName.length} characters`)
