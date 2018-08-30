
class Store {
    reviewList = [
        { review: "This is a nice article", stars: 2 },
        { review: "This is a nice article", stars: 2 },
    ]

    clearReviews() {
        this.reviewList = []
    }

    addReview(e) {
        this.reviewList.push(e)
    }

    get totalReviewCount() {
        let sum = 0
        this.reviewList.map(e => sum + e.review)
        return sum;
    }

    get averageScore() {
        let avr = 0
    }
}

export default Store;