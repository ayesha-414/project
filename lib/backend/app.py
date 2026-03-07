from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

# Load variables from .env file
load_dotenv()

app = Flask(__name__)

# Enable CORS so your Next.js app (port 3000) can talk to this server (port 5000)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

@app.route('/api/contact', methods=['POST'])
def contact_form():
    """Handle contact form submissions and send email to organizers"""
    try:
        data = request.json
        sender_email = data.get('email')
        sender_name = data.get('name')
        message_content = data.get('message')
        
        if not sender_email or not sender_name or not message_content:
            return jsonify({"message": "All fields are required"}), 400
        
        # The list of people who will receive the contact emails
        recipients = ['24pw35@psgtech.ac.in', '24pw33@psgtech.ac.in', '24pw07@psgtech.ac.in']
        
        # HTML Email Template
        html_template = f"""
        <html>
            <body style="font-family: sans-serif; color: #333;">
                <h2 style="color: #007bff;">New Message from AI4Dev '26</h2>
                <p><strong>From:</strong> {sender_name} ({sender_email})</p>
                <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #007bff;">
                    {message_content}
                </div>
                <p style="font-size: 12px; color: #666; margin-top: 20px;">
                    Reply directly to {sender_email} to respond.
                </p>
            </body>
        </html>
        """
        
        # Prepare the email
        msg = MIMEMultipart("alternative")
        msg['Subject'] = f"AI4Dev Contact Form - {sender_name}"
        msg['From'] = os.getenv("MAIL_USERNAME")
        msg['To'] = ", ".join(recipients)
        msg['Reply-To'] = sender_email
        
        msg.attach(MIMEText(html_template, "html"))
        
        # Connect to Gmail SMTP server
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(os.getenv("MAIL_USERNAME"), os.getenv("MAIL_PASSWORD"))
            server.sendmail(os.getenv("MAIL_USERNAME"), recipients, msg.as_string())
        
        return jsonify({"message": "Message sent successfully"}), 200
        
    except Exception as e:
        print(f"Error occurred: {e}")
        return jsonify({
            "message": "Failed to send message",
            "error": str(e)
        }), 500

if __name__ == '__main__':
    # Run on port 5000
    app.run(port=5000, debug=True)