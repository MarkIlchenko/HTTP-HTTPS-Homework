const httpBtn = document.getElementById("http-btn");
const httpsBtn = document.getElementById("https-btn");

httpBtn.addEventListener("click", () => redirectToSite("http://fonts.google.com/"));
httpsBtn.addEventListener("click", () => redirectToSite("fonts.google.com"));

function redirectToSite(url) {
    // Check if http or https is specified in url
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        // If not specified, add https as default
        url = "https://" + url;
    }
    
    // Redirect to the specified url
    window.location.href = url;
}
