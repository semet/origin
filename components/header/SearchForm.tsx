import React from "react";

const SearchForm = () => {
	return (
		<form className="header-form">
			<input type="text" placeholder="Search anything..." />
			<button>
				<i className="fas fa-search" />
			</button>
		</form>
	);
};

export default SearchForm;
