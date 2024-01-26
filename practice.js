const arrA = ["pasta", "pizza", "Ice-cream"];
const arrB = ["pasta", "cake", "water"];

const display = (common) => {
    return common;


};

const itemFinder = (arr1, arr2, display) => {
    const answer = arr1.filter{(food) => arr2.includes(food)};
    return display(what);

}

const response = itemFinder(arrA, arrB, display);
console.log({response});