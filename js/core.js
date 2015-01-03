;(function (window, document, undefined) {
  'use strict';
  
  var
    user,
    setNewMessage;
  
  /**
   * Insert a new message block on DOM
   * @param {Object} message [[an object that have userName and text]]
   */
  setNewMessage = function (message) {
    var elClone = $('.chat-line-clone').clone(),
        color = '';
    
    if (user.itsMe(message.user.id)) {
      color = message.user.color;
    }

    elClone
      .removeClass('hide')
      .removeClass('chat-line-clone')
      .addClass('space-bottom')
      .find('.chat-name')
        .text(message.user.name);

    elClone
      .find('.chat-message')
        .text(message.text);

    elClone
      .find('.label')
        .addClass(color);

    $('#chat-room-wrap').append(elClone);
    
    Util.updateScroll($('.chat-room'));
  };


  /**
   * Listener for #js-btn-enter-chat, when clicked
   * will verify if fill all requireds fields and
   * create a new user
   */
  $('#js-btn-enter-chat').on('click', function (e) {
    $('#js-alert').addClass('hide');
    
    if ($('#language').val() === '' || $('#name').val() === '') {
      $('#js-alert').removeClass('hide');
    } else {
      $('#login-wrap').hide();
      $('#chat-room-wrap').show();
      
      user = new User($('#name').val(), $('#language').val());
      Recognition.init();
    }
    
    e.preventDefault();
  });
  

  /**
   * [[Description]]
   * @param {[[Type]]} e              [[Description]]
   * @param {[[Type]]} translatedText [[Description]]
   * @param {[[Type]]} user           [[Description]]
   */
  $(document).on('translate-finish', function (e, translatedText, user) {
    setNewMessage({
      user: user,
      text: translatedText
    });

    Synthesis.speech(translatedText, user.language);
  });
  
  $(document).on('recognition-finish', function (e, text) {
    var message = {
      user: user,
      text: text
    };
    
    socket.emit('chat message', message);
  });
  
  socket.on('chat message', function (response) {
    if (user.itsMe(response.user.id)) {
      setNewMessage(response);
    } else {
      Translate.getTranslation(response.text, user);
    }
  });
})(window, document);