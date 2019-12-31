function countNumbers(numbers) {
    let strOfNums = numbers.replace(/\D/g, '');
    let result = {};
    strOfNums.split('').forEach( num => {
        if (result[num] !== undefined) {
          ++result[num];
        } else {
          result[num] = 1;
        }
      });
      return result;
}
countNumbers('32hjkh4586t8f4h9f981');