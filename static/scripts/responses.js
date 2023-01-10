function getBotResponse(input) {
  //rock paper scissors
  if (input == "rock") {
    return "paper";
  } else if (input == "paper") {
    return "scissors";
  } else if (input == "scissors") {
    return "rock";
  }

  // Simple responses
  if (input == "Bonjour") {
    return "Bonjour ! </br> comment allez vous?";
  } else if (input == "bonjour") {
    return "Bonjour ! </br> comment allez vous?";
  } else if (input == "goodbye") {
    return "Aurevoir à bientot";
  } else if (input == "aurevoir") {
    return "Aurevoir à bientot";
  } else if (input == "Aurevoir") {
    return "Aurevoir à bientot";
  } else if (input == "qu'elle est la capital de la france?") {
    return "La capital de la france est Paris";
  } else {
    return "Je n'ai pas compris votre demande. </br> posez moi une autre question.";
  }
}
