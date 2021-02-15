$(document).ready(function () {
    $('#ajax-loading-front').hide()

  const URL = "https://ltv-data-api.herokuapp.com/api/v1/records.json";

  
  $("form.ajax").on("submit", function () {
    var that = $(this),
      url = URL,
      type = that.attr("method");
      

    var email = document.getElementById("searchInput").value;
    
    //submits request to API
    $('#ajax-loading-front').show()
    $(document).bind('scroll',function () { 
        window.scrollTo(0,0); 
    });

    $.ajax({
      url: url,
      type: type,
      data: {
        email: email,
      },
      success: function (res) {
        sessionStorage.clear();
        sessionStorage.setItem("userData", JSON.stringify(res));
        
        renderResults();
        
      },
      error: function (err) {
        console.log(err);
      },
    });
    return false;
  });

  //renderResults determines if the search is submited from the 
  //index page or the results page

  function renderResults() {

    pathname = window.location.pathname;
    
    if (pathname != '/index.html' || pathname == '/') {
      window.location.reload(false);
    } else {
      window.location.assign("src/Templates/results.html");
    }

    
  }

});
