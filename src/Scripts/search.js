$(document).ready(function () {

    const mystorage = window.sessionStorage;

    const URL = 'https://ltv-data-api.herokuapp.com/api/v1/records.json'

    
    $('form.ajax').on('submit', function () {

        
        var that = $(this),
            url = URL,
            type = that.attr('method'),
            data = {'email':'doesmith@example.com'};

        
        that.find('[name]').each(function (index, value) {
            var that = $(this),
            name = that.attr('email'),
            value = that.val();
            data[email] = value;
        })

        $.ajax({
            url:url,
            type:type,
            data:data,
            success:function (res) {
                sessionStorage.setItem('userData', JSON.stringify(res))
                console.log(res)
               //window.location = 'src/Templates/results.html';
                setDataElements();
                document.getElementById('search-input').innerHTML = "";
            },
            error :function (err) {
                console.log(err);
            }
        });
            return false;
        
    })

    function setDataElements() {
        
        var userData = JSON.parse(sessionStorage.getItem('userData'));
        console.log(userData.email)
        document.getElementById('userDescription').innerHTML = userData.name;
    }

    // emailForm.onsubmit = async (e) =>{
    //     e.preventDefault();

    //     let response = await fetch(URL, {
    //         method: 'GET',
    //         data: new FormData(emailForm)
    //       });
        
    //     let result = await response.json();

    //       console.log(result);
    // }

  
});


 