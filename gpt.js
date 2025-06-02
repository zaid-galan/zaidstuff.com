function askChatGPT() {
    const q = document.getElementById("questionInput").value;
    const encoded = encodeURIComponent(q);
    window.open(`https://chat.openai.com/?q=${encoded}`, '_blank');
  }
document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        askChatGPT();
    }
}