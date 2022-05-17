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
          document.querySelector('img').classList.remove('hidden');
          document.querySelector('iframe').classList.add('hidden');
        } else if (data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
          document.querySelector('iframe').classList.remove('hidden');
          document.querySelector('img').classList.add('hidden');
        }
        document.querySelector('#content-container').classList.remove('hidden');
        document.querySelector('p').innerText = data.explanation
        document.querySelector('h3').innerText = data.title
        document.querySelector('a').href = data.url
        // document.querySelector('span').innerText = data.copyright // some of them don't have copyright so it displays undefined, we don't want that so I won't add this until I figure out to fixed that.
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// disables user from being able to select future dates in datepicker

let todayDate = new Date();
let month = todayDate.getMonth() + 1; // current month
let year = todayDate.getFullYear(); // current year
let day = todayDate.getDate(); // current date
if(month < 10){
  month = '0' + month
}
if(day < 10){
  day = '0' + day
}
let maxDate = year + '-' + month + '-' + day;
document.querySelector('#currentDate').setAttribute('max', maxDate);
let date = document.querySelector('#currentDate').value = maxDate;

$(window).load(function() {
  $("body").removeClass("preload");
});
 