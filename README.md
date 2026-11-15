# LinguaLearn × CodeSwitch Sentinel 🌍

**Learn English. Understand Languages.**

An educational web prototype combining English-learning activities with a machine-learning-based language classification experiment for English, Bangla, Romanized Bangla, and mixed-language text.

## 🚀 Project Overview

LinguaLearn is an English-learning platform designed with Bangla-speaking learners in mind.

It combines two main components:

### 1. LinguaLearn — English Learning

- Vocabulary lessons
- Basic English grammar
- Sentence-learning activities
- Interactive quizzes
- XP-based learning progress

### 2. CodeSwitch Sentinel — Language Detection

A character-level Multinomial Naive Bayes prototype that classifies text into four categories:

| Label | Description |
|---|---|
| EN | English |
| BN | Bangla written in Bangla script |
| BN-ROM | Bangla written using Latin characters |
| MIXED | Text combining Bangla and English |

## 🧠 Technical Approach

The language classifier uses:

- Character-level n-grams (2, 3, and 4 characters)
- Multinomial Naive Bayes
- Laplace smoothing
- Log-probability scoring
- A small researcher-written pilot dataset

The classifier is trained directly in the browser using JavaScript.

## 🛠️ Technologies

- HTML
- CSS
- JavaScript
- GitHub Pages

## 📊 Dataset

The current pilot dataset contains 40 illustrative examples distributed across four categories.

These examples were written for initial model development and testing.

**Important:** This is a small pilot dataset, not a representative linguistic corpus or independent validation dataset.

## ⚠️ Limitations

- The dataset is small.
- Romanized Bangla spelling varies considerably between users.
- Code-switching can occur at word and sentence levels.
- Similar character patterns can cause classification errors.
- The classifier has not yet been established as a reliable language identification system.
- Independent held-out evaluation is still needed.

Predictions should therefore be treated as experimental rather than definitive.

## 🎯 Project Goals

1. Explore language identification in multilingual text.
2. Investigate the challenges of Romanized Bangla.
3. Build accessible English-learning activities.
4. Explore the intersection of AI, language, and education.

## 🌐 Live Demo

https://aigirl18yearsold.github.io/CodeSwitch-sentinel-/

## 👩‍💻 Developer

Created as an independent educational technology and AI experimentation project.

## 📜 Disclaimer

This is an educational prototype. It is not a production-ready language detection system and does not claim validated classification accuracy.
