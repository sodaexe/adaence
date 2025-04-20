document.querySelector('#search-button').addEventListener('click', (e) => {
  e.preventDefault();

  let activity = document.querySelector('#activity-type').value;
  let location = document.querySelector('#location').value;

  if (location.length === 0) {
    document.querySelector('.error-message').style.display = 'block';
  } else {
    window.location.href = `pages/search.html?activity=${activity}&location=${location}`;
  }
});
