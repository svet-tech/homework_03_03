

//Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
function arrDigits(array){
for (let index = 0; index < array.length; index++) {
    array[index] = Math.sqrt(array[index]);
}

let result = array.reduce((sum, current) => sum + current, 0);
console.log(result)
}
arrDigits ([4, 16, 25, 49])


//Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.

function removeDuble(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

const array = [1, 2, 3, 2, 1, 4, 5, 3];
const uniqueArray = removeDuble(array);
console.log(uniqueArray);

//Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы.

function removeDuble2(arr) {
    const uniqueArray2 = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {

            uniqueArray2.push(arr[i]);
        }
    }
    return uniqueArray2;
}

const array2 = [1, 2, 3, 3, 1, 4, 4, 5, 3];
const uniqueArray2 = removeDuble2(array2);
console.log(uniqueArray2);