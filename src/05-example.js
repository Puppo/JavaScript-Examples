new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve(1);
  }, 2000);
}).then((number) => {
  console.log('Yay 1! ' + number);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number * 2);
    }, 2000);
  });
})
.then((number) => {
  console.log('Yay 2! ' + number);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number * 3);
    }, 2000);
  });
})
.then((number) => {
  console.log('Yay 3! ' + number);
})
.catch((error) => {
  console.error('Noo! ' + error.message);
})