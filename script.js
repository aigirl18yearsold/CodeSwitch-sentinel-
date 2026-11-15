
// CodeSwitch Sentinel
// Character-level Multinomial Naive Bayes prototype

const labels = ["EN", "BN", "BN-ROM", "MIXED"];

function normalizeText(text) {
    return text.toLowerCase().trim().replace(/\s+/g, " ");
}

// Extract character patterns of length 2, 3 and 4.
function getNgrams(text) {
    const padded = "  " + normalizeText(text) + "  ";
    const features = new Map();

    for (let n = 2; n <= 4; n++) {
        for (let i = 0; i <= padded.length - n; i++) {
            const gram = padded.substring(i, i + n);
            features.set(gram, (features.get(gram) || 0) + 1);
        }
    }

    return features;
}

function trainModel(data) {
    const model = {};
    const vocabulary = new Set();

    for (const label of labels) {
        model[label] = {
            documents: 0,
            featureCounts: new Map(),
            totalFeatures: 0
        };
    }

    for (const example of data) {
        if (!model[example.label] || !example.text.trim()) {
            continue;
        }

        const classData = model[example.label];
        classData.documents++;

        const features = getNgrams(example.text);

        for (const [gram, count] of features) {
            vocabulary.add(gram);

            classData.featureCounts.set(
                gram,
                (classData.featureCounts.get(gram) || 0) + count
            );

            classData.totalFeatures += count;
        }
    }

    return {
        model,
        vocabulary,
        totalDocuments: data.length
    };
}

function predict(text) {
    const features = getNgrams(text);
    const vocabularySize = trainedModel.vocabulary.size;
    const alpha = 1;

    const scores = {};

    for (const label of labels) {
        const classData = trainedModel.model[label];

        let score = Math.log(
            (classData.documents + alpha) /
            (trainedModel.totalDocuments + alpha * labels.length)
        );

        for (const [gram, count] of features) {
            if (!trainedModel.vocabulary.has(gram)) {
                continue;
            }

            const observed =
                classData.featureCounts.get(gram) || 0;

            const probability =
                (observed + alpha) /
                (classData.totalFeatures + alpha * vocabularySize);

            score += count * Math.log(probability);
        }

        scores[label] = score;
    }

    return Object.entries(scores)
        .sort((a, b) => b[1] - a[1]);
}

// Train when the page loads.
if (!Array.isArray(trainingData) || trainingData.length === 0) {
    throw new Error("Training dataset is missing or empty.");
}

const trainedModel = trainModel(trainingData);

function analyzeMessage() {
    const input = document.getElementById("message");
    const result = document.getElementById("result");

    const message = input.value.trim();

    if (!message) {
        result.textContent = "Please enter a message first.";
        return;
    }

    const predictions = predict(message);
    const bestLabel = predictions[0][0];

    result.textContent =
        "Predicted category: " + bestLabel +
        " | Relative model score: " +
        predictions[0][1].toFixed(2) +
        " | Pilot model: " + trainingData.length +
        " training examples.";
    }
        
