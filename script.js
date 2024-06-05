function checkAnswer() {
    const form = document.getElementById('quizForm');
    const result = document.getElementById('result');
    const selectedAnswer = form.answer.value;

    if (selectedAnswer) {
        if (selectedAnswer == '7') {
            result.textContent = 'Правильно!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Неправильно, спробуйте ще раз.';
            result.style.color = 'red';
        }
    } else {
        result.textContent = 'Будь ласка, виберіть відповідь.';
        result.style.color = 'orange';
    }
}
