$(document).ready(function () {

    $('html, body').animate({ scrollTop: 0 }, 'fast');
 
    var userData = JSON.parse(sessionStorage.getItem("userData"));
    const found_text = 'Look at the result below to see the details of the person you\'ve searched for';
    const not_found_text = 'Try starting a new search below';

    if (userData.length != 0) {
        console.log(userData.length);
        document.getElementById("results_count").innerHTML = "1 Result";
        /*
        
            If there's data on session storage, the code below will insert the results found

        */  
        $('#user_name').text(userData.first_name +" "+userData.last_name)
        $("#user_description").text(userData.description);
        $('#user_address').text(userData.address);
        $('#user_email').text(userData.email);
        var relatives = document.getElementById('relatives');
        userData.relatives.forEach(element => {
            var entry = document.createElement('li');
            entry.appendChild(document.createTextNode(element));
            relatives.appendChild(entry)
        });

        var phone_numbers = document.getElementById('phone_numbers');
        userData.phone_numbers.forEach(element =>{
            var entry = document.createElement('li');
            formatted = formatPhoneNumber(element);
            entry.appendChild(document.createTextNode(formatted));
            phone_numbers.appendChild(entry);
        });
        
        $('#response_text').text(found_text);

    } else {
        document.getElementById("results_count").innerHTML = "0 Results";
        document.getElementById("resultTag").style.display = "none";
        $('#response_text').text(not_found_text);
    }

  
    function formatPhoneNumber (str){
        //Filter only numbers from the input
        let cleaned = ('' + str).replace(/\D/g, '');
        
        //Check if the input is of correct length
        let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      
        if (match) {
          return '(' + match[1] + ') ' + match[2] + '-' + match[3]
        };
      
        return null
      };

});
