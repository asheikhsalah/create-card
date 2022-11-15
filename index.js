if (typeof window !== 'undefined') {
  console.log('You are on the browser')
} else {
  console.log('You are on the server')
}


const fetch = require ("isomorphic-fetch")

async function funcName(item) {
    const response= await fetch (`https://hacker-news.firebaseio.com/v0/item/${item}.json`);
    const data = await response.json();
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode(`${data}`);
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }


 funcName(8855);
