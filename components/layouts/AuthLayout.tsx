import { FC, ReactNode } from "react";

const AuthLayout: FC<{ children?: ReactNode }> = ({ children }) => {
	return (
		<div>
			Header
			<div>{children}</div>
		</div>
	);
};

export default AuthLayout;
