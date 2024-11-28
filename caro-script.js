const profilePic0 = document.getElementById("person-image");
const personName0 = document.querySelector("#person-details h1");
const personExp0 = document.querySelector("#person-details h2");



const details0 = {
    1: ["CA Dinesh Sir", "M.com, CA, 7+ Experience"],
    2: ["CA Ayush Kumar", "B.com, CA, 2+ Experience"],
    3: ["CA Chinay Solanki", "M.com, CA, 8+ Experience"],
    4: ["Ms Dhara Shah", "MBA, 12 Yrs + Teaching Experience"],
    5: ["CA Rahul Batra", "M.com, CA, DFM with 14 Yrs + Experience"]
}

var imageCount_ = 0;

function on_click(leftORRight) {
    if(leftORRight == 'L') {
        imageCount_--;
        if(imageCount_ <= 0) {
            imageCount_ = 5;
        }
    }else {
        imageCount_++;
        if(imageCount_ > 5) {
            imageCount_ = 1;
        }
    }

    profilePic0.style.backgroundImage = `url("caro-images/n${imageCount_}.JPG")`
    personName0.innerHTML = details0[imageCount_][0];    
    personExp0.innerHTML = details0[imageCount_][1];
};











