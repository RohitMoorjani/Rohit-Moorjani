function sendMail(){
    var tempParams={
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    emailjs.send('service_cfg3u27','template_ida35sg',tempParams).then(function(res){
        alert("Success");
    })
}