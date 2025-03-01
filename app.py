from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins

# ✅ Add missing email configurations
app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 587
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USE_SSL"] = False
app.config["MAIL_USERNAME"] = os.getenv("MAIL_USERNAME")  # Your Gmail address
app.config["MAIL_PASSWORD"] = os.getenv("MAIL_PASSWORD")  # Your Gmail App Password
app.config["MAIL_DEFAULT_SENDER"] = os.getenv("MAIL_USERNAME")  # Ensure sender is set

mail = Mail(app)

@app.route("/send-email", methods=["POST"])
def send_email():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    phone = data.get("phone")
    message = data.get("message")
    services = ", ".join(data.get("services", []))

    if not name or not email:
        return jsonify({"error": "Name and Email are required"}), 400

    try:
        msg = Message("New Service Request",
                      sender=app.config["MAIL_DEFAULT_SENDER"],  # ✅ Ensure sender is set
                      recipients=["lawnserviceskiwi@gmail.com"])
        msg.body = f"""
        Name: {name}
        Email: {email}
        Phone: {phone}
        Services: {services}
        
        Message:
        {message}
        """
        mail.send(msg)
        return jsonify({"message": "Email sent successfully!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", 5000)))  # ✅ Make port dynamic for Heroku
