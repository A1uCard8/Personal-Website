function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Determine AM or PM
    const period = hours >= 12 ? 'PM' : 'AM';
    
    // Convert hours to standard 12-hour format
    hours = hours % 12 || 12; // If hours is 0, set it to 12
    
    // Add leading zeros to minutes and seconds
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    // Format time string
    const timeString = `TIME IN MINNESOTA IS - ${hours}:${minutes}:${seconds} ${period} CST`;
    clockElement.style.fontStyle = 'italic';
    clockElement.textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display clock immediately

