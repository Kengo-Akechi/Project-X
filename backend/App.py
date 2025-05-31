# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from frontend (CORS fix)

@app.route('/detect_mood', methods=['POST'])
def detect_mood():
    data = request.json
    text = data.get('text', '').lower()

    # Simple mood detection
    if any(word in text for word in ["tired", "overwhelmed", "worried", "scared"]):
        mood = "Anxious"
        recs = [
            "5-minute breathing exercise",
            "Soothing lofi playlist",
            "Journal Prompt: 'What are you afraid of right now, and what can you control?'"
        ]
    else:
        mood = "Neutral"
        recs = ["Take a walk", "Drink some water", "Stretch for 5 minutes"]

    return jsonify({
        "mood": mood,
        "recommendations": recs
    })

if __name__ == '__main__':
    app.run(debug=True)
