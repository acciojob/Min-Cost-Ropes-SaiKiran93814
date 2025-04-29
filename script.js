function mincost(arr)
{ 
//write your code here
// return the min cost
	 if (arr.length <= 1) return 0;

  // Min-heap using a priority queue simulation
  let heap = [...arr].sort((a, b) => a - b);
  let cost = 0;

  while (heap.length > 1) {
    // Take two smallest ropes
    let first = heap.shift();
    let second = heap.shift();

    let sum = first + second;
    cost += sum;

    // Insert the new rope and keep heap sorted
    heap.push(sum);
    heap.sort((a, b) => a - b);
  }

  return cost;
  
}

module.exports=mincost;
