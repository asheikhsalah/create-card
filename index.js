if (typeof window !== 'undefined') {
  console.log('You are on the browser')
} else {
  console.log('You are on the server')
}

const fetch = require ("isomorphic-fetch")

class Card {
  constructor(jsonres) {
    this.id = jsonres.id
    this.kids = jsonres.kids
    this.parent = jsonres.parent
    this.text = jsonres.text
  }
  createCard() {
    const container = document.createElement("div")
    const text = document.createElement("p")
    const id = document.createElement("p")

    text.innerText = `${this.text}`
    
  }

}

async function displayInfo(item) {

  try{
    const response= await fetch (`https://hacker-news.firebaseio.com/v0/item/${item}.json`);
    const data = await response.json();
    console.log(data)} catch(error) {
      console.log(error, "error")}
  }




 displayInfo(8855);
