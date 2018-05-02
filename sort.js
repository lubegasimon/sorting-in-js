var names = ['simon', 'wax', 'zilla', 'lubega'];
var nums = [1,2,3,4,5,6];

nums.sort(function sortvalue(a, b) {
    return b - a;
});
console.log(nums);



names.sort(function (a, b){
    if(a > b){
        return 1;
    }
    else if(a < b){
        return -1;
    }
    else{
        return 0;
    }
})
console.log(names);


var name = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu']
name.sort(function sortName(a, b){
    return a.localeCompare(b);
})

//...or 

// name.sort((a, b) => a.localeCompare(b));
console.log(name);


var items = [
    {name: 'martin', age: 23},
    {name: 'claire', age: 25},
    {name: 'phina', age: 18},
    {name: 'ken', age: 23}
]
//...sort according to age
items.sort(function sortItems(a, b){
    return a.age - b.age;
})
console.log(items);

//...sort according to name
items.sort(function sortItems(a, b){
    var itemA = a.name.toUpperCase();//ignore upper and lower case..
    var itemB = b.name.toUpperCase();

    if(itemA > itemB){
        return 1
    }
    else if(itemA < itemB){
        return -1
    }
    else{
        return 0
    }
})
console.log(items);


var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

//...sorting with map method.

//...The idea is to walk the array once to extract the actual values used for sorting into a temporary array, 
//...sort the temporary array and then walk the temporary array to achieve the right order.


//...temporary array holds objects with position and sort-value
 var listMap = list.map(function mapping(value, i){
    return {index: i, name: value};
 })
 console.log('listMap store:',listMap);

 //...sorting the mapped array containing the reduced values
 listMap.sort(function sortList(a, b){

     var listA = a.name.toUpperCase();//ignore upper and lower case
     var listB = b.name.toUpperCase();

     if(listA > listB){
         return 1
     }
     else if(listA < listB){
         return -1
     }
     else{
         return 0
     }
 })
 console.log('sorted listMap store:',listMap);

//...container for the resulting order
var result = listMap.map(function mapResult(name){
    return list[name.index];
})
console.log('result:',result);




