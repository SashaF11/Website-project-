
document.getElementById('submitbtn').addEventListener('click', function() {
    
    var name = document.getElementById('Name').value;
    var product = document.getElementById('Product').value;
    var ratings = document.getElementById('Ratings').value;
    var review = document.getElementById('Review').value;

    if (name && product && ratings && review) {

        var newReviewDiv = document.createElement('div');
        newReviewDiv.classList.add('review');

        
        var nameParagraph = document.createElement('p');
        nameParagraph.textContent = "Name: " + name;
        newReviewDiv.appendChild(nameParagraph);

        var productParagraph = document.createElement('p');
        productParagraph.textContent = "Product: " + product;
        newReviewDiv.appendChild(productParagraph);

        var ratingsParagraph = document.createElement('p');
        ratingsParagraph.textContent = "Ratings: " + ratings + "/5";
        newReviewDiv.appendChild(ratingsParagraph);

        var reviewParagraph = document.createElement('p');
        reviewParagraph.textContent = "Review: " + review;
        newReviewDiv.appendChild(reviewParagraph);

       
        document.getElementById('output').appendChild(newReviewDiv);

       
        document.getElementById('Name').value = '';
        document.getElementById('Product').value = '';
        document.getElementById('Ratings').value = '';
        document.getElementById('Review').value = '';
    } else {
        alert('Please fill out all fields.');
    }
});
 // Attempted to have the data saved and then displayed on the page 