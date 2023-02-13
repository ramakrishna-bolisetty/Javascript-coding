// word count problem.

function wordCount(sentence){

    var words=sentence.split(" ");
    var totalWords=words.length;
    return totalWords;

}




var sentence="This is a sample sentence";

var totalWords=wordCount(sentence);

console.log("totalwords are ",totalWords);

