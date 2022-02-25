const cats = ['Milo', 'Otis', 'Garfield']

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyAppendCat(name){
    cats.push('Ralph');
}

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyPrependCat(name){
    cats.unshift('Bob');
}

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveLastCat(){
    cats.pop();
}

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveFirstCat(){
    cats.shift();
}

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function appendCat(name){
    const newCats = [...cats,name];
    console.log(newCats);
    return newCats
}
appendCat('Broom')
console.log(cats);

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function prependCat(name){
    const newCats2 = ['Arnold', ...cats];
    return newCats2
}

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function removeLastCat(){
    const newCats3 = cats.slice(0,-1);
    console.log(newCats3);
    return newCats3

}

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function removeFirstCat(){
    const newCats4 = cats.slice(1);
    console.log(newCats4);
    return newCats4

}