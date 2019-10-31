const _ = {
    map: function(arr, callback) {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
      }
      return arr
    },
    reduce: function(arr, callback, memo){
        let el = 0;
        if (!memo){
          memo = arr[0];
          el = 1;
        }
        for (let i = el; i < arr.length; i++) {
          memo = callback(arr[i], memo);
        }
        return memo;
  
    },
    find: function(arr, callback) {
      for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])){
          return arr[i];
        }
      }
      return "Callback not found in array"
    },
    filter: function(arr, callback) {
      const tempArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
          tempArr.push(arr[i]);
        }
      }
      return tempArr;
    },
    reject: function(arr, callback) {
      const tempArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
          tempArr.push(arr[i]);
        }
      }
      return tempArr;
    },
}

// TESTS //
const array = [1, 2, 3, 4, 5, 6];
console.log(array);
_.map(array, function callback(x) { return x * 3; });
console.log(array);
console.log(_.reduce(array, function callback(x, memo) { return x - memo; }, 10));
console.log(_.find(array, function callback(x) { return x === 20; }));
console.log(_.filter(array, function(x) { return x % 2 == 0}));