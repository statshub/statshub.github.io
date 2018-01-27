(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    //on get started click
    $('#download-button').click(function() {
       //optionally remove the 500 (which is time in milliseconds) of the
       //scrolling animation to remove the animation and make it instant
       $('html, body').animate({
            scrollTop: $("#quick_intro").offset().top
        }, 1000);
    });
    // for resize of text area
    $('#textarea1').trigger('autoresize');

    var hash = window.location.hash;
    if($(hash).length)
    {
      $('html, body').animate({
           scrollTop: $(hash).offset().top
       }, 1000);
    }
    $('#feedback_form').submit(function(event){
      event.preventDefault();
      var f_name = $("#first_name").val();
      var l_name = $("#last_name").val();
      var yemail = $("#email_id").val();
      var tele_id = $("#tele_id").val();
      var f_msg = $("#textarea1").val();
      $("#newuserdiv").html('<p class="center-align">We are uploading your details, please wait.</p><div class="progress"><div class="indeterminate"></div></div>');
      $.ajax({
        url: "https://mandrillapp.com/api/1.0/messages/send.json",

        // The name of the callback parameter, as specified by the YQL service
        jsonp: "c",

        // Tell jQuery we're expecting JSONP
        dataType: "jsonp",

        // Tell YQL what we want and that we want JSON
        data: {
            "key": "xSOd2emthJ0aDh7eRdDm4g",
            "message": {
              "html": "<p>Hi Sylvia,<br><br>You got a feedback from Stats Hub!<br><br>Feedback Details:<br>First Name: "+String(f_name)+"<br>Last Name: "+String(l_name)+"<br>Email: "+String(yemail)+"<br>Telephone: "+String(tele_id)+"<br>Message: "+String(f_msg)+"<br><br>---End of Feedback---<br></p>",
              "subject": "Feedback from Stats Hub",
              "from_email": "admin@israce2017.org",
              "from_name": "Superman",
              "to": [
                  {
                      "email": "sylvia.jayakumar@gmail.com",
                      "name": "Sylvia",
                      "type": "to"
                  }
              ]
            }
        },

        // Work with the response
        success: function( response ) {
            console.log( response ); // server response
        },
        error: function(data) {
          if(data.status==200)
          {
            $("#newuserdiv").html('<br><br><h4 class="center-align"><b>Thank you!</b></h4>');
          }
        }
      });
    });


    $('#getintouch_form').submit(function(event){
      event.preventDefault();
      var full_name = $("#full_name").val();
      var g_yemail = $("#g_yemail").val();
      var g_tele = $("#g_tele").val();
      var g_sub = $("#g_sub").val();
      var g_msg = $("g_msg").val();
      $("#new_msg_div").html('<p class="center-align">We are uploading your details, please wait.</p><div class="progress"><div class="indeterminate"></div></div>');
      $.ajax({
        url: "https://mandrillapp.com/api/1.0/messages/send.json",

        // The name of the callback parameter, as specified by the YQL service
        jsonp: "c",

        // Tell jQuery we're expecting JSONP
        dataType: "jsonp",

        // Tell YQL what we want and that we want JSON
        data: {
            "key": "xSOd2emthJ0aDh7eRdDm4g",
            "message": {
              "html": "<p>Hi Sylvia,<br><br>You got a message from Stats Hub!<br><br>Message Details:<br>Full  Name: "+String(full_name)+"<br>Email: "+String(g_yemail)+"<br>Telephone: "+String(g_tele)+"<br>Subject: "+String(g_sub)+"<br>Message: "+String(g_msg)+"<br><br>---End of Message---<br></p>",
              "subject": "Message from Stats Hub",
              "from_email": "admin@israce2017.org",
              "from_name": "Superman",
              "to": [
                  {
                      "email": "sylvia.jayakumar@gmail.com",
                      "name": "Sylvia",
                      "type": "to"
                  }
              ]
            }
        },

        // Work with the response
        success: function( response ) {
            console.log( response ); // server response
        },
        error: function(data) {
          if(data.status==200)
          {
            $("#new_msg_div").html('<br><br><h4 class="center-align"><b>Thank you, we will get back soon!</b></h4>');
          }
        }
      });
    });




  }); // end of document ready
})(jQuery); // end of jQuery name space
