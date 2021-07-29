const output = document.querySelector('#output');

async function responseJSON(url) {
  return fetch(url).then(data => {
      return data.json();
  })}

async function getCharacters(num) {
    const result = await responseJSON(`https://swapi.dev/api/films/${num}`);
    output.textContent = '';
    result.characters.forEach(async function (each) {
      const person = await responseJSON(each);
      const id = parseInt((person.url).replace(/\D+/g, ""));
      const data = `
        <div class="item">
          <img class="avatar" src="./image/${id}.jpg" alt="avatar">
            <h1>${person.name}</h1>
          <p><b>Birthday:</b> ${person.birth_year}</p>
          <p><b>Gender:</b> ${person.gender}</p>
        </div>`;

      output.innerHTML += data;
    });
}

document.querySelector('#info').addEventListener('click', () => {
  getCharacters(document.querySelector('select').value);
});

async function getPlanet(url) {
    const data = await responseJSON(url);
    button2.dataset.url = data.next ? data.next : '';
    button3.dataset.url = data.previous ? data.previous : '';
    output.textContent = '';
    data.results.forEach(each => {
      const data = `
        <div class="item">
          <h1>${each.name}</h1>
          <p><b>Climate:</b> ${each.climate}</p>
          <p><b>Population:</b> ${each.population}</p>
        </div>
      `;
      output.innerHTML += data;
    });
}

const button1 = document.querySelector('#planets');
const button2 = document.querySelector('#next');
const button3 = document.querySelector('#previous');

button1.addEventListener('click', () => {
  getPlanet('https://swapi.dev/api/planets/?page=1');
});

button2.addEventListener('click', async (e) => {
  if (e.target.dataset.url) {
    getPlanet(e.target.dataset.url);
  }
});

button3.addEventListener('click', async (e) => {
  if (e.target.dataset.url) {
    getPlanet(e.target.dataset.url);
  }
});
