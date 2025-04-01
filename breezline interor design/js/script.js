function sendMail() {
    let parms = {
        Name: document.getElementById("Name").value,
        Email: document.getElementById("Email").value,
        Phone: document.getElementById("Phone").value,
        Message: document.getElementById("Message").value
    };

    emailjs.send("service_paclqiy", "template_v7wyjnn", parms)
        .then(function(response) {
            console.log("✅ Email Sent Successfully!", response);
            alert("Email has been sent successfully!");
        })
        .catch(function(error) {
            console.log("❌ Failed to send email.", error);
            alert("Error sending email. Please try again.");
        });
}
