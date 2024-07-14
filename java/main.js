$('.click ').click(function () { 
   let width = $('.nav-right').outerWidth();
   let lef =  $('.nav').offset().left;
   console.log(width)
 if(lef == 0)
    {
    $('.nav').css({left:`-${width}px`}) 
    $('.click').html('<i class="fa-solid open-close-icon fa-2x fa-align-justify"> </i>');
    $('ul li ').css({top:'300px'})

 }
 else{
    $('.nav').css({left:'0px'}) 
    $('.click').html('<i class="fa-solid open-close-icon fa-2x fa-x"> </i>');
    $('ul li ').css({top:'0px'})
 }
    
});





let full=[]
async function fulldata()
{const url='https://www.themealdb.com/api/json/v1/1/search.php?s';
   const response = await fetch(url);
   full = await response.json()
   console.log(full)
   display()
  }
function display(){
let cartona=``
for(let i=0;i<full.meals.length;i++){
  cartona+=`
  <div class="col-md-3 " id="meals-container ">
    <div  class=" meal position-relative overflow-hidden rounded-2   " id=${full.meals[i].idMeal}>
      <img class="w-100" src="${full.meals[i].strMealThumb}" alt="">
      <div class="shad" id="shad">
      ${full.meals[i].strMeal}
       </div>
    </div>
   </div>
`
}

document.getElementById('open').innerHTML=cartona;

$('.meal').click(async function() {
  let id = $(this).attr('id');
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  try {
      const response2 = await fetch(url);
      const details = await response2.json();
      console.log(details);
      let cartona2 = `
      <div class="row">
          <div class="col-md-4">
              <img class="w-100 rounded-3" src="${details.meals[0].strMealThumb}" alt="">
              <h2>${details.meals[0].strMeal}</h2>
          </div>
          <div class="col-md-8">
              <h2>Instructions</h2>
              <p>${details.meals[0].strInstructions}</p>
              <h3><span class="fw-bolder">Area : </span>${details.meals[0].strArea}</h3>
              <h3><span class="fw-bolder">Category : </span>${details.meals[0].strCategory}</h3>
              <h3><span class="fw-bolder">Recipes : </span></h3>
              <ul class="list-unstyled"></ul>
              <a href="${details.meals[0].strSource}" class="btn btn-success" target="_blank">Source</a>
              <a href="https://www.youtube.com/watch?v=${details.meals[0].strYoutube.slice(-11)}" class="btn btn-danger" target="_blank">Youtube</a>
          </div>
      </div>
  `;
document.getElementById('open').innerHTML=cartona2;

      
  } catch (error) {
      console.error('Error fetching meal details:', error);
  }
  
  
 




});
} 


 fulldata()
   
let areadetails = [];
$('.Area').click(async function() {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
    try {
        $('.loading-screen').fadeIn(1000);
        const response3 = await fetch(url);
        
        areadetails = await response3.json();
         
        console.log(areadetails);
        displayAreas(areadetails);
        $('.loading-screen').fadeOut(1000);

    } catch (error) {
        console.error('Error fetching area details:', error);
    }
    let width = $('.nav-right').outerWidth();
   let lef =  $('.nav').offset().left;
   console.log(width)
 if(lef == 0)
    {
    $('.nav').css({left:`-${width}px`}) 
    $('.click').html('<i class="fa-solid open-close-icon fa-2x fa-align-justify"> </i>');
    $('ul li ').css({top:'300px'})

 }
 else{
    $('.nav').css({left:'0px'}) 
    $('.click').html('<i class="fa-solid open-close-icon fa-2x fa-x"> </i>');
    $('ul li ').css({top:'0px'})
 }
});

function displayAreas(data) {
    let cartona = ``;
    for (let i = 0; i < data.meals.length; i++) {
        cartona += `
            <div class="col-md-3">
                <div class="area-item position-relative overflow-hidden rounded-2 text-center" id="${data.meals[i].strArea}">
                    <i class="fa-solid fa-house-laptop fa-4x"></i>
                    <h3 class="area-name">${data.meals[i].strArea}</h3>
                </div>
            </div>
        `;
    }

    document.getElementById('open').innerHTML = cartona;
    
    $('.area-item').click(async function() {
        let place = $(this).attr('id');
        console.log(place);
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${place}`;
        try {
            const response4 = await fetch(url);
            let areafood = await response4.json();
            console.log(areafood);
            let cartona4 = ``;
            for (let i = 0; i < areafood.meals.length; i++) {
                cartona4 += `
                    <div class="col-md-3" id="meals-container">
                        <div class="meal position-relative overflow-hidden rounded-2" id="${areafood.meals[i].idMeal}">
                            <img class="w-100" src="${areafood.meals[i].strMealThumb}" alt="">
                            <div class="shad" id="shad">
                                ${areafood.meals[i].strMeal}
                            </div>
                        </div>
                    </div>
                `;
            }

            document.getElementById('open').innerHTML = cartona4;
            
            
            $('.meal').click(async function() {
                let id = $(this).attr('id');
                const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
                try {
                    const response2 = await fetch(url);
                    const details = await response2.json();
                    console.log(details);

                    let cartona2 = `
                        <div class="row">
                            <div class="col-md-4">
                                <img class="w-100 rounded-3" src="${details.meals[0].strMealThumb}" alt="">
                                <h2>${details.meals[0].strMeal}</h2>
                            </div>
                            <div class="col-md-8">
                                <h2>Instructions</h2>
                                <p>${details.meals[0].strInstructions}</p>
                                <h3><span class="fw-bolder">Area : </span>${details.meals[0].strArea}</h3>
                                <h3><span class="fw-bolder">Category : </span>${details.meals[0].strCategory}</h3>
                                <h3><span class="fw-bolder">Recipes : </span></h3>
                                <ul class="list-unstyled"></ul>
                                <a href="${details.meals[0].strSource}" class="btn btn-success" target="_blank">Source</a>
                                <a href="https://www.youtube.com/watch?v=${details.meals[0].strYoutube.slice(-11)}" class="btn btn-danger" target="_blank">Youtube</a>
                            </div>
                        </div>
                    `;
                    
                    document.getElementById('open').innerHTML = cartona2;
                } catch (error) {
                    console.error('Error fetching meal details:', error);
                }
            });

        } catch (error) {
            console.error('Error fetching area details:', error);
        }
    });
}

let catdetails = [];
$('.Categories').click(async function() {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    try {
        const res = await fetch(url);
        catdetails = await res.json();
        console.log(catdetails);
        
        displaycats(catdetails);
    } catch (error) {
        console.error('Error fetching category details:', error);
    }
    let width = $('.nav-right').outerWidth();
   let lef =  $('.nav').offset().left;
   console.log(width)
 if(lef == 0)
    {
    $('.nav').css({left:`-${width}px`}) 
    $('.click').html('<i class="fa-solid open-close-icon fa-2x fa-align-justify"> </i>');
    $('ul li ').css({top:'300px'})

 }
 else{
    $('.nav').css({left:'0px'}) 
    $('.click').html('<i class="fa-solid open-close-icon fa-2x fa-x"> </i>');
    $('ul li ').css({top:'0px'})
 }
});

function displaycats(data1) {
    let cart = ``;
    for (let i = 0; i < data1.categories.length; i++) {
        cart += `
            <div class="col-md-3" id="meals-container">
                <div class="meal position-relative overflow-hidden rounded-2" id="${data1.categories[i].strCategory}">
                    <img class="w-100" src="${data1.categories[i].strCategoryThumb}" alt="">
                    <div class="shad1" id="shad">
                        <h3>${data1.categories[i].strCategory}</h3>
                        <p>${data1.categories[i].strCategoryDescription.split(' ', 15).join(' ')}</p>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById('open').innerHTML = cart;

    $('.meal').click(async function() {
        let categoryId = $(this).attr('id');
        console.log(categoryId);
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`;
        try {
            const response = await fetch(url);
            const categoryMeals = await response.json();
            console.log(categoryMeals);
            let cartona = ``;
            for (let i = 0; i < categoryMeals.meals.length; i++) {
                cartona += `
                    <div class="col-md-3" id="meals-container">
                        <div class="meal position-relative overflow-hidden rounded-2" id="${categoryMeals.meals[i].idMeal}">
                            <img class="w-100" src="${categoryMeals.meals[i].strMealThumb}" alt="">
                            <div class="shad" id="shad">
                                ${categoryMeals.meals[i].strMeal}
                            </div>
                        </div>
                    </div>
                `;
            }
            document.getElementById('open').innerHTML = cartona;
            
            $('.meal').click(async function() {
                let id = $(this).attr('id');
                const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
                try {
                    const response = await fetch(url);
                    const details = await response.json();
                    console.log(details);
                    displayMealDetails(details);
                } catch (error) {
                    console.error('Error fetching meal details:', error);
                }
            });

        } catch (error) {
            console.error('Error fetching category meals:', error);
        }
    });
}

function displayMealDetails(details) {
    const meal = details.meals[0];
    
    let cartona = `
        <div class="row">
            <div class="col-md-4">
                <img class="w-100 rounded-3" src="${meal.strMealThumb}" alt="">
                <h2>${meal.strMeal}</h2>
            </div>
            <div class="col-md-8">
                <h2>Instructions</h2>
                <p>${meal.strInstructions}</p>
                <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
                <h3><span class="fw-bolder">Recipes : </span></h3>
                <ul class="list-unstyled"></ul>
                <a href="${meal.strSource}" class="btn btn-success" target="_blank">Source</a>
                <a href="https://www.youtube.com/watch?v=${meal.strYoutube.slice(-11)}" class="btn btn-danger" target="_blank">Youtube</a>
            </div>
        </div>
    `;
    document.getElementById('open').innerHTML = cartona;
}



let ingrediants = [];
$('.Ingredients').click(async function() {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
    try {
        const res = await fetch(url);
        ingrediants = await res.json();
        console.log(ingrediants);
        
        displaying(ingrediants);
    } catch (error) {
        console.error('Error fetching ingredients details:', error);
    }
    let width = $('.nav-right').outerWidth();
   let lef =  $('.nav').offset().left;
   console.log(width)
 if(lef == 0)
    {
    $('.nav').css({left:`-${width}px`}) 
    $('.click').html('<i class="fa-solid open-close-icon fa-2x fa-align-justify"> </i>');
    $('ul li ').css({top:'300px'})

 }
 else{
    $('.nav').css({left:'0px'}) 
    $('.click').html('<i class="fa-solid open-close-icon fa-2x fa-x"> </i>');
    $('ul li ').css({top:'0px'})
 }

});

function displaying(data3) {
    let cartona0 = ``;
    for (let i = 0; i < data3.meals.length; i++) {
        
        let description = data3.meals[i].strDescription ? data3.meals[i].strDescription.split(' ', 10).join(' ') : "No description available.";
        cartona0 += `
            <div class="col-md-3">
                <div class="area-item position-relative overflow-hidden rounded-2 text-center" id="${data3.meals[i].strIngredient}">
                    <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                    <h3 class="area-name">${data3.meals[i].strIngredient}</h3>
                    <p>${description}</p>
                </div>
            </div>
        `;
    }

    document.getElementById('open').innerHTML = cartona0;

    $('.area-item').click(async function() {
        let ingredient = $(this).attr('id');
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
        try {
            const response = await fetch(url);
            const ingredientMeals = await response.json();
            console.log(ingredientMeals);
            let cartona = ``;
            for (let i = 0; i < ingredientMeals.meals.length; i++) {
                cartona += `
                    <div class="col-md-3" id="meals-container">
                        <div class="meal position-relative overflow-hidden rounded-2" id="${ingredientMeals.meals[i].idMeal}">
                            <img class="w-100" src="${ingredientMeals.meals[i].strMealThumb}" alt="">
                            <div class="shad" id="shad">
                                ${ingredientMeals.meals[i].strMeal}
                            </div>
                        </div>
                    </div>
                `;
            }
            document.getElementById('open').innerHTML = cartona;

            $('.meal').click(async function() {
                let id = $(this).attr('id');
                const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
                try {
                    const response = await fetch(url);
                    const details = await response.json();
                    console.log(details);
                    displayMealDetails(details);
                } catch (error) {
                    console.error('Error fetching meal details:', error);
                }
            });

        } catch (error) {
            console.error('Error fetching ingredient meals:', error);
        }
    });
}

function displayMealDetails(details) {
    const meal = details.meals[0];
    
    let cartona = `
        <div class="row">
            <div class="col-md-4">
                <img class="w-100 rounded-3" src="${meal.strMealThumb}" alt="">
                <h2>${meal.strMeal}</h2>
            </div>
            <div class="col-md-8">
                <h2>Instructions</h2>
                <p>${meal.strInstructions}</p>
                <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
                <h3><span class="fw-bolder">Recipes : </span></h3>
                <ul class="list-unstyled"></ul>
                <a href="${meal.strSource}" class="btn btn-success" target="_blank">Source</a>
                <a href="https://www.youtube.com/watch?v=${meal.strYoutube.slice(-11)}" class="btn btn-danger" target="_blank">Youtube</a>
            </div>
        </div>
    `;
    
    document.getElementById('open').innerHTML = cartona;
}






let searchResults = [];

async function getMeals(query, type) {
    let url;
    if (type === 'name') {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    } else if (type === 'first-letter') {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`;
    }

    try {
        const response = await fetch(url);
        searchResults = await response.json();
        console.log(searchResults);
        displayMeals(searchResults.meals);
    } catch (error) {
        console.error('Error fetching meal details:', error);
    }
}

function displaySearchInputs() {
    let searchInputs = `
        <div class="row">
            <div class="col-md-6">
                <input type="text" id="byname" placeholder="Search by name" class="form-control bg-transparent text-white">
            </div>
            <div class="col-md-6"> 
                <input type="text" id="byfname" placeholder="Search by first letter" class="form-control bg-transparent text-white">
            </div>
        </div>
        <div id="results-container" class="row mt-3"></div>
    `;
    document.getElementById('open').innerHTML = searchInputs;

    document.getElementById('byname').addEventListener('input', function() {
        let nameQuery = this.value;
        if (nameQuery) {
            getMeals(nameQuery, 'name');
        }
    });

    document.getElementById('byfname').addEventListener('input', function() {
        let firstLetterQuery = this.value;
        if (firstLetterQuery && firstLetterQuery.length === 1) {
            getMeals(firstLetterQuery, 'first-letter');
        }
    });
}

function displayMeals(meals) {
    let cartona = '';
    if (meals) {
        meals.forEach(meal => {
            cartona += `
                <div class="col-md-3" id="meals-container">
                    <div class="meal mt-3 position-relative overflow-hidden rounded-2" id="${meal.idMeal}">
                        <img class="w-100" src="${meal.strMealThumb}" alt="">
                        <div class="shad" id="shad">
                            ${meal.strMeal}
                        </div>
                    </div>
                </div>
            `;
            
        });
        
    } else {
        cartona = '<p>No meals found.</p>';
    }
    
    document.getElementById('results-container').innerHTML = cartona;
}


$('.Search').click(function() {
    displaySearchInputs();
    let width = $('.nav-right').outerWidth();
   let lef =  $('.nav').offset().left;
   console.log(width)
 if(lef == 0)
    {
    $('.nav').css({left:`-${width}px`}) 
    $('.click').html('<i class="fa-solid open-close-icon fa-2x fa-align-justify"> </i>');
    $('ul li ').css({top:'300px'})

 }
 else{
    $('.nav').css({left:'0px'}) 
    $('.click').html('<i class="fa-solid open-close-icon fa-2x fa-x"> </i>');
    $('ul li ').css({top:'0px'})
 }
});




$('.Contact').click(function() {
    
    let cartona1 = `
    <div class="d-flex justify-content-center align-items-center" id="content">
    <div class="contacts w-75 row g-4">
        <div class="col-md-6">
            <input type="text" class="form-control" id="nameInput" placeholder="Enter Your Name">
        </div>
        <div class="col-md-6">
            <input type="email" class="form-control" id="emailInput" placeholder="Enter Your Email">
        </div>
        <div class="col-md-6">
            <input type="text" class="form-control" id="phoneInput" placeholder="Enter Your Phone">
        </div>
        <div class="col-md-6">
            <input type="number" class="form-control" id="ageInput" placeholder="Enter Your Age">
        </div>
        <div class="col-md-6">
            <input type="password" class="form-control" id="passwordInput" placeholder="Enter Your Password">
        </div>
        <div class="col-md-6">
            <input type="password" class="form-control" id="repasswordInput" placeholder="Re-enter Password">
        </div>
    </div>
    </div>
    <div class='text-center'>
    <button id="submitBtn" disabled="true" class="btn btn-outline-danger px-2 mt-3">Submit</button>
    
    </div>
    
    `;
    document.getElementById('open').innerHTML = cartona1;

   
        const nameInput = document.getElementById('nameInput');
        const emailInput = document.getElementById('emailInput');
        const phoneInput = document.getElementById('phoneInput');
        const ageInput = document.getElementById('ageInput');
        const passwordInput = document.getElementById('passwordInput');
        const repasswordInput = document.getElementById('repasswordInput');
        const submitBtn = document.getElementById('submitBtn');
    
        const validateInputs = () => {
            const nameValid = /^[a-zA-Z ]+$/.test(nameInput.value);
            const emailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput.value);
            const phoneValid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phoneInput.value);
            const ageValid = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(ageInput.value); 
            const passwordValid = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(passwordInput.value);
            const repasswordValid = passwordInput.value === repasswordInput.value;
    
            if (nameValid && emailValid && phoneValid && ageValid && passwordValid && repasswordValid) {
                submitBtn.disabled = false;
            } else {
                submitBtn.disabled = true;
            }
        };
    
        nameInput.addEventListener('input', validateInputs);
        emailInput.addEventListener('input', validateInputs);
        phoneInput.addEventListener('input', validateInputs);
        ageInput.addEventListener('input', validateInputs);
        passwordInput.addEventListener('input', validateInputs);
        repasswordInput.addEventListener('input', validateInputs);


        let width = $('.nav-right').outerWidth();
   let lef =  $('.nav').offset().left;
   console.log(width)
 if(lef == 0)
    {
    $('.nav').css({left:`-${width}px`}) 
    $('.click').html('<i class="fa-solid open-close-icon fa-2x fa-align-justify"> </i>');
    $('ul li ').css({top:'300px'})

 }
 else{
    $('.nav').css({left:'0px'}) 
    $('.click').html('<i class="fa-solid open-close-icon fa-2x fa-x"> </i>');
    $('ul li ').css({top:'0px'})
 }
        
    });
    



$(document).ready(function(){
  $('.loading-screen').fadeOut(1000,function(){

    $(body).css({overflow:'visible'})

  });

    
  })


  

