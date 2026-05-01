// Time
function startTime() {
    const today = new Date();

    // Get local time string
    let timeString = today.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    let dateString = today.toLocaleDateString('en-GB', {
        weekday: 'long', 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric'
    })

    document.getElementById('date').innerHTML = dateString;
            
    // Update the HTML element with the new time
    document.getElementById('clock').innerHTML = timeString;
            
    // Refresh the function every 1000ms (1 second)
    setTimeout(startTime, 1000);
}

function unlock() {
    setTimeout(() => {
        const lockScreen = document.getElementById('lock-screen');
        lockScreen.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}
