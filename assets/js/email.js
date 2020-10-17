function sendMail(contactForm) {
  emailjs
    .send("gmail", "messagejs", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      message_request: contactForm.messagesummary.value,
    })
    .then(
      function (response) {
        "SUCCESS", response;
        alert("Email sent successfully!");
      },
      function (error) {
        "FAILED", error;
        alert("FAILED!" + error);
      });
  return false;
}
