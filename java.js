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

async function unlock() {
    const lockScreen = document.getElementById('lock-screen');
    
    // 1. Pull the lock screen down
    lockScreen.classList.add('active');

    // 2. Wait for the CSS transition to finish (e.g., 500ms)
    await new Promise(resolve => setTimeout(resolve, 500));

    // 3. If you remove the class here, the lock screen will immediately 
    // jump or slide back up. Only remove it if you want it to disappear again!
    lockScreen.classList.remove('active');
}
