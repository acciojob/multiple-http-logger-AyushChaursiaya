const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

// Don't change the above line
// Write your code here
async function fetchAndLog(url) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		console.log(`Response from ${url}:`, data);
	}catch(error) {
		console.log(`Error fatching ${url}:`, error);
	}
}

urls.forEach((url) => fetchAndLog(url));