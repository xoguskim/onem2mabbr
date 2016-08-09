var abbrStore = require('./persist/abbrStore');



console.log( "get starts with 2" );
var wordList = abbrStore.getWordList('2');
console.log( wordList );

console.log( "get starts with a ----" );
var wordList = abbrStore.getWordList('a');
console.log( wordList );

console.log( "put new items 3 times ----" );
abbrStore.putWord('new1', 'new desc 1');
var wordList = abbrStore.getWordList('new');
console.log( wordList );
abbrStore.putWord('new2', 'new desc 2');
var wordList = abbrStore.getWordList('new');
console.log( wordList );
abbrStore.putWord('new3', 'new desc 3');
var wordList = abbrStore.getWordList('new');
console.log( wordList );


console.log( "put dup items ----" );
abbrStore.putWord('new3', 'new new desc 3');
var wordList = abbrStore.getWordList('new');
console.log( wordList );

console.log( "delete a item" );
abbrStore.deleteWord('new2');

var wordList = abbrStore.getWordList('new');
console.log( wordList );
