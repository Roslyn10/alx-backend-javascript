import handleResponseFromAPI from './2-then';

const promise = Promise.resolve();

const successResponse = handleResponseFromAPI(promise);

successResponse
  .then(response => {
    console.log(response); // Log the response to verify the output
    if (response.body === 'success' && response.status === 200) {
      console.log('Test passed');
    } else {
      console.log('Test failed');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

