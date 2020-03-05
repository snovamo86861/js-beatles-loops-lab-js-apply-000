// add solution here
function theBeatlesPlay(players, instruments) {
    var allPlayers = [];
    for (var i=0; i < players.length; i++) {
        allPlayers.push(players[i] + " plays " + instruments[i]);
    }
    return allPlayers;
}

const facts=[
“He was the last Beatle to learn to drive”,
“He was never a vegetarian”,
“He was a choir boy and boy scout”,
“He hated the sound of his own voice”
];
function johnLennonFacts(factsArray){
var i=0;
var newArray=[];
while (factsArray.length > i){
newArray.push(`${factsArray[i]}` + “!!!”);
i++;
}
return newArray;
}

function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);

    return love;
}