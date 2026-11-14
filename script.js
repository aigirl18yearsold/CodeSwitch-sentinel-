
function analyzeMessage() {
    const message = document.getElementById("message").value.trim();
    const result = document.getElementById("result");

    if (!message) {
        result.textContent = "Please enter a message.";
        return;
    }

    result.textContent =
        "Message received. AI classification model is not connected yet.";
}
