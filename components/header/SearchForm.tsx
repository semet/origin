import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

const SearchForm = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const { isSearchOpen } = useSelector((state: RootState) => state.menu);
	useEffect(() => {
		inputRef.current?.focus();
	}, [isSearchOpen]);
	return (
		<form className={`header-form ${isSearchOpen ? "active" : ""}`}>
			<input type="text" placeholder="Search anything..." ref={inputRef} />
			<button>
				<i className="fas fa-search" />
			</button>
		</form>
	);
};

export default SearchForm;
