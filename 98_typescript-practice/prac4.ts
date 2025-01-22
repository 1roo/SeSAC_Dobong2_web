function arrElement<T>(arr: T[], index: number): T | number {
  if (index < 0 || index >= arr.length) {
    return -1;
  }
  return arr[index];
}
console.log(arrElement<string>(["a"], 0));
