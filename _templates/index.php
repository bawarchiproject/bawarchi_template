<div id="main-wrapper">
<?php
    set_include_path($_SERVER['DOCUMENT_ROOT'] . '/includes');
    $primary = 0;
    include('header.php');
?>

<main id="main" role="document">
	<section class="banner-container bg-image" data-image="/assets/bawarchi/images/banner-image.png">
	<span class="overlay"></span>
		<article class="container-fluid">
			<div class="search-form">
				<p>Discover the great Cook for your <span class="red">Function!</span></p>
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
</div>

</main>


<?php include('footer.php'); ?>

