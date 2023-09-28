$(document).ready(function(){

    console.log('Ready')})

    //  Fetch the current date and update it in the DOM
    $(document).ready(function(){
    $("#display_date").html(display_date)
})
$(function () {
    $("#predict_button").click(function () {
        //AJAX call
        let input_data={
            "text":$("#text").val()
        }
        console.log(input_data)

        $.ajax({
            type: 'POST',
            url: "/predict-emotion",
            data: JSON.stringify(input_data),
            dataType: "json",
            contentType: 'application/json',
            success: function (result)
            
            
            
              {
                
                // Result Received From Flask ----->JavaScript
                predicted_emotion = result.data.predicted_emotion
                emo_url = result.data.predicted_emotion_img_url

                // Display Result Using JavaScript----->HTML
                predicted_emotion = result.data.predicted_emotion
                emo_url = result.data.predicted_emotion_img_url

            },
            //Error function
            error: function (result) {
                alert(result.responseJSON.message)
            }
        });
    });
})


