# Find Three Largest Numbers

**Description**

The findThreeLargestNumbers function takes an array of numbers and returns the three largest numbers in ascending order. It ensures that the result contains the smallest, middle, and largest of the three largest values in the array, without modifying the original array.

Function Signature

	function findThreeLargestNumbers(array)
 
**Parameters**

**array**: An array of integers from which the three largest numbers will be identified. This array should contain at least three numbers for the function to work properly.

**Returns**: An array of three integers, sorted in ascending order, which are the three largest numbers from the input array.

**Time & Space Complexity**

**Time Complexity**: O(n), where n is the number of elements in the input array. The function traverses the array once to find the three largest numbers.

**Space Complexity**: O(1), since it uses a fixed amount of additional space regardless of the input size.


**Approach**

1. Initialization: Three variables (largest, middle, smallest) are initialized to -Infinity to store the three largest numbers.
2. Traversal: The array is iterated through once. For each number in the array:
3. If it is larger than the current largest, the values are shifted accordingly (smallest becomes middle, middle becomes largest, and the new number becomes largest).
4. If it is larger than middle but not largest, it replaces middle and shifts smallest.
5. If it is larger than smallest but not middle, it replaces smallest.
6. Result: After iterating through the entire array, the three largest numbers are returned in ascending order.
   
Example

	const array = [10, 5, 9, 12, 6, 15, 3];
	console.log(findThreeLargestNumbers(array)); 
	// Output: [10, 12, 15]
 
In this example, the three largest numbers in the array [10, 5, 9, 12, 6, 15, 3] are 10, 12, and 15.

**Edge Case**: The input array must contain at least three elements, as the function is designed to return exactly three numbers.

**Usage**: This function can be used in scenarios where you need the top three maximum values from a list of numbers, such as ranking scores or finding the largest elements in an unsorted dataset.
