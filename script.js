document.getElementById('jobForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form field values
    const title = document.getElementById('title').value.trim();
    const type = document.getElementById('type').value;
    const department = document.getElementById('department').value;
    const country = document.getElementById('country').value;
    const description = document.getElementById('description').value.trim();
    const openingDate = document.getElementById('opening_date').value;

    let errorMessage = '';

    // Validate required fields
    if (!title) errorMessage += 'Title is required.<br>';
    if (!type) errorMessage += 'Type is required.<br>';
    if (!department) errorMessage += 'Department is required.<br>';
    if (!country) errorMessage += 'Country is required.<br>';
    if (!description) errorMessage += 'Description is required.<br>';
    if (!openingDate) {
        errorMessage += 'Opening date is required.<br>';
    } else {
        const today = new Date().toISOString().split('T')[0];
        if (openingDate > today) {
            errorMessage += 'Opening date cannot be in the future.<br>';
        }
    }

    // Display error message or submit form
    const errorElement = document.getElementById('error_message');
    if (errorMessage) {
        errorElement.innerHTML = errorMessage;
    } else {
        errorElement.innerHTML = '';
        alert('Form submitted successfully!');
        // Here you can submit the form data using AJAX or any other method
    }
});

// Pre-fill the date field with the current date
const today = new Date().toISOString().split('T')[0];
document.getElementById('opening_date').value = today;
