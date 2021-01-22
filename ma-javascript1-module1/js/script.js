const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1
const cat = {
     complain: function catVoice() {
        console.log("Meow!")
     }
};
cat.complain()



// Question 2
const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";



// Question 3
heading.style.fontSize = "2em";



// Question 4
heading.className = "subheading";



// Question 5
const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}



// Question 6
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p>`
resultsContainer.style.backgroundColor = "yellow";



// Question 7
function animals(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

animals(cats);



// Question 8
function createCats(cats) {

    let html = "";

    for (let i = 0; i < cats.length; i++) {

        let ageMissing = "Age unknown";
        if (cats[i].age) {
            ageMissing = cats[i].age;
        }
    
    html += `<div class="cat-list">
                <h5>${cats[i].name}</h5>
                <p>${ageMissing}</p>
            </div>`  
   
    }
    return html;   
}

const catList = createCats(cats)

const container = document.querySelector(".cat-container");
container.innerHTML = catList;