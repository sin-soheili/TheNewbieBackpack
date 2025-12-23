function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

const text = "COMMAND LINE INTERFACE ONLINE... AWAITING INPUT...";
const typingElement = document.getElementById("typing-text");
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typingElement.textContent = "> " + text.substring(0, i + 1);
    i++;
    setTimeout(typeWriter, 50); 
  }
}
typingElement.textContent = "> READY. GO.";


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const form = event.target;
    const formData = new FormData(form);
    
    const data = {};
    formData.forEach((value, key) => (data[key] = value));

    const endpoint = "https://formsubmit.co/sinsoheili11@gmail.com";

    fetch(endpoint, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert(" Message Has Been Sent ! USER_ACKNOWLEDGED.");
            form.reset();
        } else {
            alert("USER_ERROR: Could not send message.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Network Error . USER_ERROR.");
    });
});