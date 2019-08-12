var kittens = ["Milo", "Otis", "Garfield"] //Array kitten returns "Milo", "Otis", and "Garfield"

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyAppendKitten(name){
  kittens.unshift(name)
  return kittens
}
