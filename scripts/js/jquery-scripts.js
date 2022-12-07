$document.ready(function () {
    // ajax jquery - submit login form
    $("#login-form").submit(function (e) {
        e.preventDefault();

        var form_data = new FormData($('#login-form')[0]);
        setTimeout(function () {
            $.ajax({
                type: 'POST',
                url: '../php/login.php',
                processData: false,
                contentType: false,
                async: false,
                cache: false,
                data: form_data,
                beforeSend: function () {
                    console.log('beforeSend: Submitting login form');
                },
                success: function (response) {
                    if (response.startsWith("success")) {
                        // get the id in the [] block of the response
                        var id = response.split('[').pop().split(']')[0];
                        // nav to new wishlist
                        window.location.href = 'capture/new-wishlist.html?id='+id;
                    } else {
                        var responseMsg = response.split('[').pop().split(']')[0];
                        alert("error: returning response - an error occured whilst processing the request. \n" + "Response: \n" + responseMsg);
                        console.log("error: returning response - an error occured whilst processing the request.");
                        console.log("Response: \n" + responseMsg);
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log("exception error: " + thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
                }
            });
        }, 1000);
    });
    // ./ ajax jquery - submit login form

    // ajax jquery - submit form data and update ui on return
    $("#wishlist-item-capture-form").submit(function (e) {
        e.preventDefault();

        var form_data = new FormData($('#wishlist-item-capture-form')[0]);
        setTimeout(function () {
            $.ajax({
                type: 'POST',
                url: '../php/submit-wishlist-data.php',
                processData: false,
                contentType: false,
                async: false,
                cache: false,
                data: form_data,
                beforeSend: function () {
                    console.log('beforeSend: submitting activity tracking data [Heart Rate]');
                },
                success: function (response) {
                    if (response.startsWith("success")) {
                        console.log('success: returning response - activity tracking data [Heart Rate]');
                        console.log("Response: " + response);
                        // get the profile image name and append it to the src attribute str
                        // var str = response;
                        // var imgSrcStr = str.split('[').pop().split(']')[0];
                    } else {
                        console.log("error: returning response - activity tracking data [Heart Rate]");
                        console.log("Response: " + response);
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log("exception error: " + thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
                }
            });
        }, 1000);
    });
    // ./ ajax jquery - submit form data and update ui on return
});