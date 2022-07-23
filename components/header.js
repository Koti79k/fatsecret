let header = () => {
  return `<div id="register">
      <div class="container">
        <a href="signup.html" >Register</a>
        &nbsp;|&nbsp;
        <a href="signin.html" >Sign in</a>
      </div>
    </div>
    <div id="logoAndSearch">
      <div class="container">
        <div id="logo">
          <a href="fitness.html">
            <img src="https://a.ftscrt.com/static/images/def20/Fatsecret_logo.png" alt="Fatsecret_logo">
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
        <a href="index.html">MY FATSECRET</a>
        <a href="food.html">FOODS</a>
        <a href="recipes.html">RECIPES</a>
        <a href="fitness.html">FINTESS</a>
        <a href="#">COMMUNITY</a>
        <a href="#"></a>
      </div>
    </div>`;
}
export {header}