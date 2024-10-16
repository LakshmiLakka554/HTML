document.getElementById('applyJobForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const firstName = document.getElementById('first_name').value.trim();
    const lastName = document.getElementById('last_name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const zip = document.getElementById('zip').value.trim();
    const country = document.getElementById('country').value;
    const eduLevel = document.getElementById('edu_level').value;
    const eduType = document.getElementById('edu_type').value;
    const resume = document.getElementById('resume').value;
    const jobs = document.getElementById('jobs').selectedOptions.length;
    
    let errorMessage = '';

    // Validate required fields
    if (!firstName) errorMessage += 'First name is required.<br>';
    if (!lastName) errorMessage += 'Last name is required.<br>';
    if (!email) errorMessage += 'Email is required.<br>';
    if (!phone) errorMessage += 'Phone number is required.<br>';
    if (!address) errorMessage += 'Address is required.<br>';
    if (!city) errorMessage += 'City is required.<br>';
    if (!state) errorMessage += 'State is required.<br>';
    if (!zip || isNaN(zip)) errorMessage += 'ZIP Code must be a valid number.<br>';
    if (!country) errorMessage += 'Country is required.<br>';
    if (!eduLevel) errorMessage += 'Education level is required.<br>';
    if (!eduType) errorMessage += 'Education type is required.<br>';
    if (!resume) errorMessage += 'Resume is required.<br>';
    if (jobs === 0) errorMessage += 'Please select at least one job.<br>';
    
    // Additional email and phone validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(email)) {
        errorMessage += 'Please enter a valid email.<br>';
    }

    const phonePattern = /^[0-9]{10}$/;
    if (phone && !phonePattern.test(phone)) {
        errorMessage += 'Please enter a valid 10-digit phone number.<br>';
    }

    // Display error message or submit form
    const errorElement = document.getElementById('error_message');
    if (errorMessage) {
        errorElement.innerHTML = errorMessage;
    } else {
        errorElement.innerHTML = '';
        alert('Form submitted successfully!');
        // Submit form data (AJAX or other method)
    }
});

// Toggle employer and experience fields based on employment checkbox
document.getElementById('employed_flag').addEventListener('change', function() {
    const employedDetails = document.getElementById('employed_details');
    employedDetails.style.display = this.checked ? 'block' : 'none';
});
