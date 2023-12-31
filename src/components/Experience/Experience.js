/* Experience.js */
/* import the Card component */
import Card from "../Card/Card";
/* import the image about the project like a Component */
import Magenta from "../../assets/images/magenta/magenta.avif";
import MagentaMobile from "../../assets/images/magenta/magenta_mobile.avif";
/* import the theme */
import MyTheme from "../../MyTheme";
/* import for the MaterialUI library */
import {
	Box,
	Button,
	Grid,
	makeStyles,
	Typography,
	ThemeProvider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	title: {
		position: "relative",
		width: "100%",
	},
	skills_text: {
		color: MyTheme.palette.primary.main,
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
	skills_text_light: {
		color: MyTheme.palette.primary.main,
	},
	skills_text_dark: {
		color: MyTheme.palette.primary.dark,
	},

	project_name: {
		alignItems: "center",
		display: "flex",
		fontSize: "1.75rem",
		justifyContent: "center",
		[theme.breakpoints.down("md")]: {
			fontSize: "1.5rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.25rem",
			marginLeft: "10px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "1rem",
			marginLeft: "0px",
		},
	},
	project_name_ligth: {
		color: MyTheme.palette.primary.main,
	},
	project_name_dark: {
		color: MyTheme.palette.primary.dark,
	},
	project_name_description: {
		alignItems: "center",
		display: "flex",
		fontSize: "1rem",
		justifyContent: "center",
		width: "100%",
	},
	description_text: {
		fontSize: "1.25rem",
		[theme.breakpoints.down("sm")]: {
			fontSize: "1rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.75rem",
		},
	},
	description_text_light: {
		color: MyTheme.palette.primary.main,
	},
	description_text_dark: {
		color: MyTheme.palette.primary.dark,
	},
	description_container: {
		height: "70%",
		left: "15%",
		position: "absolute",
		top: "20%",
		width: "70%",
	},
	left_container: {
		height: "50%",
		left: "15%",
		position: "absolute",
		top: "35%",
		width: "35%",
		[theme.breakpoints.down("xs")]: {
			top: "30%",
		},
	},
	right_container: {
		height: "50%",
		left: "52%",
		position: "absolute",
		top: "30%",
		width: "35%",
	},
	project_image: {
		margin: "10px 0 0 5px",
		width: "90%",
	},
	image: {
		borderRadius: "5px",
		margin: "5px 0 10px 0",
		width: "100%",
		[theme.breakpoints.down("sm")]: {
			marginLeft: "-10px",
		},
	},
	button: {
		margin: "5px 0 5px 0",
		width: "80%",
		[theme.breakpoints.down("xs")]: {
			margin: "5px 0 5px -20px",
		},
	},
	button_container: {
		height: "50%",
		width: "100%",
	},
	button_image: {
		margin: "5px",
		width: "40%",
	},
	informative_button: {
		boxShadow: "1px 1px 8px #100f10",
		width: "100%",
	},
	button_primary: {
		boxShadow: "1px 1px 8px #100f10",
		width: "90%",
		"&:hover": {
			boxShadow: "3px 3px 10px #37b9f1",
		},
	},
	button_secondary: {
		boxShadow: "1px 1px 8px #100f10",
		width: "90%",
		"&:hover": {
			boxShadow: "3px 3px 10px #37b9f1",
		},
	},
	button_text: {
		color: "#f7f7fe",
		fontSize: "1.25rem",
		[theme.breakpoints.down("md")]: {
			fontSize: "0.75rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.6rem",
		},
	},
	button_text_primary: {
		color: "#f7f7fe",
		fontSize: "1.25rem",
		paddingTop: "3px",
		[theme.breakpoints.down("md")]: {
			fontSize: "0.75rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.5rem",
			paddingTop: "0px",
		},
	},
	button_text_secondary: {
		color: "#100f10",
		fontSize: "1.25rem",
		[theme.breakpoints.down("md")]: {
			fontSize: "0.75rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.5rem",
		},
	},
	primary_button: {
		marginLeft: "15px",
		width: "110px",
	},
	primary_button_text: {
		color: "#f7f7fe",
		fontSize: "24px",
	},
}));

function Experience(props) {
	const classes = useStyles();
	const darkMode = props.darkMode;

	return (
		<ThemeProvider theme={MyTheme}>
			<Card darkMode={darkMode} />
			<Grid>
				{/* if the darkMode value is true display the text with the withe color */}
				{/* else if the darkMode value is false display the text with the black color */}
				{darkMode ? (
					<Grid>
						<Grid item xs={12} className={classes.description_container}>
							<Box className={classes.title}>
								<Typography
									className={`${classes.skills_text} ${classes.skills_text_light}`}
									style={MyTheme.typographyRubik}
								>
									Experiencia
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={6}>
							<Grid className={classes.left_container}>
								<Typography
									className={`${classes.project_name} ${classes.project_name_ligth}`}
									style={MyTheme.typographyRubik}
								>
									Code in magenta
								</Typography>
								<Grid container direction="row">
									<Grid
										container
										direction="column"
										className={classes.project_name_description}
									>
										<Grid className={classes.button}>
											<Button
												className={classes.informative_button}
												style={MyTheme.palette.buttonPrimary}
											>
												<Typography className={classes.button_text}>
													Octubre 2020 - Noviembre 2020
												</Typography>
											</Button>
										</Grid>
										<Typography
											className={`${classes.description_text} ${classes.description_text_light}`}
											style={MyTheme.typographyKarla}
										>
											Creación de una landing page fictiosa, cuyo objetivo es
											compartir cursos, eventos y recursos para programadores
											que inician, así como para aquellos más experimentados.
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				) : (
					<Grid>
						<Grid item xs={12} className={classes.description_container}>
							<Box className={classes.title}>
								<Typography
									className={`${classes.skills_text} ${classes.skills_text_dark}`}
									style={MyTheme.typographyRubik}
								>
									Experiencia
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={6}>
							<Grid className={classes.left_container}>
								<Typography
									className={`${classes.project_name} ${classes.project_name_dark}`}
									style={MyTheme.typographyRubik}
								>
									Code in magenta
								</Typography>
								<Grid container direction="row">
									<Grid
										container
										direction="column"
										className={classes.project_name_description}
									>
										<Grid className={classes.button}>
											<Button
												className={classes.informative_button}
												style={MyTheme.palette.buttonPrimary}
											>
												<Typography className={classes.button_text}>
													Octubre 2020 - Noviembre 2020
												</Typography>
											</Button>
										</Grid>
										<Typography
											className={`${classes.description_text} ${classes.description_text_dark}`}
											style={MyTheme.typographyKarla}
										>
											Creación de una landing page fictiosa, cuyo objetivo es
											compartir cursos, eventos y recursos para programadores
											que inician, así como para aquellos más experimentados.
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				)}
				{/* In this section the component have the project image and the buttons to the demo and to the repository */}
				<Grid item xs={6} className={classes.right_container}>
					<Grid container>
						<Grid className={classes.project_image}>
							<picture>
								<source media="(min-width:660px)" srcSet={Magenta}></source>
								<source
									media="(min-width:200px)"
									srcSet={MagentaMobile}
								></source>
								<img
									alt="magenta project"
									className={classes.image}
									src={Magenta}
								></img>
							</picture>
						</Grid>
						<Grid
							className={classes.button_container}
							container
							direction="row"
							item
							xs={12}
						>
							{/* Then the buttons to the demo and to the repository */}
							<Grid className={classes.button_image} item xs={6} sm={5}>
								<Button
									className={classes.button_primary}
									href={"https://magentateam.github.io/landingOng/public/"}
									target="_blank"
									rel="noopener noreferrer"
									style={MyTheme.palette.buttonPrimary}
								>
									<Typography className={classes.button_text_primary}>
										Demo
									</Typography>
								</Button>
							</Grid>
							<Grid className={classes.button_image} item xs={6} sm={5}>
								<Button
									className={classes.button_secondary}
									href={"https://github.com/magentateam/landingOng"}
									target="_blank"
									rel="noopener noreferrer"
									style={MyTheme.palette.buttonSecondary}
								>
									<Typography className={classes.button_text_secondary}>
										Repositorio
									</Typography>
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

export default Experience;
