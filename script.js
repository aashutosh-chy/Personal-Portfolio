async function sendMail(name,email,message){
    await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
}

function initEmail(){
   emailjs.init("NFmBulCNn4v1bbvBZ")
}