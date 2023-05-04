from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)

def send_email(subject, body, to_email):
    from_email = 'botemailproyecto1qsyo2@gmail.com'
    password = 'xdntitwpumvulplv'

    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = from_email
    msg['To'] = to_email

    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(from_email, password)
            server.sendmail(from_email, to_email, msg.as_string())
        return True
    except Exception as e:
        print(e)
        return False
    

@app.route('/api/send_email', methods=['POST'])
def email_route():
    data = request.get_json()
    asunto = data.get('asunto', '')
    mensaje = data.get('mensaje', '')
    destinatario = data.get('destinatario', '')

    if not asunto or not mensaje or not destinatario:
        return jsonify({'error': 'Invalid input'}), 400

    if send_email(asunto, mensaje, destinatario):
        return jsonify({'status': 'Email sent'})
    else:
        return jsonify({'error': 'Failed to send email'}), 500
    

if __name__ == '__main__':
    app.run(debug=True, port=5000)


