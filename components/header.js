function header () {
  return `<div id="register">
      <div class="container">
        <a href="register.html" >Register</a>
        &nbsp;|&nbsp;
        <a href="Login.html" >Sign in</a>
      </div>
    </div>
    <div id="logoAndSearch">
      <div class="container">
        <div id="logo">
          <a href="index.html">
            <img src="./Images/P1.png" alt="Fatsecret_logo" id="logoImg">
          </a>
          <div>INDIA</div>
        </div>
        <div id="searchDiv">
          <div>
            <i class="fa-solid fa-utensils"></i>
            <i class="fa-solid fa-caret-down"></i>
          </div>
          <div>
            <input type="search" id="searchInput" placeholder="Enter Search">
          </div>
          <div>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </div>
    <div id="navbar">
      <div class="container">
        <a href="#">MY FATSECRET</a>
        <a href="food.html">FOODS</a>
        <a href="recipe.html">RECIPES</a>
        <a href="fitness.html">FINTESS</a>
        <a href="#">COMMUNITY</a>
        <a href="#"></a>
      </div>
    </div>`;
};
export {header}