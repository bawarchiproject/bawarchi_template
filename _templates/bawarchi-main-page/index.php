<?php
    set_include_path($_SERVER['DOCUMENT_ROOT'] . '/includes');
    $primary = 0;
    include('header.php');
?>
<main id="main" role="document">
	<section class="main-page-banner-container bg-image" data-image="/assets/bawarchi/images/banner-image.png">
	<span class="overlay"></span>
		<article class="container-fluid">
			<div class="search-form-main-page">
				<p>Your Dynamic Page Heading here</p>
				<form>
					<div class="field-container">
						<span class="icon icon-location"></span>
						<label class="visuallyhidden" for="ad-location">location</label>
						<input type="text" name="ad-location" class="location" placeholder="Enter your location"/>
						<label class="visuallyhidden" for="ad-city">location</label>
						<input type="text" name="ad-city" class="city" placeholder="Select your city"/>
						<button class="search-btn" >Search</button>	
					</div>
				</form>
			</div>
		</article>
	</section>
	<section class="main-area-main-page">
		<div class="main-page-filter">
			<div class="filter-form">
				<form>
					<div class="main-page-filter-label">
						<div class="filter-label">
							FILTER
						</div>
					</div>
					<div class="main-page-field-container">
						<label  for="ad-location">Location</label><br>
						<input type="text" name="ad-location" class="location" placeholder="SELECT"/><br>
					</div>
					<div class="main-page-field-container">
						<label  for="ad-cusine">Cuisine</label><br>
						<input type="text" name="ad-cuisine" class="cuisine" placeholder="SELECT"/><br>
					</div>
					<div class="main-page-field-container">
						<label  for="ad-event">Event</label><br>
						<input type="text" name="ad-vegNonVeg" class="vegNonVeg" placeholder="SELECT"/><br>
					</div>
					<div class="main-page-field-container">
						<label  for="ad-vegNonVeg">Veg-NonVeg</label><br>
						<input type="text" name="ad-noOfPeople" class="noOfPeople" placeholder="SELECT"/><br>
					</div>
					<div class="main-page-field-container">
						<label  for="ad-noOfPeople">No of People</label><br>
						<input type="text" name="ad-costPerPlate" class="costPerPlate" placeholder="SELECT"/><br>
					</div>
					<div class="main-page-field-container">
						<label  for="ad-costPerPlate">Cost per Plate</label><br>
						<input type="text" name="ad-city" class="city" placeholder="SELECT"/><br>
					</div>					
				</form>
			</div>
		</div>
		<div class="main-page-cook-list">Cook List</div>
		<div class="main-page-cook-selected">
			<div class="outer-cook-type">
				<div class="selected"></div>
				<div class="cook-type selected-cook-type">CATERERS</div>
			</div>
			<div class="outer-cook-type">
				<div class="cook-type">NORMAL DAY-TO-DAY COOKS</div>
			</div>
			<div class="outer-cook-type">
				<div class="cook-type">SPECIFIC CUISINE CATERERS</div>
			</div>
			<div class="outer-cook-type">
				<div class="cook-type">CHEFS(PROFESSIONALS)</div>
			</div>
		</div>
	</section>
</main>

<?php include('footer.php'); ?>

