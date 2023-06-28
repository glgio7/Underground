import styled from "styled-components";

export const Home = styled.main`
	color: #fff;
	position: relative;
	z-index: 5;

	background-color: #000;

	.background {
		position: absolute;

		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		z-index: -1;

		opacity: 0.25;

		background-image: url("/img/metro-background.jpeg");
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: local;
	}

	section {
		backdrop-filter: blur(9px);
		display: flex;
		min-height: calc(100vh - var(--header-height));
		padding: 1rem;
	}

	article {
		display: flex;
		flex-direction: column;
		justify-content: center;

		position: relative;

		width: 50%;

		h3 {
			width: 80%;
			font-size: 4rem;
		}

		strong {
			color: rgba(255, 80, 0);
			text-shadow: 0px 0px 20px rgba(0, 0, 0, 1);
		}
	}

	.welcome-image {
		width: 50%;
		aspect-ratio: 1;

		align-self: center;

		box-shadow: 50px 0px 200px rgba(255, 80, 0, 0.2);

		border-radius: 0 50%;

		object-fit: cover;
	}

	.call-btn {
		height: 3rem;
		padding: 0 15px;

		background-color: rgb(255, 80, 0);
		color: #fff;

		margin-top: 1rem;

		font-weight: bold;
	}

	@media screen and (max-width: 768px) {
		section {
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		article {
			width: 100%;

			h3 {
				font-size: 2.5rem;
				width: 100%;
			}
		}

		.welcome-image {
			width: 75%;

			background-color: #000;

			border-radius: 50% 0;

			align-self: initial;
		}
	}
`;
