# 🤖 AI Disease Predictor v2.0

> **Advanced Medical Intelligence Powered by Machine Learning**

A cutting-edge web application that leverages AdaBoost machine learning algorithms to provide accurate disease predictions based on comprehensive medical parameters. Built with modern AI/ML aesthetics and advanced UX design.

![AI Disease Predictor](https://img.shields.io/badge/AI-Powered-blue?style=for-the-badge&logo=robot)
![Flask](https://img.shields.io/badge/Flask-2.3.3-green?style=for-the-badge&logo=flask)
![Python](https://img.shields.io/badge/Python-3.8+-blue?style=for-the-badge&logo=python)
![Machine Learning](https://img.shields.io/badge/ML-AdaBoost-orange?style=for-the-badge&logo=tensorflow)

## ✨ Features

### 🧠 **Advanced AI/ML Capabilities**
- **AdaBoost Algorithm**: State-of-the-art ensemble learning for accurate predictions
- **24 Medical Parameters**: Comprehensive analysis of blood markers, vital signs, and lab values
- **Real-time Processing**: Instant predictions with confidence scoring
- **API Endpoint**: RESTful API for integration with other systems

### 🎨 **Modern UI/UX Design**
- **Dark Theme**: Eye-friendly dark mode with gradient accents
- **Animated Background**: Floating geometric shapes with parallax effects
- **Responsive Design**: Perfect experience on all devices
- **Interactive Elements**: Real-time validation and visual feedback
- **Loading Animations**: AI-themed processing indicators

### 🔒 **Security & Reliability**
- **CSRF Protection**: Built-in security against cross-site request forgery
- **Input Validation**: Comprehensive validation for all medical parameters
- **Error Handling**: Graceful error management with user-friendly messages
- **Logging**: Detailed logging for debugging and monitoring

### 📱 **User Experience**
- **Keyboard Shortcuts**: Ctrl+Enter to submit, Escape to clear
- **Form Validation**: Real-time input validation with visual indicators
- **Notifications**: Toast notifications for user feedback
- **Accessibility**: WCAG compliant design with proper ARIA labels

## 🚀 Quick Start

### Prerequisites
- Python 3.8 or higher
- pip (Python package installer)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/disease-predictor.git
   cd disease-predictor
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**
   ```bash
   python app.py
   ```

5. **Open your browser**
   Navigate to `http://localhost:5000`

## 📊 Medical Parameters

The application analyzes 24 comprehensive medical parameters:

| Parameter | Description | Normalized Range |
|-----------|-------------|------------------|
| Glucose Level | Blood glucose concentration | 0.00 - 1.00 |
| Cholesterol | Total cholesterol levels | 0.00 - 1.00 |
| Hemoglobin | Blood hemoglobin content | 0.00 - 1.00 |
| Platelets | Platelet count | 0.00 - 1.00 |
| White Blood Cells | WBC count | 0.00 - 1.00 |
| Red Blood Cells | RBC count | 0.00 - 1.00 |
| Hematocrit | Blood hematocrit percentage | 0.00 - 1.00 |
| MCV | Mean Corpuscular Volume | 0.00 - 1.00 |
| MCH | Mean Corpuscular Hemoglobin | 0.00 - 1.00 |
| MCHC | Mean Corpuscular Hemoglobin Concentration | 0.00 - 1.00 |
| Insulin | Blood insulin levels | 0.00 - 1.00 |
| BMI | Body Mass Index | 0.00 - 1.00 |
| Systolic BP | Systolic Blood Pressure | 0.00 - 1.00 |
| Diastolic BP | Diastolic Blood Pressure | 0.00 - 1.00 |
| Triglycerides | Blood triglyceride levels | 0.00 - 1.00 |
| HbA1c | Glycated hemoglobin | 0.00 - 1.00 |
| LDL Cholesterol | Low-density lipoprotein | 0.00 - 1.00 |
| HDL Cholesterol | High-density lipoprotein | 0.00 - 1.00 |
| ALT | Alanine aminotransferase | 0.00 - 1.00 |
| AST | Aspartate aminotransferase | 0.00 - 1.00 |
| Heart Rate | Resting heart rate | 0.00 - 1.00 |
| Creatinine | Blood creatinine levels | 0.00 - 1.00 |
| Troponin | Cardiac troponin levels | 0.00 - 1.00 |
| C-reactive Protein | CRP levels | 0.00 - 1.00 |

## 🔧 API Usage

### REST API Endpoint

**POST** `/api/predict`

**Request Body:**
```json
{
  "features": [0.73, 0.65, 0.71, 0.86, 0.68, 0.52, 0.29, 0.63, 0.00, 0.79, 0.10, 0.45, 0.55, 0.42, 0.61, 0.50, 0.21, 0.51, 0.06, 0.61, 0.93, 0.09, 0.46, 0.76]
}
```

**Response:**
```json
{
  "prediction": "Disease_Type",
  "confidence": 85.5,
  "success": true
}
```

### Example Usage with cURL
```bash
curl -X POST http://localhost:5000/api/predict \
  -H "Content-Type: application/json" \
  -d '{"features": [0.73, 0.65, 0.71, 0.86, 0.68, 0.52, 0.29, 0.63, 0.00, 0.79, 0.10, 0.45, 0.55, 0.42, 0.61, 0.50, 0.21, 0.51, 0.06, 0.61, 0.93, 0.09, 0.46, 0.76]}'
```

## 🛠️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
SECRET_KEY=your-super-secret-key-change-in-production
FLASK_ENV=development
FLASK_DEBUG=True
```

### Model Configuration

The application uses a pre-trained AdaBoost model stored in `ada_model.pkl`. Ensure this file is present in the root directory.

## 📁 Project Structure

```
DiseasePredictor/
├── app.py                 # Main Flask application
├── ada_model.pkl         # Pre-trained AdaBoost model
├── requirements.txt       # Python dependencies
├── README.md             # Project documentation
├── static/
│   ├── style.css         # Modern CSS with AI/ML theme
│   └── script.js         # Interactive JavaScript features
└── templates/
    ├── index.html        # Main application interface
    ├── 404.html          # Custom 404 error page
    └── 500.html          # Custom 500 error page
```

## 🎯 Key Improvements Made

### 🐛 **Bug Fixes**
- ✅ **Model Loading**: Safe model loading with proper error handling
- ✅ **Input Validation**: Comprehensive validation for all 24 parameters
- ✅ **Error Handling**: Graceful error management with user feedback
- ✅ **CSRF Protection**: Security against cross-site request forgery
- ✅ **Form Validation**: Real-time client-side and server-side validation
- ✅ **Missing Dependencies**: Added Flask-WTF for CSRF protection

### 🎨 **UI/UX Enhancements**
- ✅ **Modern Design**: Dark theme with gradient accents
- ✅ **Animated Background**: Floating geometric shapes with parallax
- ✅ **Interactive Elements**: Real-time validation with visual indicators
- ✅ **Loading Animations**: AI-themed processing overlays
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Accessibility**: WCAG compliant with proper ARIA labels

### 🚀 **Performance & Features**
- ✅ **API Endpoint**: RESTful API for external integrations
- ✅ **Keyboard Shortcuts**: Enhanced user experience
- ✅ **Error Pages**: Custom 404 and 500 error pages
- ✅ **Logging**: Comprehensive logging system
- ✅ **Documentation**: Complete README with usage examples

## 🔮 Future Enhancements

- [ ] **User Authentication**: Secure user accounts and session management
- [ ] **Database Integration**: Store prediction history and user data
- [ ] **Multiple Models**: Support for different ML algorithms
- [ ] **Export Features**: PDF reports and data export
- [ ] **Real-time Updates**: WebSocket integration for live updates
- [ ] **Mobile App**: React Native or Flutter mobile application

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This application is for educational and research purposes only. Medical predictions should not replace professional medical advice. Always consult with qualified healthcare professionals for medical decisions.

## 📞 Support

For support, email support@disease-predictor.com or create an issue in the repository.

---

**Built with ❤️ using Flask, AdaBoost, and modern web technologies** 