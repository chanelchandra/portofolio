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
    // 1. Simply scroll the entire page back to the top (0,0)
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // 2. Optional: If you find it's not "snapping" perfectly, 
    // you can force the snap after a tiny delay
    setTimeout(() => {
        const lockScreen = document.getElementById('lock-screen');
        lockScreen.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}
