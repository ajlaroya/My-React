$(document).ready(function () {

    $("form").submit(function (event) {
      var formData = {
        UserName: $("#name").val(),
        Password: $("#password").val(),
      };
  
      $.ajax({
        type: "POST",
        url: "https://xcifytest.azurewebsites.net/home/login",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);
        if (data.ErrCode == 0) {
            console.log("successful")
            window.location.assign("https://xcifytest.azurewebsites.net/home/helloworld");
        }
        else if (data.ErrCode == 1) {
            console.log("failed")
            window.alert("Login failed, please try again");
        }
      });
  
      event.preventDefault();
    });
  });