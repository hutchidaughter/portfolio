let gitPicture = document.getElementById("gitPicture");
let profileUrl = `https://api.github.com/users/hutchidaughter`;
fetch(profileUrl)
  .then((response) => response.json())
  .then((data) => {
    gitPicture.innerHTML = `<img src="${data.avatar_url}" alt="Company Picture">`;
  });
