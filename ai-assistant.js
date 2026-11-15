import { pipeline } from
"https://cdn.jsdelivr.net/npm/@huggingface/transformers@4";

const MODEL_ID =
"onnx-community/Qwen2.5-0.5B-Instruct";

const status = document.getElementById("aiStatus");
const chat = document.getElementById("aiChat");
const loadButton = document.getElementById("aiLoadButton");
const sendButton = document.getElementById("aiSendButton");
const clearButton = document.getElementById("aiClearButton");
const input = document.getElementById("aiQuestion");

let generator = null;
let busy = false;

const conversation = [
    {
        role: "system",
        content:
        "You are LinguaLearn AI Tutor. Teach English, grammar, vocabulary, science and programming. Explain patiently using simple examples. Support English and Bengali. Be honest when uncertain."
    }
];

function showMessage(role, text) {
    const item = document.createElement("div");

    item.className =
        "ai-message " +
        (role === "user" ? "ai-user" : "ai-response");

    item.textContent =
        (role === "user" ? "You: " : "AI Tutor: ") + text;

    chat.appendChild(item);
    chat.scrollTop = chat.scrollHeight;
}

loadButton.addEventListener("click", async () => {
    if (generator || busy) return;

    busy = true;
    loadButton.disabled = true;

    try {
        status.textContent =
            "Starting model download. Please wait...";

        generator = await pipeline(
            "text-generation",
            MODEL_ID,
            {
                dtype: "q4",
                progress_callback: (progress) => {
                    if (progress.status === "progress") {
                        const percent = Math.round(
                            progress.progress || 0
                        );

                        status.textContent =
                            "Downloading model: " +
                            percent + "%";
                    } else if (progress.status === "done") {
                        status.textContent =
                            "A model file has downloaded. Preparing AI...";
                    }
                }
            }
        );

        status.textContent =
            "AI model loaded! Ask your first question.";

        sendButton.disabled = false;
        loadButton.textContent = "Model Loaded";

    } catch (error) {
        generator = null;

        status.textContent =
            "Model loading failed: " + error.message;

        loadButton.disabled = false;
    }

    busy = false;
});

sendButton.addEventListener("click", async () => {
    const text = input.value.trim();

    if (!text || !generator || busy) return;

    busy = true;
    sendButton.disabled = true;

    input.value = "";

    showMessage("user", text);

    conversation.push({
        role: "user",
        content: text
    });

    status.textContent = "Generating your answer...";

    try {
        const messages = [
            conversation[0],
            ...conversation.slice(-6)
        ];

        const result = await generator(messages, {
            max_new_tokens: 100,
            temperature: 0.7,
            do_sample: true
        });

        const generated = result[0].generated_text;

        const answer = Array.isArray(generated)
            ? generated[generated.length - 1].content
            : generated;

        conversation.push({
            role: "assistant",
            content: answer
        });

        showMessage("assistant", answer);

        status.textContent = "Answer generated.";

    } catch (error) {
        conversation.pop();

        status.textContent =
            "Generation error: " + error.message;
    }

    busy = false;
    sendButton.disabled = false;
});

clearButton.addEventListener("click", () => {
    conversation.splice(1);

    chat.textContent =
        "Chat cleared. Ask a new question!";
});
      
