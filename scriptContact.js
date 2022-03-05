function hoverInsta(element) {
  element.setAttribute('src', 'instaIndigo.svg');
}

function unhoverInsta(element) {
  element.setAttribute('src', 'instaWhite.svg');
}

function hoverShop(element) {
  element.setAttribute('src', 'cartIndigo.svg');
}

function unhoverShop(element) {
  element.setAttribute('src', 'cartWhite.svg');
}

// const button = document.querySelector(".btn");

// button.addEventListener('submit', alert("thank you! :)"));

// const form = document.querySelector(".contact_form");
// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const message = document.getElementById("message");

// function sendEmail() {
//   Email.send({
//     secureToken: "6fd42344-b5df-4fea-a3be-acdfe41de7e0",
//     To : 'ds.00.de@gmail.com',
//     From : document.getElementById("email").value,
//     Subject : "new contact message",
//     Body : "name: " + document.getElementById("name").value
//           + "<br> email: " + document.getElementById("email").value
//           + "<br> message: " + document.getElementById("message").value
//   }).then(
//     message => alert(message); // "message sent successfully"
//   );
// }