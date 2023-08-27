function redirectToGoogleSearch() {
    let searchWord = document.getElementById("searchWord").value;
    let googleSearchURL = "https://www.google.com/search?q=" + encodeURIComponent(searchWord);
    window.location.href = googleSearchURL;
}