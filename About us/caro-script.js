var profilePic = document.getElementById("person-image");
var personName = document.querySelector("#person-details h1");
var personExp = document.querySelector("#person-details h2");


const details = {
    1: ["CA Dinesh Sir", "M.com, CA, 7+ Expererience"],
    2: ["CA Ayush Kumar", "B.com, CA, 2+ Expererience"],
    3: ["CA Chinay Solanki", "M.com, CA, 8+ Expererience"],
    4: ["Ms Dhara Shah", "MBA, 12 Yrs + Teaching Expererience"],
    5: ["CA Rahul Batra", "M.com, CA, DFM with 14 Yrs + Expererience"]
}

var imageCount = 0;

function on_click(leftORRight) {
    if(leftORRight == 'L') {
        imageCount--;
        if(imageCount <= 0) {
            imageCount = 5;
        }
    }else {
        imageCount++;
        if(imageCount > 5) {
            imageCount = 1;
        }
    }

    profilePic.style.backgroundImage = `url("caro-images/n${imageCount}.JPG")`
    personName.innerHTML = details[imageCount][0];
    personExp.innerHTML = details[imageCount][1];
    
};












