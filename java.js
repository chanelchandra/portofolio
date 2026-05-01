// Time
function startTime() {
    const today = new Date();

    // Get local time string (e.g., "12:30:45 PM")
    let timeString = today.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
            
    // Update the HTML element with the new time
    document.getElementById('clock').innerHTML = timeString;
            
    // Refresh the function every 1000ms (1 second)
    setTimeout(startTime, 1000);
}