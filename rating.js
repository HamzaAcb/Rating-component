document.addEventListener('DOMContentLoaded', function () {
    const ratingButtons = document.querySelectorAll('.rating-button');
    const submitButton = document.getElementById('submit-rating');
    const thankYouCard = document.querySelector('.thank-you-card');
    const ratingCard = document.querySelector('.rating-card');
    const selectedRatingText = document.getElementById('selected-rating');

    let selectedRating = null;

    ratingButtons.forEach(button => {
        button.addEventListener('click', function () {
            ratingButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            selectedRating = button.getAttribute('data-rating');
        });
    });

    submitButton.addEventListener('click', function () {
        if (selectedRating) {
            ratingCard.style.display = 'none';
            thankYouCard.style.display = 'block';
            selectedRatingText.textContent = selectedRating;
        } else {
            alert('Please select a rating before submitting.');
        }
    });
});