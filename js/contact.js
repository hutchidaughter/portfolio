let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phoneNumber");
let dateForOurMeeting = document.getElementById("dateForOurMeeting");
let additionalComments = document.getElementById("additionalComments");
let submitButton = document.getElementById("submitButton");

// formWrapper.addEventListener("onlick", (event) => {
//   event.preventDefault();
//   console.log(firstName);
// });

// (function() {
//     $('form > input').keyup(function() {
//         var empty = false;
//         $('form > input').each(function() {
//             if ($(this).val() == '')
//             {
//                 empty = true;
//             }
//         });
//         if (empty)
//         {
//             $('#register').attr('disabled', 'disabled');
//         }
//        else
//         {
//             $('#register').removeAttr('disabled');
//         }
//     });
//     })()

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
