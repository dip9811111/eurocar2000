// document.addEventListener("DOMContentLoaded", function() {
//     setTimeout(function() {
//       document.getElementById('discount-popup').style.display = 'block';
//       document.getElementById('div_transparency').style.display = 'block';
      
//     }, 2500); // Adjust the time delay (in milliseconds) before the popup appears
//   });

document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from Pastebin
    const url = 'https://api.allorigins.win/raw?url=https://pastebin.com/raw/xGTYWwgL';
    const cacheBuster = '&cache=' + new Date().getTime(); // Append current timestamp as cache buster

    fetch(url + cacheBuster) // Replace 'your_pastebin_id' with the actual ID of your Pastebin content
        .then(response => response.text())
        .then(data => {
          // Split the fetched data into lines
          const lines = data.split('\n');
          
          // Extract the relevant information
          const title = lines[0].split(': ')[1];
          const promotion = lines[1].split(': ')[1];
          const code = lines[2].split(': ')[1];
          const discount = lines[3].split(': ')[1];
          const duration = lines[4].split(': ')[1];

          // Update the content of your HTML elements
          document.getElementById('popup_title').innerText = title;
          document.getElementById('popup_promo').innerText = `${promotion}`;
        //   document.getElementById('popup_promo').innerText.style.fontWeight = 'bold';
          document.getElementById('popup_button').innerText = code;
          document.getElementById('popup_sconto').innerText = discount;
          document.getElementById('popup_durata').innerText = duration;

        //   document.querySelector('.popup_text').innerHTML = 
        //   document.querySelector('.popup_button').innerText = code;
        //   document.querySelector('.popup_text.data').innerHTML = `<b>${discount}</b><br>${duration}`;
          if (title.trim() !== '') {
            setTimeout(function() {
              // Display the popup
              document.getElementById('discount-popup').style.display = 'block';
              document.getElementById('div_transparency').style.display = 'block';
            }, 2500); // Adjust the time delay (in milliseconds) before the popup appears
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);

        });
    
    
    
  });
  
  function closePopup() {
    document.getElementById('discount-popup').style.display = 'none';
    document.getElementById('div_transparency').style.display = 'none';
  }
  

