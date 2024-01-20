const sendMsgInfo = document.getElementById('send-form-msg-info')

if(document.location.search === '?mail_status=error'){
    sendMsgInfo.classList.add('send-msg')

    setTimeout(() => {
        sendMsgInfo.classList.remove('send-msg')
    }, 3000)
}