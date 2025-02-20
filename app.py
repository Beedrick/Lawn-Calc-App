from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/calculate-quote", methods=["POST"])
def calculate_quote():
    data = request.json
    size_m2 = data.get("size_m2", 0)
    grass_height = data.get("grass_height", "short")
    edging = data.get("edging", False)

    base_rate = 0.40  # Example rate per m²
    height_multiplier = {"short": 1, "medium": 1.5, "overgrown": 2.5}
    edging_cost = 10 if edging else 0

    estimated_cost = size_m2 * base_rate * height_multiplier.get(grass_height, 1) + edging_cost
    
    return jsonify({"estimated_cost": round(estimated_cost, 2)})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
