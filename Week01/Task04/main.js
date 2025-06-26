console.group('Group 1'); // First Collapse Group
console.log('Message One');
console.log('Message Two');

console.group('Child Group'); // New Collapse Group under first group
console.log('Message One');
console.log('Message Two');

console.group('Grand Child Group'); // New Collapse Group under child group
console.log('Message One');
console.log('Message Two');
console.groupEnd(); // End Grand Child Group
console.groupEnd(); // End Child Group
console.groupEnd(); // End Group 1

console.group('Group 2');
console.log('Message One');
console.log('Message Two');
console.groupEnd(); // End Group 2