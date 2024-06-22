// Write your solution here!
const cats = ['Milo','Otis', 'Garfield'];

function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop();
}
function destructivelyPrependCat(Ralph){
    cats.unshift(Ralph);
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    return [...cats, name];
}
function prependCat(name){
    return [name, ...cats]
}
function removeLastCat(){
    return cats.slice(0, -1)
}
function removeFirstCat(){
    return cats.slice(1)
}