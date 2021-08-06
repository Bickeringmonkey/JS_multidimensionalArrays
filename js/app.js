const playlist = [
    ['Bad', 'Michael Jackson', '2:05'],
    ['Amazed By You', 'Lonestar', '4:02'],
    ['Lego House', 'Ed Sheran', '3:25'],
    ['Evita', 'Madonna', '5:02'],
    ['Truely, Madly, Deeply', 'Savage Garden', '2:23'],
    ['Lifted', 'The Lighthouse Family', '3:02']
  ];

  function createListItems(arr) {
    let items = '';
    for ( let i = 0; i < arr.length; i++) {
        items += `<li>${arr[i][0]}, By ${arr[i][1]} - ${arr[i][2]}</li>`;
    }
    return items;
  }

  document.querySelector('main').innerHTML = `
  <ol>
    ${createListItems(playlist)}
  </ol>
  `;