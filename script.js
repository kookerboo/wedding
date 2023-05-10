var mainNav = document.querySelector('.main-nav');
var navBar = document.querySelector('.navbar');
var navList = document.querySelector('.nav-list');
var jsMenu = document.getElementById("js-menu");
var navBarToggle = document.getElementById("js-navbar-toggle");


$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('Token')){
        //get value
        //hide email form
        //prefill form values based on token
        console.log('test');
    }

    
//prefill data function based on token

    $('#emailform').submit(function(e) {
        // Stop form from submitting normally
        e.preventDefault();
        $.ajax({
            type: 'POST',
            cache: false,
            url: 'https://claireandmike.ca/api/get-invite/',
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded',
            data: $(this).serialize(),
            success: function(data, status, xml){
             // do something is successful
             console.log(data.valid);
             $('.rsvp1').append('<p>' + data.valid  + '</p>');
             $('.rsvp1').append('<p>' + data.date  + '</p>');
             $('.')
                    
            },
            error: function(xml, status, error){
             // do something if there was an error
             console.log(xml.responseJSON);
            },

            complete: function(xml, status){
             // do something after success or error no matter what
            }
           });


    }); 

//update/save data function that reloads/calls prefill after using jquery clear function to wipe out form
//   otherwise we would be appending more items to the original prefilled items 


});







//FUNCTIONS
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	  if (prevScrollpos != currentScrollPos) {
		jsMenu.classList.remove("active");
	  } else {
		
	  }
	  prevScrollpos = currentScrollPos;
	}


//COUNTDOWN 
function setCountdown() {
    // Set the date we're counting down to
    var countDownDate = new Date("June 5, 2021 3:30:00").getTime();

    // Update the count down every 1 second
    var countdownfunction = setInterval(function () {

    // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("count").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(countdownfunction);
            document.getElementById("count").innerHTML = "WE'RE MARRIED!";
        }
    }, 1000);
}


navBarToggle.addEventListener("click", function() {
    jsMenu.classList.toggle("active");
  });


setCountdown();
