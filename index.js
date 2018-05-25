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
   var newKittens = [...kittens, name]
   return newKittens
 }

function prependKitten(name) {
  var newKittens = [name,...kittens]
  return newKittens
}

function removeLastKitten () {
  var newKittens = kittens.slice(0, kittens.length -1)
  return newKittens
}

  
  describe('removeFirstKitten()', function() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

})

  