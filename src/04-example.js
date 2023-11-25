new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve(1);
  }, 2000);
}).then((number) => {
  console.log('Yay 1! ' + number);
  return number * 2;
})
.then(() => {
  throw new Error('Error!');
})
.then((number) => {
  console.log('Yay 3! ' + number);
})
.catch((error) => {
  console.error('Noo! ' + error.message);
})