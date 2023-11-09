function sendMail(){
    var isButtonDisabled = false;

    if (isButtonDisabled) {
        alert("Please wait for a moment before sending another email.");
        return;
    }else{

    // Disable the button to prevent multiple clicks
    isButtonDisabled = true;

    // Your existing code for sending the email goes here
    (function(){
        emailjs.init('FpmKVa0AqBJJhgXa5');
    })();

    var params = {
        sendername: document.querySelector("#name").value,
        to: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value
    };

    var serviceID = 'service_kvq4bry';
    var templateID = 'template_31u2xu2';
    const loading = document.querySelector('.loading');
    const success = document.querySelector('.sent-message');

    emailjs.send(serviceID, templateID, params)
    .then( res => {
        loading.style.display = 'block';
    }).catch()
    .finally( res => {
        loading.style.display = 'none';
        success.style.display = 'block';
        success.style.background = '#09814A';
        success.style.color = 'white';
        success.style.padding = '4px 0';
        success.style.textAlign = 'center';
        success.style.borderRadius = '4px'
    })
    // Enable the button after a specific timeout (e.g., 5 seconds)
    setTimeout(function() {
        isButtonDisabled = false;
    }, 10000); // 5000 milliseconds = 5 seconds
}
}