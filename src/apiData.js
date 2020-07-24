let data;
const url = `https://api.newsapi.org/news/64a1fb18a2b1438f86261e213a53547c`
fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })