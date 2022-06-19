import { Settings } from "react-slick";

export const mainBanner: Settings = {
	dots: true,
	fade: false,
	infinite: true,
	autoplay: true,
	arrows: true,
	speed: 600,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			},
		},
	],
};

export const categorySlider: Settings = {
	dots: false,
	infinite: true,
	autoplay: true,
	arrows: true,
	speed: 1000,
	slidesToShow: 5,
	slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows: false,
			},
		},
	],
};

export const newItems: Settings = {
	dots: false,
	infinite: true,
	autoplay: true,
	arrows: true,
	speed: 800,

	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: true,
				arrows: false,
			},
		},
	],
};

export const brandSlider: Settings = {
	dots: false,
	infinite: true,
	autoplay: false,
	arrows: true,
	speed: 800,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				variableWidth: true,
				arrows: false,
			},
		},
	],
};

export const testimonialSlider: Settings = {
	dots: false,
	infinite: true,
	autoplay: false,
	arrows: true,
	fade: false,
	speed: 1000,
	centerMode: true,
	centerPadding: "250px",
	slidesToShow: 1,
	slidesToScroll: 1,

	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: "250px",
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: "130px",
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: "40px",
			},
		},
		{
			breakpoint: 576,
			settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: "10px",
			},
		},
	],
};

export const productPreview: Settings = {
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: true,
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
			},
		},
	],
};

export const productPreviewThumb: Settings = {
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: false,
	arrows: false,
	centerMode: true,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
	],
};

export const productDetailsPreview: Settings = {
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	//  asNavFor: '.details-thumb',
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
			},
		},
	],
};

export const productDetailsThumb: Settings = {
	slidesToShow: 5,
	slidesToScroll: 1,
	// asNavFor: ".details-preview",
	dots: false,
	arrows: false,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				vertical: false,
			},
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				vertical: false,
			},
		},
	],
};
