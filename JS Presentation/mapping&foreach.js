// forEach Example
function runForEachExample() {
    const numbers = [1, 2, 3, 4];
    let output = '';
    numbers.forEach((num) => {
        output += num + ' ';
    });
    document.getElementById('foreach-output').innerText = 'Output: ' + output.trim();
}

// Map Example
function runMapExample() {
    const numbers = [1, 2, 3, 4];
    const doubled = numbers.map((num) => num * 2);
    document.getElementById('map-output').innerText = 'Output: ' + doubled.join(' ');
}
