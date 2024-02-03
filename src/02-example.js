function getPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5)
        reject(new Error('Error!'));
      else 
        resolve('Success!');
    }, 2000);
  });
}

const myPromise = getPromise();
myPromise.then((successMessage) => {
  console.log('Yay! ' + successMessage);
})
.catch((errorMessage) => {
  console.error('Noo! ' + errorMessage.message);
})
.finally(() => {
  console.log('Finally!');
});

async function myAsyncFunction() {
  try {
    const successMessage = await getPromise();
    console.log('Yay! ' + successMessage);
  } catch (error) {
    console.error('Noo! ' + error.message);
  } finally {
    console.log('Finally!');
  }
}

myAsyncFunction();