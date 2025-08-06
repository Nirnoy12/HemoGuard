// Disease Predictor - Simple & Elegant JavaScript
class DiseasePredictor {
    constructor() {
        this.initializeElements();
        this.bindEvents();
        this.setupFormValidation();
    }

    initializeElements() {
        this.form = document.querySelector('.prediction-form');
        this.clearBtn = document.getElementById('clearForm');
        this.predictBtn = document.getElementById('predictBtn');
        this.inputs = document.querySelectorAll('input[type="number"]');
    }

    bindEvents() {
        // Form submission
        this.form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        
        // Clear form
        this.clearBtn.addEventListener('click', () => this.clearForm());
        
        // Input validation
        this.inputs.forEach(input => {
            input.addEventListener('input', (e) => this.validateInput(e.target));
            input.addEventListener('blur', (e) => this.validateInput(e.target));
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
    }

    setupFormValidation() {
        // Real-time validation
        this.inputs.forEach(input => {
            input.addEventListener('input', () => {
                this.updateFormValidity();
            });
        });
    }

    validateInput(input) {
        const value = parseFloat(input.value);
        const min = parseFloat(input.min);
        const max = parseFloat(input.max);
        
        if (input.value === '') {
            input.classList.remove('valid', 'invalid');
            return false;
        }
        
        if (isNaN(value) || value < min || value > max) {
            input.classList.remove('valid');
            input.classList.add('invalid');
            return false;
        } else {
            input.classList.remove('invalid');
            input.classList.add('valid');
            return true;
        }
    }

    updateFormValidity() {
        const allValid = Array.from(this.inputs).every(input => this.validateInput(input));
        this.predictBtn.disabled = !allValid;
        
        if (allValid) {
            this.predictBtn.classList.add('ready');
        } else {
            this.predictBtn.classList.remove('ready');
        }
    }

    async handleFormSubmit(e) {
        e.preventDefault();
        
        if (!this.validateForm()) {
            this.showError('Please fill all fields with valid values (0-1)');
            return;
        }

        this.showLoading();
        
        try {
            // Submit form
            this.form.submit();
        } catch (error) {
            this.hideLoading();
            this.showError('An error occurred. Please try again.');
        }
    }

    validateForm() {
        return Array.from(this.inputs).every(input => {
            const value = parseFloat(input.value);
            return !isNaN(value) && value >= 0 && value <= 1;
        });
    }

    showLoading() {
        this.predictBtn.disabled = true;
        
        // Update button text
        const btnText = this.predictBtn.querySelector('.btn-text');
        const spinner = this.predictBtn.querySelector('.loading-spinner');
        
        if (btnText) btnText.style.display = 'none';
        if (spinner) spinner.style.display = 'block';
    }

    hideLoading() {
        this.predictBtn.disabled = false;
        
        // Restore button text
        const btnText = this.predictBtn.querySelector('.btn-text');
        const spinner = this.predictBtn.querySelector('.loading-spinner');
        
        if (btnText) btnText.style.display = 'block';
        if (spinner) spinner.style.display = 'none';
    }

    clearForm() {
        this.inputs.forEach(input => {
            input.value = '';
            input.classList.remove('valid', 'invalid');
        });
        
        this.updateFormValidity();
        this.showSuccess('Form cleared successfully');
    }

    handleKeyboardShortcuts(e) {
        // Ctrl/Cmd + Enter to submit
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            this.form.dispatchEvent(new Event('submit'));
        }
        
        // Escape to clear form
        if (e.key === 'Escape') {
            this.clearForm();
        }
    }

    showError(message) {
        this.showNotification(message, 'error');
    }

    showSuccess(message) {
        this.showNotification(message, 'success');
    }

    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existing = document.querySelector('.notification');
        if (existing) existing.remove();

        // Create notification
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'error' ? 'exclamation-triangle' : 'check-circle'}"></i>
            <span>${message}</span>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--surface);
            border: 1px solid var(--${type === 'error' ? 'error' : 'success'}-color);
            color: var(--${type === 'error' ? 'error' : 'success'}-color);
            padding: 1rem 1.5rem;
            border-radius: 0.75rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            z-index: 1001;
            box-shadow: var(--shadow-lg);
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .btn.ready {
        background: var(--primary-color);
        box-shadow: var(--shadow-lg);
    }
`;
document.head.appendChild(style);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DiseasePredictor();
    
    // Add console message
    console.log('%c🏥 Disease Predictor v2.0', 'color: #2563eb; font-size: 16px; font-weight: bold;');
    console.log('%cPowered by AdaBoost Machine Learning', 'color: #64748b; font-size: 12px;');
}); 