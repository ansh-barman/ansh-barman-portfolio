const ab = document.getElementById("welcome_text");

gsap.to("#nav",{
    background:"#000",
    duration:0.5,
    height:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers: true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

let state = 0;

function changeText() {
  if (state == 0) {
    ab.innerHTML = "Good Morning!";
    state = 1;
  } else if (state == 1) {
    ab.innerHTML = "おはよう";
    state = 0;
  }
}

//for contact form email

function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "barmanansh99@gmail.com",
    Password : "8EBADE5682B4854E3BB8F8E01D07E8FD3475",
    To : 'barmanansh99@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact Form Enquiry",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}