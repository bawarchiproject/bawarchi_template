
<?php
    set_include_path($_SERVER['DOCUMENT_ROOT'] . '/includes');
    $primary = 0;
    include('header.php');
?>

<section id="main" role="main">
	<section class="banner-container bg-image" data-image="/assets/bawarchi/images/banner-image.png">
	<span class="overlay"></span>
		<section class="container-fluid">
			<div class="search-form">
				<p>Discover the great Cook for your <span class="red">Function!</span></p>
				<form>
					<div class="field-container">
						<span class="icon icon-location"></span>
						<label class="visuallyhidden" for="ad-location">location</label>
						<input type="text" id="ad-location" class="location" placeholder="Enter your location"/>
						<label class="visuallyhidden" for="ad-city">location</label>
						<input type="text" id="ad-city" class="city" placeholder="Select your city"/>
						<button class="search-btn" >Search</button>	
					</div>
				</form>
			</div>
		</section>
	</section>
	<section class="container-fluid tab-container">
		<ul class="categories">
			<li class="cat-tab">
				<img src="/assets/bawarchi/images/tab-1.png" alt="tab-1" />
				<div class="content">
					<h3>Caterers</h3>
					<span class="cat-count">313</span>
					<h5>Party orders</h5>	
				</div>
				<a href="#" class="btn-all">View All</a>
			</li>
			<li class="cat-tab">
				<img src="/assets/bawarchi/images/tab-2.png" alt="tab-2" />
				<div class="content">
					<h3>Chefs</h3>
					<span class="cat-count">234</span>
					<h5>Professionals</h5>	
				</div>
				<a href="#" class="btn-all">View All</a>
			</li>
			<li class="cat-tab">
				<img src="/assets/bawarchi/images/tab-3.png" alt="tab-3" />
				<div class="content">
					<h3>Specifics</h3>
					<span class="cat-count">513</span>
					<h5>Cuisine caterers</h5>	
				</div>
				<a href="#" class="btn-all">View All</a>
			</li>
			<li class="cat-tab">
				<img src="/assets/bawarchi/images/tab-4.png" alt="tab-4" />
				<div class="content">
					<h3>Normal</h3>
					<span class="cat-count">142</span>
					<h5>Day-today-cook</h5>	
				</div>
				<a href="#" class="btn-all">View All</a>
			</li>
		</ul>

		<article class="custom-block">
			<h3>AWARD WINNING <span class="ul">COOK(s)</span> IN FUNCTION(s)</h3>
			<a href="#" class="btn-large">What is happening at the Test Center?</a>
		</article>
	</section>

</section>


<?php include('footer.php'); ?>

