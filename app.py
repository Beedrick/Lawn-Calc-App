from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Pricing: per m² and one-off costs
SERVICE_PRICING = {
    "Lawn Mowing": {"type": "per_m2", "rate": 0.15},
    "Gardening Services": {"type": "per_m2", "rate": 0.10},
    "Hedge and Tree Trimming": {"type": "one_off", "rate": (65, 100)},
    "Rubbish Removal (Big Clean-Ups)": {"type": "one_off", "rate": (200, 500)},
    "Water Blasting": {"type": "one_off", "rate": (100, 200)},
    "Yard Cleaning": {"type": "one_off", "rate": (55, 90)}
}

@app.route("/")
def hello():
    return "Hello, World!"

@app.route("/calculate-quote", methods=["POST"])
def calculate_quote():
    data = request.json
    print("Received data:", data)

    size_m2 = float(data.get("size_m2", 0))
    grass_height = data.get("grass_height", "short")
    selected_services = data.get("selected_services", [])

    # Height multipliers
    height_multiplier = {"short": 1, "medium": 1.15, "overgrown": 2.0}

    estimated_cost = 0

    for service in selected_services:
        if service in SERVICE_PRICING:
            service_type = SERVICE_PRICING[service]["type"]
            rate = SERVICE_PRICING[service]["rate"]

            if service_type == "per_m2":
                estimated_cost += rate * size_m2
            elif service_type == "one_off":
                estimated_cost += sum(rate) / 2  # Use an average for now

    estimated_cost *= height_multiplier.get(grass_height, 1)

    return jsonify({"estimated_cost": round(estimated_cost, 2)})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
