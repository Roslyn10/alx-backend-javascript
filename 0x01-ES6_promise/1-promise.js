export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;

    if (true) {
      resolve("{ status: 200", "body: 'Success' } ");
    }
    if (false) {
      reject("The fake API is not working currently");
    }
  });
}
