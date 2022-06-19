/* eslint-disable @next/next/no-img-element */
import { ProductImage } from "@prisma/client";
import Image from "next/image";
import React, { SetStateAction, useState } from "react";
import Slider from "react-slick";
import { productDetailsPreview, productDetailsThumb } from "../../../utils/slickConfig";
import { NextArrow, PrevArrow } from "../../partials/SlickArrows";

const ProductImages: React.FC<{ images: ProductImage[] }> = ({ images }) => {
	const [nav1, setNav1] = useState<Slider>();
	const [nav2, setNav2] = useState<Slider>();

	return (
		<div className="col-lg-6">
			<div className="details-gallery">
				<div className="details-label-group">
					<label className="details-label new">new</label>
					<label className="details-label off">-10%</label>
				</div>
				<Slider
					{...productDetailsPreview}
					prevArrow={<PrevArrow />}
					nextArrow={<NextArrow />}
					asNavFor={nav2}
					ref={(slider1) => setNav1(slider1 as SetStateAction<Slider | undefined>)}
					className="details-preview"
				>
					{images.map((image, idx) => (
						<li key={idx}>
							<Image src={image.name} alt="product" width={636} height={636} />
						</li>
					))}
				</Slider>

				<Slider
					{...productDetailsThumb}
					asNavFor={nav1}
					ref={(slider2) => setNav2(slider2 as SetStateAction<Slider | undefined>)}
					className="details-thumb"
				>
					{images.map((image, idx) => (
						<li key={idx}>
							<Image src={image.name} alt="product" width={115} height={143} />
						</li>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default ProductImages;
