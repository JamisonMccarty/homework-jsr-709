//Have a conversation with yourself!
// 1. Create a click event on the addMessage button
let savedMessages = ["Hello", "Hi"];


$(function onLoad(){
  for (item in savedMessages){
    $('#conversation').append(`<li>${savedMessages[item]}</li>`)
  }
});

$('#addMessage').on("click", function(){
    let newMessage = $('#message').val();
    if(newMessage !==''){
      $('#conversation').append(`<li>${newMessage}</li>`);
      $('#message').val('');
    } else {
      alert("Enter a valid message");
    }
});

// 2. Inside the click event capture the input value of message
// 3. Append the message to conversation
// 4. Clear the input after the user has added a message


// BONUS
// *Bonus* Can you add the some "saved" messaged as an array and append them to the page via the Array on page load?
// *Bonus 2* Can you make it so that the user can not submit the input if there is an empty message?
