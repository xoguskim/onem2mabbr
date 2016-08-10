var fs = require('fs');
var path = require('path');
var abbrList = require('./abbreviations.json');

var writingPended = false;
var onWriting = false;


exports.getWordList = function(startsWith) {

	var result = [];
	for( key in abbrList ) {
		if( !startsWith || key.startsWith( startsWith ) )
			result.push( {"key": key, "desc": abbrList[key]} );
	}
	return result;
};

exports.putWord = function(word, desc) {
	abbrList[word] = desc;

	writeToFile();

  return getAbbrList();
};

exports.deleteWord = function(word) {
	var obj = abbrList[word];
	if( obj ) {
		delete abbrList[word];
	}

	writeToFile();

  return getAbbrList();
};

function getAbbrList() {
  var result = [];
  for( key in abbrList ) {
      result.push( {"key": key, "desc": abbrList[key]} );
  }
  return result;
}

function writeToFile() {
	if( !onWriting ) {
		onWriting = true;

		abbrFile = path.join(__dirname, 'abbreviations.json');

		fs.writeFile(abbrFile, JSON.stringify(abbrList), 'utf8', function() {
			onWriting = false;	
		});
	}
	else {
		setTimeout(writeToFile, 1000);
	}
};

