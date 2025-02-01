function utcTime() {
    const utcTimeRefresh = document.getElementById("utc-time");
    const now = new Date();
    utcTimeRefresh.textContent = `UTC Time: ${now.toUTCString()}`;
}

utcTime();