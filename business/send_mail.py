from requests import get, post

def send_mail(subject, message):
    mail_data = {
        'recipient': 'mail@mowo.world',
        'subject': subject,
        'content': message,
        'ip': '89.104.69.18',
    }
    print(mail_data)
    request = post("https://sendemail.space/send-email/", data=mail_data)
    print(request.text)

    