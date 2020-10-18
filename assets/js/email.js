/* Send Email Using Emailjs and Message Template */
function sendMail(contactForm) {
  emailjs
    .send("gmail", "messagejs", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      message_request: contactForm.messagesummary.value,
    })
/* Success and Failed Response to User */    
    .then(
      function (response) {
        "SUCCESS", response;
        alert("Email sent successfully!");
      },
      function (error) {
        "FAILED", error;
        alert("FAILED!" + error);
      });
/* Stop the Window Reloading */      
  return false;
}
