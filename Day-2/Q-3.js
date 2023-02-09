// Write a function which partitions a list of items based on a given predicate.

// After the partition function is run, the list should be of the form [ F, F, F, T, T, T ] where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).

// NOTE: the partitioning should be stable; in other words: the ordering of the Fs (resp. Ts) should be preserved relative to each other.

// For convenience and utility, the partition function should return the boundary index. In other words: the index of the first T value in items.

// For example:

// var items = [1, 2, 3, 4, 5, 6];
// function isEven(n) {return n % 2 == 0}
// var i = partitionOn(isEven, items);
// items should now be [1, 3, 5, 2, 4, 6]
// i     should now be 3

function partitionOn(pred, items) {
 
    var falseItems=items.filter(function(item){return !pred(item)});
    var trueItems=items.filter(function (item){return pred(item)});
    var index=0;
    items.length=0;
    for(index=0;index<falseItems.length;index++){
      items.push(falseItems[index]);
    }
    for(let ind=0;ind<trueItems.length;ind++){
      items.push(trueItems[ind]);
    }
   return falseItems.length;
   
    
  }
  var items = [1, 2, 3, 4, 5, 6];
 function isEven(n) {return n % 2 == 0}
  console.log(partitionOn(isEven,items));