document.addEventListener('DOMContentLoaded', function () {
// Retrieve high scores from local storage
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Sort high scores in descending order
    highScores.sort((a, b) => b.score - a.score);

// Display high scores on the page
    const highScoresList = document.getElementById("highScoresList");

    highScores.forEach(entry => {
        const listItem = document.createElement("li");
        listItem.textContent = `${entry.initials}: ${entry.score}`;
        highScoresList.appendChild(listItem);
    });
});

