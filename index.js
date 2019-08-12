var kittens = ["Milo", "Otis", "Garfield"] //Array kitten returns "Milo", "Otis", and "Garfield"

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
