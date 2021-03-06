/* Project.js */
/* import the useState Hook from React */
import { useState } from "react";
/* import the Card, CardImage and Buttons components */
import Card from "../Card/Card";
import CardImage from "./CardImage/CardImage";
import Buttons from "./CardImage/Screens/Buttons/Buttons";
/* import the css code for the project component */
import "./Project.css";
/* import the theme */
import MyTheme from "../../MyTheme";
/* imports for the MaterialUI library */
import {
	Box,
	Button,
	Grid,
	makeStyles,
	ThemeProvider,
	Typography,
	useMediaQuery,
	useTheme,
} from "@material-ui/core";
/* import the Slider component from the react-slick library */
import Slider from "react-slick";
/* imports the css codes from the react-slick library */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* array with the information about the project images */
const images = [
	{
		category: "Todos",
	},
	{
		category: "Diseño",
		demo: "https://gabrielfierro.github.io/Huddle-landing-page/",
		repository: "https://github.com/GabrielFierro/Huddle-landing-page",
		title: "Huddle landing",
		url: "/static/images/projects/huddle-landing.avif",
		urlResponsive: "/static/images/projects/huddle-landing-mobile.avif",
		width: "30%",
	},
	{
		category: "Diseño",
		demo: "https://gabrielfierro.github.io/ProfileCardComponent/",
		repository: "https://github.com/GabrielFierro/ProfileCardComponent",
		title: "Profile card",
		url: "/static/images/projects/profile-card.avif",
		urlResponsive: "/static/images/projects/profile-card-mobile.avif",
		width: "30%",
	},
	{
		category: "Diseño",
		demo: "https://gabrielfierro.github.io/TestimonialsGridSection/",
		repository: "https://github.com/GabrielFierro/TestimonialsGridSection",
		title: "Testimonial grid",
		url: "/static/images/projects/testimonial-grid.avif",
		urlResponsive: "/static/images/projects/testimonial-grid-mobile.avif",
		width: "30%",
	},
	{
		category: "Diseño",
		demo: "https://gabrielfierro.github.io/Fylo-landing-page/",
		repository: "https://github.com/GabrielFierro/Fylo-landing-page",
		title: "Fylo Landing",
		url: "/static/images/projects/fylo-landing.avif",
		urlResponsive: "/static/images/projects/fylo-landing-mobile.avif",
		width: "30%",
	},
	{
		category: "API",
		demo: "https://github-profile-finder-gabrielfierro.vercel.app/",
		repository: "https://github.com/GabrielFierro/GithubProfileFinder",
		title: "GitHub Profile",
		url: "/static/images/projects/github-profile-finder.avif",
		urlResponsive: "/static/images/projects/github-profile-finder-mobile.avif",
		width: "30%",
	},
	{
		category: "React",
		demo: "https://gabrielfierro.github.io/React-Pokeball/",
		repository: "https://github.com/GabrielFierro/React-Pokeball",
		title: "Pokeballs",
		url: "/static/images/projects/react-pokeballs.avif",
		urlResponsive: "/static/images/projects/react-pokeballs-mobile.avif",
		width: "30%",
	},
];

const useStyles = makeStyles((theme) => ({
	title: {
		left: "40%",
		position: "absolute",
		top: "18%",
		width: "20%",
	},
	skills_text_light: {
		color: MyTheme.palette.primary.main,
	},
	skills_text_dark: {
		color: MyTheme.palette.primary.dark,
	},
	skills_text: {
		alignItems: "center",
		display: "flex",
		fontSize: "3rem",
		justifyContent: "center",
		[theme.breakpoints.down("md")]: {
			fontSize: "2.65rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "2.35rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "2rem",
		},
	},
	description_container: {
		height: "5%",
		left: "12%",
		position: "absolute",
		top: "30%",
		width: "75%",
	},
	projects_container: {
		height: "57%",
		left: "12%",
		position: "absolute",
		top: "35%",
		width: "75%",
	},
	section_container: {
		height: "100%",
		width: "100%",
		[theme.breakpoints.down("md")]: {
			margin: "0 100px 0 50px",
		},
		[theme.breakpoints.down("sm")]: {
			margin: "0 0 0 -10px",
		},
		[theme.breakpoints.down("xs")]: {
			margin: "0 0 0 -38px",
		},
	},
	button_container: {
		height: "100%",
		marginLeft: "-5px",
		width: "20%",
		[theme.breakpoints.down("xs")]: {
			marginLeft: "10px",
			width: "20%",
		},
	},
	button: {
		color: "#f7f7fe",
		marginLeft: "25px",
		width: "60%",
		boxShadow: "5px 3px 10px #100f10",
		"&:hover": {
			backgroundColor: "#37b9f1",
		},
		[theme.breakpoints.down("xs")]: {
			boxShadow: "none",
		},
	},
	buttonLight: {
		backgroundColor: "#1a1a19",
	},
	buttonDark: {
		backgroundColor: "#3a3a3a",
	},
	button_text: {
		fontSize: "1rem",
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.85rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.5rem",
		},
	},
	root: {
		display: "flex",
		flexWrap: "wrap",
		marginLeft: "10px",
		marginTop: 5,
		minWidth: 300,
		width: "100%",
		[theme.breakpoints.down("md")]: {
			marginLeft: "50px",
			minWidth: 350,
		},
		[theme.breakpoints.down("1050")]: {
			marginLeft: "0",
		},
		[theme.breakpoints.down("1000")]: {
			marginLeft: "-15px",
			minWidth: 300,
		},
	},
	buttonB: {
		display: "flex",
		flexWrap: "wrap",
		minWidth: 300,
		width: "100%",
	},
	projectImage: {
		border: "3px solid #100f10",
		borderRadius: "6px",
		marginTop: "10px",
		objectFit: "cover",
		width: "100%",
	},
	projectImageCarousel: {
		margin: "10px 0 0 135px",
		objectFit: "cover",
		width: "57%",
		[theme.breakpoints.down("900")]: {
			width: "60%",
		},
		[theme.breakpoints.down("850")]: {
			margin: "10px 0 0 115px",
			width: "65%",
		},
		[theme.breakpoints.down("800")]: {
			margin: "10px 0 0 90px",
			width: "70%",
		},
		[theme.breakpoints.down("700")]: {
			margin: "10px 0 0 35px",
			width: "75%",
		},
	},
	projectImageExtraSmall: {
		margin: "5px 0 0 50px",
		objectFit: "cover",
		width: "65%",
		[theme.breakpoints.down("550")]: {
			margin: "5px 0 0 45px",
			width: "72%",
		},
		[theme.breakpoints.down("500")]: {
			margin: "5px 0 0 35px",
			width: "80%",
		},
		[theme.breakpoints.down("450")]: {
			margin: "5px 0 0 20px",
			width: "90%",
		},
		[theme.breakpoints.down("400")]: {
			margin: "5px 0 0 5px",
			width: "100%",
		},
		[theme.breakpoints.down("375")]: {
			margin: "10px 0 0 0",
			width: "105%",
		},
		[theme.breakpoints.down("350")]: {
			margin: "10px 0 0 -15px",
			width: "115%",
		},
	},
	image: {
		border: "3px solid #100f10",
		borderRadius: "6px",
		width: "100%",
		marginTop: "10px",
	},
	button_primary: {
		boxShadow: "1px 1px 8px #100f10",
		margin: "0 10px 0 15px",
		width: "34%",
		[theme.breakpoints.down(430)]: {
			width: "40%",
			margin: "0 5px 0 10px",
		},
		[theme.breakpoints.down(350)]: {
			width: "43%",
			margin: "0 5px 0 5px",
		},
		"&:hover": {
			boxShadow: "3px 3px 10px #37b9f1",
		},
	},
	button_primary_text: {
		fontSize: "0.9rem",
		color: "#f7f7fe",
		[theme.breakpoints.down(475)]: {
			fontSize: "0.85rem",
		},
	},
	button_image: {
		margin: "35px 0 0 50px",
		width: "95%",
		[theme.breakpoints.down(550)]: {
			margin: "40px 0 0 40px",
		},
		[theme.breakpoints.down(475)]: {
			margin: "40px 0 0 35px",
		},
		[theme.breakpoints.down(425)]: {
			margin: "40px 0 0 20px",
		},
		[theme.breakpoints.down(350)]: {
			margin: "40px 0 0 10px",
		},
	},
}));

function Project(props) {
	const classes = useStyles();
	const [category, setCategory] = useState("");
	const [display, setDisplay] = useState(true);
	const mapped = images.map((obj) => obj.category);
	const filteredCategories = mapped.filter(
		(type, index) => mapped.indexOf(type) === index
	);
	const filteredImages = images.filter((value) => value.category !== "Todos");

	const theme = useTheme();
	const isMobileSmall = useMediaQuery(theme.breakpoints.down("sm"));
	const isMobileExtraSmall = useMediaQuery(theme.breakpoints.down("xs"));
	const darkMode = props.darkMode;

	const [activeSlide, setActiveSlide] = useState(0);

	// Use diferent states for each button on the categories

	const [defaultBackground, setDefaultBackground] = useState("#37b9f1");
	const [designBackground, setDesignBackground] = useState("#1a1a19");
	const [designBackgroundDark, setDesignBackgroundDark] = useState("#3a3a3a");
	const [apiBackground, setApiBackground] = useState("#1a1a19");
	const [apiBackgroundDark, setApiBackgroundDark] = useState("#3a3a3a");
	const [reactBackground, setReactBackground] = useState("#1a1a19");
	const [reactBackgroundDark, setReactBackgroundDark] = useState("#3a3a3a");

	const handleButtonCategoryLight = (category) => {
		switch (category) {
			case "Diseño":
				setDefaultBackground("#1a1a19");
				setDesignBackground("#37b9f1");
				setApiBackground("#1a1a19");
				setReactBackground("#1a1a19");
				break;
			case "API":
				setDefaultBackground("#1a1a19");
				setDesignBackground("#1a1a19");
				setApiBackground("#37b9f1");
				setReactBackground("#1a1a19");
				break;
			case "React":
				setDefaultBackground("#1a1a19");
				setDesignBackground("#1a1919");
				setApiBackground("#1a1a19");
				setReactBackground("#37b9f1");
				break;
			default:
				setDefaultBackground("#37b9f1");
				setDesignBackground("#1a1a19");
				setApiBackground("#1a1a19");
				setReactBackground("#1a1a19");
				break;
		}
	};

	const handleButtonCategoryDark = (category) => {
		switch (category) {
			case "Diseño":
				setDefaultBackground("#3a3a3a");
				setDesignBackgroundDark("#37b9f1");
				setApiBackgroundDark("#3a3a3a");
				setReactBackgroundDark("#3a3a3a");
				break;
			case "API":
				setDefaultBackground("#3a3a3a");
				setDesignBackgroundDark("#3a3a3a");
				setApiBackgroundDark("#37b9f1");
				setReactBackgroundDark("#3a3a3a");
				break;
			case "React":
				setDefaultBackground("#3a3a3a");
				setDesignBackgroundDark("#3a3a3a");
				setApiBackgroundDark("#3a3a3a");
				setReactBackgroundDark("#37b9f1");
				break;
			default:
				setDefaultBackground("#37b9f1");
				setDesignBackgroundDark("#3a3a3a");
				setApiBackgroundDark("#3a3a3a");
				setReactBackgroundDark("#3a3a3a");
				break;
		}
	};

	function SampleNextArrow(props) {
		// this function define the behavior of the next arrow 
		const { className, style, onClick } = props;
		return (
			<Grid
				className={className}
				style={{
					...style,
					marginRight: "50px",
					position: "absolute",
				}}
				onClick={onClick}
			/>
		);
	}

	function SamplePrevArrow(props) {
		// this function define the behavior of the next arrow
		const { className, style, onClick } = props;
		return (
			<Grid
				className={className}
				style={{
					...style,
					marginLeft: "50px",
					position: "absolute",
				}}
				onClick={onClick}
			/>
		);
	}

	// Define the settings for the carousels
	const settings = {
		className: "slides",
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		arrows: true,
		swipeToSlide: false,
		centerMode: true,
		dots: true,
		adaptiveHeight: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		beforeChange: (current, next) => handleBeforeChange(current, next),
	};

	function handleBeforeChange(current, next) {
		setActiveSlide(next);
	}

	return (
		<ThemeProvider theme={MyTheme}>
			<Card darkMode={darkMode} />
			{/* Begin of the title component */}
			<Box className={classes.title}>
				{darkMode ? (
					<Typography
						className={`${classes.skills_text} ${classes.skills_text_light}`}
						style={MyTheme.typographyRubik}
					>
						Proyectos
					</Typography>
				) : (
					<Typography
						className={`${classes.skills_text} ${classes.skills_text_dark}`}
						style={MyTheme.typographyRubik}
					>
						Proyectos
					</Typography>
				)}
			</Box>
			{/* End of the title component*/}
			{/* Begin of the button component */}
			<Box className={classes.description_container}>
				<Grid container xs sm item direction="row">
					<Grid
						alignItems="center"
						className={classes.section_container}
						container
						direction="row"
						justify="center"
					>
						<ThemeProvider theme={MyTheme}>
							{/* From the filteredCategories array display the buttons
							for dark and light mode */}
							{filteredCategories.map((category) => (
								<Grid
									container
									direction="row"
									className={classes.button_container}
									key={category}
								>
									{category === "Todos" ? (
										<Grid container>
											{/* If the dark mode value is true, display the buttons with the styles for the dark mode */}
											{darkMode ? (
												<Button
													className={`${classes.button} ${classes.buttonDark}`}
													onClick={() => {
														setCategory(category);
														setDisplay(false);
														handleButtonCategoryDark(category);
														setActiveSlide(0);
													}}
													size="small"
													style={{ backgroundColor: `${defaultBackground}` }}
													variant="contained"
												>
													<Typography
														className={classes.button_text}
														style={MyTheme.typographyKarla}
													>
														{category}
													</Typography>
												</Button>
											) : (
												<Button
													className={`${classes.button} ${classes.buttonLight}`}
													onClick={() => {
														setCategory(category);
														setDisplay(false);
														handleButtonCategoryLight(category);
														setActiveSlide(0);
													}}
													size="small"
													style={{ backgroundColor: `${defaultBackground}` }}
													variant="contained"
												>
													<Typography
														className={classes.button_text}
														style={MyTheme.typographyKarla}
													>
														{category}
													</Typography>
												</Button>
											)}
										</Grid>
									) : null}
									{category === "Diseño" ? (
										<Grid container>
											{darkMode ? (
												<Button
													className={classes.button}
													onClick={() => {
														setCategory(category);
														setDisplay(false);
														handleButtonCategoryDark(category);
														setActiveSlide(0);
													}}
													size="small"
													style={{ backgroundColor: `${designBackgroundDark}` }}
													variant="contained"
												>
													<Typography
														className={classes.button_text}
														style={MyTheme.typographyKarla}
													>
														{category}
													</Typography>
												</Button>
											) : (
												<Button
													className={classes.button}
													onClick={() => {
														setCategory(category);
														setDisplay(false);
														handleButtonCategoryLight(category);
														setActiveSlide(0);
													}}
													size="small"
													style={{ backgroundColor: `${designBackground}` }}
													variant="contained"
												>
													<Typography
														className={classes.button_text}
														style={MyTheme.typographyKarla}
													>
														{category}
													</Typography>
												</Button>
											)}
										</Grid>
									) : null}
									{category === "API" ? (
										<Grid container>
											{darkMode ? (
												<Button
													className={classes.button}
													onClick={() => {
														setCategory(category);
														setDisplay(false);
														handleButtonCategoryDark(category);
														setActiveSlide(0);
													}}
													size="small"
													style={{ backgroundColor: `${apiBackgroundDark}` }}
													variant="contained"
												>
													<Typography
														className={classes.button_text}
														style={MyTheme.typographyKarla}
													>
														{category}
													</Typography>
												</Button>
											) : (
												<Button
													className={classes.button}
													onClick={() => {
														setCategory(category);
														setDisplay(false);
														handleButtonCategoryLight(category);
														setActiveSlide(0);
													}}
													size="small"
													style={{ backgroundColor: `${apiBackground}` }}
													variant="contained"
												>
													<Typography
														className={classes.button_text}
														style={MyTheme.typographyKarla}
													>
														{category}
													</Typography>
												</Button>
											)}
										</Grid>
									) : null}
									{category === "React" ? (
										<Grid container>
											{darkMode ? (
												<Button
													className={classes.button}
													onClick={() => {
														setCategory(category);
														setDisplay(false);
														handleButtonCategoryDark(category);
														setActiveSlide(0);
													}}
													size="small"
													style={{ backgroundColor: `${reactBackgroundDark}` }}
													variant="contained"
												>
													<Typography
														className={classes.button_text}
														style={MyTheme.typographyKarla}
													>
														{category}
													</Typography>
												</Button>
											) : (
												<Button
													className={classes.button}
													onClick={() => {
														setCategory(category);
														setDisplay(false);
														handleButtonCategoryLight(category);
														setActiveSlide(0);
													}}
													size="small"
													style={{ backgroundColor: `${reactBackground}` }}
													variant="contained"
												>
													<Typography
														className={classes.button_text}
														style={MyTheme.typographyKarla}
													>
														{category}
													</Typography>
												</Button>
											)}
										</Grid>
									) : null}
								</Grid>
							))}
						</ThemeProvider>
					</Grid>
				</Grid>
			</Box>
			{/* From display the project images, first in mobile devices and then in large devices */}
			<Box className={classes.projects_container}>
				{isMobileSmall ? (
					<Grid className="App">
						{isMobileExtraSmall ? (
							<Grid>
								{/** Display the project images for extra small devices */}
								{display || category === "Todos" ? (
									<Grid>
										{/** Display all the projects */}
										<Slider
											{...settings}
											className={classes.projectImageExtraSmall}
										>
											{filteredImages.map((image, index) => {
												return (
													<img
														className={classes.projectImage}
														alt={image.title}
														src={image.urlResponsive}
														key={index}
													/>
												);
											})}
										</Slider>
										<Buttons id={activeSlide} />
									</Grid>
								) : null}
								{category === "Diseño" ? (
									<Grid>
										{/** Display the projects images for the design category */}
										<Slider
											{...settings}
											className={classes.projectImageExtraSmall}
										>
											<img
												className={classes.image}
												src="/static/images/projects/huddle-landing-mobile.avif"
												alt="Huddle landing"
											/>
											<img
												className={classes.image}
												src="/static/images/projects/profile-card-mobile.avif"
												alt="Profile card"
											/>
											<img
												className={classes.image}
												src="/static/images/projects/testimonial-grid-mobile.avif"
												alt="Testimonial grid"
											/>
											<img
												className={classes.image}
												src="/static/images/projects/fylo-landing-mobile.avif"
												alt="Fylo Landing"
											/>
										</Slider>
										<Buttons id={activeSlide} />
									</Grid>
								) : null}
								{category === "API" ? (
									<Grid>
										{/** Display the projects images for the API category */}
										<Slider
											{...settings}
											className={classes.projectImageExtraSmall}
										>
											<img
												className={classes.image}
												src="/static/images/projects/github-profile-finder-mobile.avif"
												alt="GithubPF"
											/>
										</Slider>
										<Buttons id={4} />
									</Grid>
								) : null}
								{category === "React" ? (
									<Grid>
										{/** Display the projects images for the React category */}
										<Slider
											{...settings}
											className={classes.projectImageExtraSmall}
										>
											<img
												className={classes.image}
												src="/static/images/projects/react-pokeballs-mobile.avif"
												alt="React pokeballs"
											/>
										</Slider>
										<Buttons id={5} />
									</Grid>
								) : null}
							</Grid>
						) : (
							<Grid>
								{display || category === "Todos" ? (
									<Grid>
										{/** Display all the projects on small devices */}
										<Slider
											{...settings}
											className={classes.projectImageCarousel}
										>
											{filteredImages.map((image, index) => {
												return (
													<img
														className={classes.projectImage}
														alt={image.title}
														src={image.url}
														key={index}
													/>
												);
											})}
										</Slider>
										<Buttons id={activeSlide} />
									</Grid>
								) : null}
								{category === "Diseño" ? (
									<Grid>
										{/** Display the projects images for the design category */}
										<Slider
											{...settings}
											className={classes.projectImageCarousel}
										>
											<img
												className={classes.projectImage}
												src="/static/images/projects/huddle-landing.avif"
												alt="Huddle landing"
											/>
											<img
												className={classes.projectImage}
												src="/static/images/projects/profile-card.avif"
												alt="Profile card"
											/>
											<img
												className={classes.projectImage}
												src="/static/images/projects/testimonial-grid.avif"
												alt="Testimonial grid"
											/>
											<img
												className={classes.projectImage}
												src="/static/images/projects/fylo-landing.avif"
												alt="Fylo Landing"
											/>
										</Slider>
										<Buttons id={activeSlide} />
									</Grid>
								) : null}
								{category === "API" ? (
									<Grid>
										{/** Display the projects images for the API category */}
										<Slider
											{...settings}
											className={classes.projectImageCarousel}
										>
											<img
												className={classes.projectImage}
												src="/static/images/projects/github-profile-finder.avif"
												alt="GithubPF"
											/>
										</Slider>
										<Buttons id={4} />
									</Grid>
								) : null}
								{category === "React" ? (
									<Grid>
										{/** Display the projects images for the React category */}
										<Slider
											{...settings}
											className={classes.projectImageCarousel}
										>
											<img
												className={classes.projectImage}
												src="/static/images/projects/react-pokeballs.avif"
												alt="React pokeballs"
											/>
										</Slider>
										<Buttons id={5} />
									</Grid>
								) : null}
							</Grid>
						)}
					</Grid>
				) : (
					<Grid className={classes.root}>
						{display || category === "Todos" ? (
							<Grid className={classes.buttonB}>
								{/** Display the projects images for all the categories and by default display all the categories with the category all button selected */}
								<CardImage
									category={category}
									demo="https://gabrielfierro.github.io/Huddle-landing-page/"
									repository="https://github.com/GabrielFierro/Huddle-landing-page"
									title="Huddle landing"
									url="/static/images/projects/huddle-landing.avif"
									width="100%"
								/>
								<CardImage
									category={category}
									demo="https://gabrielfierro.github.io/ProfileCardComponent/"
									repository="https://github.com/GabrielFierro/ProfileCardComponent"
									title="Profile card"
									url="/static/images/projects/profile-card.avif"
									width="100%"
								/>
								<CardImage
									category={category}
									demo="https://gabrielfierro.github.io/TestimonialsGridSection/"
									repository="https://github.com/GabrielFierro/TestimonialsGridSection"
									title="Testimonial grid"
									url="/static/images/projects/testimonial-grid.avif"
									width="100%"
								/>
								<CardImage
									category={category}
									demo="https://gabrielfierro.github.io/Fylo-landing-page/"
									repository="https://github.com/GabrielFierro/Fylo-landing-page"
									title="Fylo landing"
									url="/static/images/projects/fylo-landing.avif"
									width="100%"
								/>
								<CardImage
									category={category}
									demo="https://github-profile-finder-gabrielfierro.vercel.app/"
									repository="https://github.com/GabrielFierro/GithubProfileFinder"
									title="GitHub Profile"
									url="/static/images/projects/github-profile-finder.avif"
									width="100%"
								/>
								<CardImage
									category={category}
									demo="https://gabrielfierro.github.io/React-Pokeball/"
									repository="https://github.com/GabrielFierro/React-Pokeball"
									title="Pokeballs"
									url="/static/images/projects/react-pokeballs.avif"
									width="100%"
								/>
							</Grid>
						) : null}
						{category === "Diseño" && (
							<Grid className={classes.buttonB}>
								{/** When the user click on the button Diseño display the project images for the design category */}
								<CardImage
									category={category}
									demo="https://gabrielfierro.github.io/Huddle-landing-page/"
									repository="https://github.com/GabrielFierro/Huddle-landing-page"
									title="Huddle landing"
									url="/static/images/projects/huddle-landing.avif"
									width="100%"
								/>
								<CardImage
									category={category}
									demo="https://gabrielfierro.github.io/ProfileCardComponent/"
									repository="https://github.com/GabrielFierro/ProfileCardComponent"
									title="Profile"
									url="/static/images/projects/profile-card.avif"
									width="100%"
								/>
								<CardImage
									category={category}
									demo="https://gabrielfierro.github.io/TestimonialsGridSection/"
									repository="https://github.com/GabrielFierro/TestimonialsGridSection"
									title="Testimonial grid"
									url="/static/images/projects/testimonial-grid.avif"
									width="100%"
								/>
								<CardImage
									category={category}
									demo="https://gabrielfierro.github.io/Fylo-landing-page/"
									repository="https://github.com/GabrielFierro/Fylo-landing-page"
									title="Fylo landing"
									url="/static/images/projects/fylo-landing.avif"
									width="100%"
								/>
							</Grid>
						)}
						{category === "API" && (
							<Grid className={classes.buttonB}>
								{/** When the user click on the button API display the project images for the API category */}
								<CardImage
									category={category}
									demo="https://github-profile-finder-gabrielfierro.vercel.app/"
									repository="https://github.com/GabrielFierro/GithubProfileFinder"
									title="GitHub Profile"
									url="/static/images/projects/github-profile-finder.avif"
									width="100%"
								/>
							</Grid>
						)}
						{category === "React" && (
							<Grid className={classes.buttonB}>
								{/** When the user click on the button React display the project images for the React category */}
								<CardImage
									category={category}
									demo="https://gabrielfierro.github.io/React-Pokeball/"
									repository="https://github.com/GabrielFierro/React-Pokeball"
									title="Pokeballs"
									url="/static/images/projects/react-pokeballs.avif"
									width="100%"
								/>
							</Grid>
						)}
					</Grid>
				)}
			</Box>
		</ThemeProvider>
	);
}

export default Project;
