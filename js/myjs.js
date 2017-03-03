  $(document).ajaxStart(function(){
  }).ajaxStop(function(){
    console.log("Ajax Stopped.")
  }).ajaxSuccess(function(){
    console.log("Ajax Success")
  }).ajaxComplete(function(){
    console.log("Ajax Completed")
  })

    $.ajax({
      url:"https://public-api.wordpress.com/rest/v1/sites/dotnetask.wordpress.com",
      success: function(data){
        console.log(data)
        $("#id").text(data.ID);
        $("#name").text(data.name);
        $("#desc").text(data.description);
        $("#url").text(data.URL);
        $("#sub").text(data.subscribers_count);


      },
      error: function(){
        $("#id").text("Id not found");
        $("#name").text("Name not found");
        $("#desc").text("Description not found");
        $("#url").text("Url not found");
        $("#sub").text("Subscribers_count not found");

      }
    })
