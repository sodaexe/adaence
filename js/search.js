const urlParams = new URLSearchParams(window.location.search);

let activity = urlParams.get('activity');
let userLocation = urlParams.get('location');

let isSearching = false;

if (activity && userLocation) {
  isSearching = true;
  document.querySelector('#activity-type').value = activity;
  document.querySelector('#location').value = userLocation;
}

const activityData = {
  'Tous les moments possibles': 'all',
  'Un repas': 'meal',
  'Un café/thé': 'teatime',
  'Une sortie culturelle': 'culture',
  'Une ballade': 'walk',
  'Autre activité': 'other',
};

const displayElderCards = (data) => {
  document.querySelector('#search-grid').replaceChildren();

  data.map((elder) => {
    const card = document.createElement('div');
    card.className = 'search-card';

    const image = document.createElement('img');
    image.src = elder.imageUrl;
    image.className = 'search-image';

    // child
    const info = document.createElement('div');
    info.className = 'search-info';

    const typeEl = document.createElement('span');
    typeEl.classList = 'badge badge-success';
    typeEl.innerText = elder.type;

    const elderName = document.createElement('h3');
    elderName.className = 'search-name';
    elderName.innerText = elder.firstname;

    // grandchild
    const details = document.createElement('div');
    details.className = 'search-details';
    const line1 = document.createElement('span');
    line1.innerText = `${elder.job} • ${elder.age}`;
    const line2 = document.createElement('span');
    line2.innerText = elder.city;

    details.appendChild(line1);
    details.appendChild(line2);

    const description = document.createElement('p');
    description.className = 'search-description';
    description.innerText = elder.description;

    const meetButton = document.createElement('a');
    meetButton.classList = 'btn btn-primary';
    meetButton.innerText = 'Programmer un moment';
    meetButton.href = '#';

    // appends
    info.appendChild(typeEl);
    info.appendChild(elderName);
    info.appendChild(details);
    info.appendChild(description);
    info.appendChild(meetButton);

    card.appendChild(image);
    card.appendChild(info);

    document.querySelector('#search-grid').appendChild(card);
  });
};

const loadElders = async (isSearching) => {
  const res = await fetch('/data/elders.json');
  const data = await res.json();

  const filtered = isSearching
    ? data.filter(
        (elder) =>
          activityData[elder.type] === activity && elder.city === userLocation
      )
    : data;

  document.querySelector('#momentsCount').innerText = `${
    filtered.length
  } moment${filtered.length > 1 ? 's' : ''} trouvé${
    filtered.length > 1 ? 's' : ''
  }`;

  displayElderCards(filtered);
};

document.querySelector('#search-button').addEventListener('click', (e) => {
  e.preventDefault();

  activity = document.querySelector('#activity-type').value;
  userLocation = document.querySelector('#location').value;

  if (userLocation.length === 0) {
    document.querySelector('.search-reinit').style.display = 'none';
    document.querySelector('.error-message').style.display = 'block';
  } else {
    document.querySelector('.search-reinit').style.display = 'flex';
    document.querySelector('.error-message').style.display = 'none';
    loadElders(true);
  }
});

loadElders(isSearching);
