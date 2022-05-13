document.querySelector('button').addEventListener('click', getFetch)

let secretKey = config.myNasaKey;

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=${secretKey}&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        if(data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
        } else if (data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('#content-container').classList.remove('hidden');
        document.querySelector('p').innerText = data.explanation
        document.querySelector('h3').innerText = data.title
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

 