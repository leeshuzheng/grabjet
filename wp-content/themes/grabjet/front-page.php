<?php get_header(); ?>

<div class="home-container">
	<div class="home-content">
		<div id="plane"></div>

		<form id="form">
			<div class="input-style-blue"></div>
			<div class="input-style-red"></div>
			<label for="from-input" class="hidden-lg">Pick Up</label>
			<input class="awesomplete" id="from-input" placeholder="PICK UP" required>

			<label for="to-input" class="hidden-lg">Drop Off</label>
			<input class="awesomplete" id="to-input" placeholder="DROP OFF" required>

			<div class='col-sm-6'>
			<label for="datetimepicker4" class="hidden-lg">Date</label>
				<input type='text' class="form-control" id='datetimepicker4' required/>
			</div>

			<select id="add-on-options">
				<option>No Add-Ons</option>
			</select>

			<button id="request-button" class="hidden-xs" type="submit" class="btn btn-primary" data-toggle="modal" data-target="#requestModal">
				Request a Jet <span>$199</span>
			</button>

			<div class="modal fade" id="requestModal" tabindex="-1" role="dialog" aria-labelledby="requestModalLabel" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">Booking Confirmation</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body" id="confirmation-text"></div>
						<div class="modal-body" id="add-on-text"></div>
					</div>
				</div>
			</div>
		</form>

<div class="hidden-lg mobile-button">
		<button id="request-button-mobile" class="hidden-lg" type="submit" class="btn btn-primary" data-toggle="modal" data-target="#requestModal">
				Request a Jet <span>$199</span>
			</button>
</div>


		<div class="row information">
			<div class="col-md-4">
				<i class="fa fa-usd fa-3x" aria-hidden="true"></i>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
			</div>
			<div class="col-md-4">
				<i class="fa fa-plane fa-3x" aria-hidden="true"></i>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
			</div>
			<div class="col-md-4">
				<i class="fa fa-thumbs-o-up fa-3x" aria-hidden="true"></i>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
			</div>
		</div>

	</div>
</div>

<?php get_footer(); ?>