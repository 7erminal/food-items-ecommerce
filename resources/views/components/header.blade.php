<nav class="navbar navbar-expand-lg custom-nav">
    <div class="container-fluid">
      <a class="navbar-brand" style="color: white" href="#"><img src="{{ asset('/assets/images/makuFoodsLogo.png') }}" class="logo" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" style="color: white" aria-current="page" href="/"><b>Home</b></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="prodcts" style="color: white" href="/products"><b>Products</b></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style="color: white" href="/about-us"><b>Who We Are</b></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style="color: white" href="/sustainability"><b>Sustainability</b></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style="color: white" href="/recipes"><b>Recipes</b></a>
          </li>
        </ul>
        <span class="navbar-text">
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </span>
      </div>
    </div>
  </nav>
  <script>
    document.getElementById("prodcts").addEventListener('click', function(){
      console.log("CLicked")
      sessionStorage.setItem("selectedCategory", "all")
    })
  </script>