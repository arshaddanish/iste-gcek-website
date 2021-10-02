var form = document.querySelector(".php-email-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.querySelector(".sent-message");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.classList.add("d-block");
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
      status.classList.add("d-block");
    });
}
form.addEventListener("submit", handleSubmit);
