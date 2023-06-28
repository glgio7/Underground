import styled from "styled-components";

export const Searchbar = styled.div<{ active: boolean }>`
	width: 50%;
	height: 32px;

	display: flex;
	align-items: center;
	justify-content: center;

	input {
		background-color: #202020;

		width: 60%;
		height: 100%;

		border-radius: 4px;

		padding: 0 9px;

		caret-color: rgb(255, 80, 0);
		color: #fff;

		outline: none;

		::placeholder {
			color: #fff;
		}
	}

	button {
		background-color: rgb(235, 110, 0);
		height: 100%;
		width: 2rem;

		margin-left: 0.25rem;

		border-radius: 4px;

		color: #fff;
		font-size: 1.25rem;

		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	@media screen and (max-width: 768px) {
		display: ${({ active }) => (active ? "flex" : "none")};
		width: 90%;

		input {
			width: 100%;
		}
	}
`;
