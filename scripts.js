function findThreeLargestNumbers(array) {
  // Initialize the three largest numbers with -Infinity
  let largest = -Infinity;
  let middle = -Infinity;
  let smallest = -Infinity;

  for (const element of array) {
    // Update the largest, middle, and smallest numbers accordingly
    if (element > largest) {
      smallest = middle;
      middle = largest;
      largest = element;
    } else if (element > middle) {
      smallest = middle;
      middle = element;
    } else if (element > smallest) {
      smallest = element;
    }
  }

  return [smallest, middle, largest];
}
