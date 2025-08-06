from flask import Flask, render_template, request
import joblib
import numpy as np

app = Flask(__name__)

# Load the trained model
model = joblib.load("ada_model.pkl")

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get inputs from form and convert to float
        input_features = [float(x) for x in request.form.values()]
        final_features = np.array([input_features])
        
        # Make prediction
        prediction = model.predict(final_features)[0]
        return render_template('index.html', prediction_text=f'Diagnosis: {prediction}')
    except:
        return render_template('index.html', prediction_text="Invalid input or missing fields.")

if __name__ == '__main__':
    app.run(debug=True)
