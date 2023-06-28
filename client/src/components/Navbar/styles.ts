import styled from "styled-components";

export const Navbar = styled.nav<{ active: boolean }>`
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	width: 70%;

	a {
		color: rgb(255, 110, 50);

		line-height: 24px;
		height: 24px;
		padding: 0px 15px;

		border-radius: 4px;

		font-weight: bold;

		transition: all 300ms;

		&:hover {
			background-color: #000;
		}
	}

	@media screen and (max-width: 768px) {
		transition: all 300ms;

		position: absolute;

		flex-direction: column;
		justify-content: flex-start;

		padding: 1rem 0;
		align-items: center;

		width: ${({ active }) => (active ? "70%" : "0px")};

		right: 0;
		top: var(--header-height);
		bottom: 0;

		background-color: #141414;
		z-index: 99;

		a {
			display: ${({ active }) => (active ? "block" : "none")};
			border: 1px outset rgb(235, 80, 50);

			color: #fff;

			padding: 9px;
			margin-block: 1rem;

			line-height: initial;

			width: 90%;
			height: auto;
		}
	}
`;
