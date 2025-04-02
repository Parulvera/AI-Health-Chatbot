// Function to Send Chat Messages
function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const chatContainer = document.getElementById("chatContainer");

    if (!userInput) return;

    // Append user message
    const userMessage = document.createElement("div");
    userMessage.className = "text-right p-2 bg-green-300 rounded-lg my-1";
    userMessage.textContent = userInput;
    chatContainer.appendChild(userMessage);

    // Get AI Response
    setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.className = "text-left p-2 bg-gray-300 rounded-lg my-1";
        botMessage.textContent = getRemedyResponse(userInput.toLowerCase());
        chatContainer.appendChild(botMessage);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1000);

    document.getElementById("userInput").value = "";
}

// Function to Get Remedies
function getRemedyResponse(disease) {
    const remedies = {
        "fever": "Rest, stay hydrated, and take paracetamol.",
        "cold": "Drink warm fluids, rest, and take vitamin C.",
        "headache": "Stay hydrated, rest, and avoid stress.",
        "stomach ache": "Drink ginger tea, avoid spicy foods.",
        "back pain": "Apply heat/cold packs and maintain good posture."
    };
    return remedies[disease] || "Consult a doctor for more information.";
}

// Navigation Functions
function goHome() {
    window.location.href = "index.html";
}

function goBackToReport() {
    window.location.href = "output.html";
}

// Function to Delete Selected Health Entries
function deleteEntry(index) {
    let healthHistory = JSON.parse(localStorage.getItem("healthHistory")) || [];

    if (healthHistory.length > index) {
        healthHistory.splice(index, 1);
        localStorage.setItem("healthHistory", JSON.stringify(healthHistory));
        location.reload();
    }
}
