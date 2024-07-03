// Exercice 1

function reverseString(str) {
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }

//  Exercice 2

  function countCharacters (chaine) {
    return chaine.length;
  }
  console.log(countCharacters("dali"))

//  Exercice 3

  var chaine = "hello world tunsia gomycode"
  var words = chaine.split(" ")
  for(let word of words) {
   word[0] = word[0].toUpperCase();
   console.log(word[0])
  }

  function capitalizeWords(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  }

//  Exercice 4

  function findMaximum(arr) {
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }


  function findMinimum(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }

  var numbers = [3, 5, 1, 8, 2];
  console.log(findMaximum(numbers));
  console.log(findMinimum(numbers));

// Exercice 5

  function sumArray (tab) {
  let somme = 0 ;
  for (let i = 0; i < tab.length; i++) {
    if (typeof(tab[i]) === "number") {
    somme = somme + tab[i]
    }
  }
  return somme
  }
  console.log(sumArray(tab))

// Exercice 6

  function filterArray (tab) {
  let tabFilted = [];
  for (let i = 0; i < tab.length; i++) {
   if( typeof (tab[i]) === "number") {
      tabFilted.push(tab[i]);
    }
  }
   return tabFilted;
  }

  console.log(filterArray(tab))




