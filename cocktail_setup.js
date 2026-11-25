/** @format */


  const establishCocktailNames = (index) => {
    console.log(cocktails[index].cocktail);
    $(".care").eq(index).text(cocktails[index].cocktail);
  };
  
  const showInformation = () => {
    setUpBoxes();
    // Display cocktail names
    jQuery.each($(".box"), establishCocktailNames);
  

    $(".box").on("click", function () {
      let indexOfCocktails = $(".box").index(this);
  
      // Show Calories on click
      $(this).find("p.care").text(cocktails[indexOfCocktails].calories);
    });
  
    $(".box").on("mouseover", function () {
      let indexOfCocktails = $(".box").index(this);
  
      $(this)
        .find("p.care")
        .text(
          cocktails[indexOfCocktails].ingredients
        );
    });
  
    // Add an event handler for when the
    // element of class box gets a mouseout event
    $(".box").on("mouseout", function () {
      let indexOfCocktails = $(".box").index(this);
  
      $(this).find("p.care").text(cocktails[indexOfCocktails].cocktail);
    });
  };
  

const setUpBoxes = ()=> {
    let wrapperRef = $('.wrapper');
    cocktails.forEach((cocktail)=>{
        let boxMarkup= ` <div class="box">
        <img class="cocktail_pic" src="./images/${cocktail.cocktail.toLowerCase()}.png" />
        <p class="care"></p>
      </div>`;
      wrapperRef.append(boxMarkup);
    }
    );
}


  $(document).ready(showInformation);
  