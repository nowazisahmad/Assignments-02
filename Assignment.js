//Problem-01: Match Winner

function matchWinner(teamAGoals, teamBGoals) {

if( typeof teamAGoals !== "number" || typeof teamBGoals !== "number"){

return "Invalid";

} else if(teamAGoals > teamBGoals){

return "Team A Won";

} else if (teamAGoals < teamBGoals){

return "Team B Won";

} else {

return "Draw";

}

}

//Problem-02: Elevator Weight Safety Checker

function isElevatorSafe(weights) {

let sum = 0;

for(let i = 0; i < weights.length; i++){

sum += weights[i];

} if (!Array.isArray(weights)){

return "Invalid"

} else if(sum <= 400){

return true;

} else {

return false;

}

return sum;

}

//Problem-03: AI Token Cost Calculator

function calculateAiCost(tokensUsed) {

if(typeof tokensUsed !== "number" || tokensUsed < 0){

return "Invalid";

} else if (tokensUsed <= 500){

return 0;

} else if (tokensUsed > 500){

let extraTokensUsed = tokensUsed - 500;

let divide = extraTokensUsed / 100;

divide = Math.floor(divide);

let cost = divide * 5;

return cost;

}

}

//Problem-04: Top Rated Restaurant Finder

function topRatedRestaurant(restaurants) {

if (!Array.isArray(restaurants) || restaurants.length === 0){

return "Invalid";

}

let topRestaurant = restaurants[0];

for (let i = 1; i < restaurants.length; i++){

if (restaurants[i].rating > topRestaurant.rating){

topRestaurant = restaurants[i];

}

} return topRestaurant.name.toUpperCase()

}

//Problem-05: Debugging Challenge - API Response Time Monitor

function averageResponseTime(times) {

if (!Array.isArray(times)) {

return "Invalid";

}if (times.length === 0) {

return "Invalid";

}

let total = 0;

for (let i = 0; i < times.length; i++) {

if(typeof times[i] !== "number"){

return "Invalid";

}total += times[i];

}return total / times.length;

}