new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve(1);
  }, 2000);
}).then((number) => {
  console.log('Yay 1! ' + number);
  return number * 2;
})
.then((number) => {
  console.log('Yay 2! ' + number);
  return number * 3;
})
.then((number) => {
  console.log('Yay 3! ' + number);
})