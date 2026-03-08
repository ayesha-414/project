from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
# In your app.py, make sure you have this line updated with the actual Vercel URL:
# This allows ANY website to talk to your backend
CORS(app, resources={r"/api/*": {"origins": "*"}})
@app.route('/api/contact', methods=['POST'])
def contact_form():
    try:
        data = request.json
        sender_email = data.get('email')
        sender_name = data.get('name')
        selected_course = data.get('course')
        message_content = data.get('message')
        
        if not all([sender_email, sender_name, selected_course, message_content]):
            return jsonify({"message": "All fields are required"}), 400
        
        # Routing Logic
        common_mail1 = 'subhaharinip@gmail.com'
        common_mail2 = 'ayeshuayesha414@gmail.com'
        common_mail3 = 'supreetagopal19@gmail.com'
        
        if selected_course == "B.Sc Applied Science":
            target_mail = '24pw35@psgtech.ac.in'
        elif selected_course == "M.Sc Fashion Design & Merchandising":
            target_mail = '24pw33@psgtech.ac.in'
        else:
            target_mail = '24pw07@psgtech.ac.in'

        recipients = [target_mail, common_mail1 ,common_mail2, common_mail3]
        
        html_template = f"""
        <html>
            <body style="font-family: sans-serif; color: #333;">
                <h2 style="color: #007bff;">New Inquiry: {selected_course}</h2>
                <p><strong>From:</strong> {sender_name} ({sender_email})</p>
                <p><strong>Course Selected:</strong> {selected_course}</p>
                <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #007bff;">
                    {message_content}
                </div>
            </body>
        </html>
        """
        
        msg = MIMEMultipart("alternative")
        msg['Subject'] = f"Course Inquiry [{selected_course}] - {sender_name}"
        msg['From'] = os.getenv("MAIL_USERNAME")
        msg['To'] = ", ".join(recipients)
        msg['Reply-To'] = sender_email
        msg.attach(MIMEText(html_template, "html"))
        
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(os.getenv("MAIL_USERNAME"), os.getenv("MAIL_PASSWORD"))
            server.sendmail(os.getenv("MAIL_USERNAME"), recipients, msg.as_string())
        
        return jsonify({"message": "Message sent successfully"}), 200
        
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": "Failed to send", "error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)