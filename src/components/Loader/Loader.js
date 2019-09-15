import React, { Component } from 'react';

const Loader = () => {
	return (
		<div class="loader">
			<div class="loaderContent">
				<div class="lds-roller">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	)
}

export default Loader;
