function SendEmail() {

    var email = document.getElementById('email').value;
    var msg = document.getElementById('message').value;
    var name = document.getElementById('name').value;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "manasvijoshi63@gmail.com",
        Password: "12F19CAB284FF53D03975BD1B0BD1C863D1A",
        To: 'manasvijoshi63@gmail.com',
        From: "manasvijoshi63@gmail.com",
        Subject: "Reply",
        Body: "A visitor just submitted your form"+"<br/>Name: "+name+"<br/>Email: "+email+"<br/>Message: "+msg
    }).then(
        message => alert(message)
    );
}