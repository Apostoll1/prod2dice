// Helper function to ask a question and check the answer
function askQuestion(question, correctAnswer) {
    const userAnswer = prompt(question);
  
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      console.log("Correct!");
      return 1; // Return 1 for a correct answer
    } else {
      console.log(`Incorrect! The correct answer is: ${correctAnswer}`);
      return 0; // Return 0 for an incorrect answer
    }
  }
  
  // Main function to run the quiz
  function quizGame() {
    let score = 0;
  
    console.log("Welcome to the Simple Quiz Game!");
  
    score += askQuestion("What is the capital of France?", "Paris");
    score += askQuestion("Which planet is known as the Red Planet?", "Mars");
    score += askQuestion("What is the largest mammal in the world?", "Blue Whale");
  
    console.log(`Game Over! Your final score is: ${score}`);
  }
  
  // Run the quiz game
  quizGame();