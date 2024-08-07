export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    promise.then(
      (respose) => {
      resolve({ status: 200, body: 'Success' });
      },
      (error) => {
        reject(new Error());
      }
    );
	  console.log("Got a response from the API");
  });
}
