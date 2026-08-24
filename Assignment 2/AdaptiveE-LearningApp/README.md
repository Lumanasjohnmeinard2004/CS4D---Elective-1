# Adaptive E-Learning App

**Name:** John Meinard P. Lumanas
**Section:** CS4D
**Date:** August 24, 2026

## Project Description

This project is a simple adaptive e-learning application built using HTML, CSS, and JavaScript.

The application presents the learner with a randomized set of quiz questions. After the learner completes the quiz, the system automatically calculates their score and uses adaptive if-then rules to determine the most appropriate next learning activity.


## Technologies Used

- HTML
- CSS
- JavaScript


## How to Run the Program

### Method 1: Open Directly in a Web Browser

1. Download or copy the project files.
2. Make sure the following three files are in the same folder:

   - `index.html`
   - `style.css`
   - `script.js`

3. Double-click `index.html`.
4. The application will open in your default web browser.
5. Answer all of the quiz questions.
6. Click **Submit Quiz** after answering the final question.
7. The system will automatically calculate your score and provide a personalized recommendation.


### Method 2: Using Visual Studio Code

1. Open Visual Studio Code.
2. Select **File → Open Folder**.
3. Open the folder containing the project files.
4. Open `index.html`.
5. Right-click `index.html`.
6. Select **Open with Live Server** if the Live Server extension is installed.
7. Answer the quiz questions and submit the quiz.


## Adaptive Rules

The application uses two main if-then adaptive rules to personalize the learner's experience.


### Rule 1 — Review

**IF** the learner's quiz score is below **70%**

**THEN** the system recommends reviewing the learning material and practicing the key concepts before moving to more advanced material.

This rule adapts the learning experience for learners who may need additional practice.


### Rule 2 — Challenge

**IF** the learner's quiz score is **85% or higher**

**THEN** the system recommends a more challenging lesson with more advanced questions.

This rule adapts the learning experience for learners who demonstrate strong performance.


### Standard Learning

If the learner's score is between **70% and 84%**, neither adaptive rule is triggered.

The system recommends continuing with the next lesson at the current difficulty.


## How the Adaptive System Works

The application follows this process:

1. The learner answers a randomized set of quiz questions.
2. The system records the learner's answers.
3. The system calculates the number of correct answers.
4. The system calculates the learner's percentage score.
5. The adaptive rules evaluate the score.
6. The system automatically recommends the appropriate next learning activity.

For example:

- **60% → Review**
- **75% → Continue at current level**
- **90% → Challenge**


## Personalization

The application is adaptive because the learner's quiz performance directly affects what the system recommends next.

Instead of giving every learner the same learning activity, the system automatically adjusts the recommendation based on their performance.

Learners who perform below 70% receive a review recommendation, while learners who score 85% or higher receive a challenge recommendation.


## Project Files

```text
AdaptiveLearningApp/
│
├── index.html
├── style.css
├── script.js
└── README.md
