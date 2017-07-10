function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePresence(targetId) {
  var target = $(targetId);
  if ($(target).val().trim() === "") {
    $(target).parent().addClass("has-error");
    return false;
  } else {
    $(target).parent().removeClass("has-error");
    return true;
  }
}

function hideErrorMessage(){
  $("#message_container").removeClass('has-error');
  $("#message_container").removeClass('success');
  $("#message_container").html();
  $("#growls").remove();
}

function showErrorMessage(message){
  //$("#message_container").addClass('has-error');
  //$("#message_container").html(message);
  $.growl.error({ title: 'Formulario con errores:', message: message, duration: 60000 });
}

function showSuccessMessage(message){
  //$("#message_container").addClass('success');
  //$("#message_container").html(message);
  $.growl.notice({ title: '¡Éxito!', message: message, duration: 60000 });
}

function startLoad() {
  $("#submit_form").attr("disabled", true);
}

function validateForm() {
  var isValid = true;
  var requiredInputs = ["name", "company", "email"];

  for (var i = requiredInputs.length - 1; i >= 0; i--) {
    var inputID = '#contact_form_' + requiredInputs[i];
    isValid = validatePresence(inputID) && isValid;
  }

  if (isValid) {
    startLoad();
    hideErrorMessage();
    $("#contact_form").submit();
  } else {
    showErrorMessage('Ingrese los campos requeridos');
    return false;
  }
  if ( $(".scroll-section-three.fp-section").hasClass("active") ) {
    $(".down-arrow").addClass("hide");
  }
}
