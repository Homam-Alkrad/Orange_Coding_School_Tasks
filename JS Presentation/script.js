// Sample array for demonstrations
let fruits = ['Apple', 'Banana', 'Orange'];

// Update display of array before method call
function updateBefore(elementId, array) {
    document.getElementById(elementId).innerText = `${array}`;
}

// Array length
function showArrayLength() {
    updateBefore('lengthBefore', fruits);
    document.getElementById('lengthResult').innerText = `Array Length: ${fruits.length}`;
}

// Array toString()
function arrayToString() {
    updateBefore('toStringBefore', fruits);
    document.getElementById('toStringResult').innerText = `Array as String: ${fruits.toString()}`;
}

// Array pop()
function arrayPop() {
    updateBefore('popBefore', fruits);
    let popped = fruits.pop();
    document.getElementById('popResult').innerText = `Popped Element: ${popped}, After: ${fruits}`;
}

// Array push()
function arrayPush() {
    updateBefore('pushBefore', fruits);
    fruits.push('Mango');
    document.getElementById('pushResult').innerText = `Pushed 'Mango', After: ${fruits}`;
}

// Array shift()
function arrayShift() {
    updateBefore('shiftBefore', fruits);
    let shifted = fruits.shift();
    document.getElementById('shiftResult').innerText = `Shifted Element: ${shifted}, After: ${fruits}`;
}

// Array unshift()
function arrayUnshift() {
    updateBefore('unshiftBefore', fruits);
    fruits.unshift('Grapes');
    document.getElementById('unshiftResult').innerText = `Unshifted 'Grapes', After: ${fruits}`;
}

// Array join()
function arrayJoin() {
    updateBefore('joinBefore', fruits);
    document.getElementById('joinResult').innerText = `Joined Array: ${fruits.join(' - ')}`;
}

// Array delete
function arrayDelete() {
    updateBefore('deleteBefore', fruits);
    delete fruits[1]; // Removes 'Banana'
    document.getElementById('deleteResult').innerText = `Deleted Second Element, After: ${fruits}`;
}

// Array concat()
function arrayConcat() {
    updateBefore('concatBefore', fruits);
    let moreFruits = ['Pineapple', 'Strawberry'];
    let newArray = fruits.concat(moreFruits);
    document.getElementById('concatResult').innerText = `Concatenated Array: ${newArray}`;
}

// Array flat()
function arrayFlat() {
    updateBefore('flatBefore', fruits);
    let nestedArray = ['Apple', ['Banana', 'Orange'], ['Mango', 'Grapes']];
    let flatArray = nestedArray.flat();
    document.getElementById('flatResult').innerText = `Flattened Array: ${flatArray}`;
}
