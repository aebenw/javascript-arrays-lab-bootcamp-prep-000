const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten (name) {
  return kittens.push(name)
}

function destructivelyPrependKitten (name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten (name) {
  return kittens.pop(name)
}

function destructivelyRemoveFirstKitten (name) {
  return kittens.splice(0,1)
}
 
 function appendKitten(name) {
   var newKittens = kittens.unshift(name)
   return newKittens
 }

  