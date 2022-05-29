import { FunctionComponent } from "react";

export const PrevArrow: FunctionComponent<{ onClick?: () => void }> = ({ onClick }) => {
	return <i className="icofont-arrow-right dandik" onClick={onClick}></i>;
};

export const NextArrow: FunctionComponent<{ onClick?: () => void }> = ({ onClick }) => {
	return <i className="icofont-arrow-left bamdik" onClick={onClick}></i>;
};
