import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	height: var(--header-height);

	padding: 0 1rem;

	background-color: #101010;

	display: flex;
	align-items: center;
	justify-content: space-between;

	.logo-container {
		width: 30%;

		color: #fff;

		display: inline-flex;
		align-items: center;
	}

	.logo-icon {
		height: 54px;
		width: 54px;
		object-fit: cover;
	}

	h1 {
		line-height: 32px;
		font-size: 1.5rem;

		margin-left: 0.25rem;
		text-shadow: 0px 0px 10px rgba(235, 110, 50, 0.5);

		color: #fff;

		border: 1px solid rgba(235, 110, 50);

		padding: 3px 9px;
	}

	.menu-btn {
		display: none;
	}

	@media screen and (max-width: 768px) {
		.menu-btn {
			display: block;

			cursor: pointer;

			font-size: 1.75rem;
			color: rgb(235, 110, 50);
		}
	}
`;
