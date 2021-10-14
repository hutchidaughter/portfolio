let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phoneNumber");
let dateForOurMeeting = document.getElementById("dateForOurMeeting");
let additionalComments = document.getElementById("additionalComments");
let submitButton = document.getElementById("submitButton");
let formWrapper = document.getElementById("formWrapper");

let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

submitButton.addEventListener("click", (event) => {
  if (
    firstName.value == "" ||
    lastName.value == "" ||
    email.value == "" ||
    dateForOurMeeting.value == "" ||
    phoneNumber.value == ""
  ) {
    event.preventDefault();
    alert("Please complete the entire form prior to submission");
  } else {
    event.preventDefault();
    alert(
      `Thank you, ${firstName.value}! Our appointment has been set for ${dateForOurMeeting.value}`
    );
  }
});
