
var fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(list, iteratee) {
      if (Array.isArray(list)) {
        for (let idx = 0; idx < list.length; idx++) {
          iteratee(list[idx])
        }
      } else if (typeof list === 'object') {
        for (let element in list) {
         iteratee(list[element])
        }
      }
      return list
    },

    map: function(list, iteratee) {
      if (Array.isArray(list)) {
        const newArr = []
        for (let idx = 0; idx < list.length; idx++) {
         newArr.push(iteratee(list[idx]))
        }
      return newArr
      } else if (typeof list === 'object') {
        for (let element in list) {
         return Object.assign({}, list )
        }
      }
    },

    reduce: function(list, iteratee, memo) {
      var copyList = Array.isArray(list) ? list.slice() : Object.values(list)

      if (memo !== 'undefined') {
        for (let i = 0; i < copyList.length; i++)
          memo = iteratee(memo, copyList[i], i, copyList)
      } else {
        memo = copyList[0]
        for (let i = 0; i < copyList.length; i++)
          memo = iteratee(memo, copyList[i], i, copyList)
     }
     return memo;
    },

    find: function(list, predicate) {
      for (let idx = 0; idx < list.length; idx++) {
        if (predicate(list[idx]) === true) {
          return list[idx];
        }
      }
    },

    filter: function(list, predicate) {
      var arr = []
      for (let idx = 0; idx < list.length; idx++) {
        if (predicate(list[idx]) === true) {
          arr.push(list[idx]);
        }
      }
      return arr;
    },

    sortBy: function(list, iteratee) {
      return list.sort(iteratee);
    },


    size: function(list) {
      var count = 0;

      for(var prop in list) {
          if(list.hasOwnProperty(prop))
              ++count;
      }

      return count;
    },

    first: function(array, n) {
      return array.slice(0, n);
    },

    last: function(array, n) {
      return array.slice(-n);
    },

    compact: function(array) {
      let arr = []
      for (let idx = 0; idx < array.length; idx++) {
        if (array[idx] !== undefined && array[idx] !== null && array[idx] !== false && array[idx] !== 0 && array[idx] !== "" && isNaN()!=NaN)
          arr.push(array[idx]);
        }
      return arr;
    },

    uniq: function(array) {
      let arr = [];

      for (var i = 0; i < array.length; i++) {
        if (!arr.includes(array[i])) {
            arr.push(array[i]);
          }
        }
      return arr;
    },

    keys: function(object) {
      let arr = [];

      for (let element in object) {
         arr.push(element)
      }
      return arr;
    },

    values: function(object) {
      let arr = [];

      for (let element in object) {
         arr.push(object[element])
      }
      return arr;
    },

    functions: function(object) {
      let arr = [];

      for (let element in object) {
         arr.push(element)
      }
      return arr.sort();
    },

}
})()
