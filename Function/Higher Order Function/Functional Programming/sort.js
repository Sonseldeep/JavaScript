const number = [1000, 100, 150, 1500, 3500, 2500];
// const SortNumber = number.sort();

// console.log(SortNumber);
// this is not sorted in this case because it as based on the UTF 16 firstt check each character 
// consider as string;
// fisr compare 1 1 1 items and 0 0  items
// as 1000 and 100 contains 00 in sequence so it compares these two first
// so 100,1000
// so on..

// so we need compare function
// in compare function 
// +1 its a correct
// 0 equal
// -1 not correct
const SortNumber = number.sort((a, b) => {
    console.log(a,b); // kati patak itterate vako xa ta vanera
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;

    }
    return 0;
});


console.log(SortNumber);


