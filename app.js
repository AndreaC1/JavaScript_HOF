console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function plus(number){
  return function(plusNumber){
    return plusNumber + number;
  }
}

let plus15 = plus(15);
console.log(plus15(10));


//exercise 2
let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

users.forEach(function(users){
  console.log(users.name);
})


//exercise 3

const newUsers =  users.map(function(users){
  return [

   users.name,
  users.score

  ]
})

console.log(newUsers);

const mappedUsers = users.map((element) =>{
  //we tell the map how to tranform each item, by 
  //giving this callback function a return
  return [
      element.name,
      element.score
]
});

console.log(mappedUsers);

//exercise 4

const filteredUsers = users.filter(function(users){
  return users.isActive == true;
})

console.log(filteredUsers);

//exercise 5

const sortedUsers = users.sort((a,b) =>{
if(a.score < b.score)
  return 1;
else if (a.score > b.score){
  return -1;
}
else{return 0;

}
})

console.log(sortedUsers);

//exercise 6


const sumofScores = users.reduce((sum, current) => {

 return sum + current.score


},0);



console.log("sum " + sumofScores);
let averageScore = sumofScores/4
console.log("average " + averageScore);