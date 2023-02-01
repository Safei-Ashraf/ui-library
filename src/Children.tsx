import { ReactNode } from "react";
interface ChildrenProps {
	name: string;
	k: number;
	children?: ReactNode;
}
export const Children = ({ name, k, children }: ChildrenProps): JSX.Element => {
	return (
		<div>
			<p>{children}</p>
			<p> {`my name is ${name} and my number is ${k}`}</p>
		</div>
	);
};
