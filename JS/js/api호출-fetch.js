
async function getData(){
    const rawResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsonResponse = await rawResponse.json();
    console.log( jsonResponse)
}

getData()