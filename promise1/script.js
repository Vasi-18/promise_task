function fetchCategoriesData (){
    const URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
    fetch (URL) 
    .then((response) => response.json())
    .then((result) => renderCategoriescard(result.categories))
    .catch((error) => console.log(error));
}


function renderCategoriescard(data = []){
    const cards = [];
    data.forEach((d) => {
        cards.push(createCategoryCard(d));
    });

    populateCardContainer(cards);
}

function populateCardContainer(data = []){
    const conatiner = document.getElementsByClassName('card-container')[0];
    conatiner.append(...data);
}


function createCategoryCard(data= {}){
    const card = document.createElement("div");
    card.setAttribute("class" , "categoriesCard");
    card.innerHTML =`
        <img src= ${data.strCategoryThumb} />
        <div class="category-content">
            <h3>${data.strCategory}</h3>
            <p>${data.strCategoryDescription}</p>
        </div>
    `
    return card;
}

fetchCategoriesData();