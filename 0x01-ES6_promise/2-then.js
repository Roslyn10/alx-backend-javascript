export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    promise.then(
      (respose) => {
      resolve({ status: 200, body: 'Success' });
      },
      (error) => {
        console.log("Got a response from the API");
        reject(new Error());
      }
    );
  });
}
