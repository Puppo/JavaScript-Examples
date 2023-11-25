const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5)
      reject(new Error('Error!'));
    else 
      resolve('Success!');
  }, 2000);
});

myPromise.then((successMessage) => {
  console.log('Yay! ' + successMessage);
})
.catch((errorMessage) => {
  console.error('Noo! ' + errorMessage.message);
})
.finally(() => {
  console.log('Finally!');
});