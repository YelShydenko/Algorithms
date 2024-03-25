function startFromEnd(array) {
   let invert = []; // const_2 
   for (let i = array.length - 1; i >= 0; i--) {
      invert.push(array[i]) 
   }
   return invert; 
}
// const_1 * N(входные данные) + const_2