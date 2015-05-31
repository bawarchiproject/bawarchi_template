<div id="main-wrapper">
<?php
    set_include_path($_SERVER['DOCUMENT_ROOT'] . '/includes');
    $primary = 0;
    include('header.php');
?>

<main id="main" role="document">
	<section class="container-fluid">
		<article class="col-12">
			<div class="inner-section-search-label">Find the best cooks around you</div>
			<div class="inner-section-wrapper">
				<div class="inner-section">
					<div class="inner-section-select-location">
						<div class="select-location-icon">
							<img src="assets/bawarchi/images/map-arrow-icon.png">
						</div>
						<div class="select-location-text">
							<input type="text" class="textBox" value="Select the location">
						</div>
					</div>
					<div class="inner-section-space"></div>
					<div class="inner-section-select-city">
						<div class="select-city-text">
							<input type="text" class="textBox" value="Select the city">
						</div>
					</div>
					<div class="inner-section-search-button">Search</div>
				</div>		
			</div>		
		</article>
	</section>
	<section class="container-fluid">
		<article class="col-12">
		</article>
	</section>
</div>
</main>


<?php include('footer.php'); ?>

