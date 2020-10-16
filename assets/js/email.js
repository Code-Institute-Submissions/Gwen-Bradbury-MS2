function sendMail(contactForm) {
    emailjs.send("gmail" , "messagejs", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message_request": contactForm.messagesummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        }, function(error) {
            console.log("FAILED", error);
        })
        return false;
}