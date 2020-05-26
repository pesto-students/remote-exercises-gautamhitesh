function diffArray(firstArray, secondArray) {
  return firstArray
    .filter((element) => {
      return secondArray.indexOf(element) === -1;
    })
    .concat(
      secondArray.filter((element) => {
        return firstArray.indexOf(element) === -1;
      })
    );
}

export { diffArray };
