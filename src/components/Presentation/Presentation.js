/* imports for the MaterialUI library */
import { Grid, ThemeProvider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
/* import my theme */
import MyTheme from "../../MyTheme";

const useStyles = makeStyles((theme) => ({
	cardLight: {
		backgroundColor: MyTheme.palette.primary.main,
		height: "100vh",
		position: "absolute",
		width: "50%",
		left: "0%",
		[theme.breakpoints.down("xs")]: {
			width: "80%",
			height: "100%",
		},
	},
	cardDark: {
		backgroundColor: MyTheme.palette.primary.dark,
		height: "100vh",
		position: "absolute",
		width: "50%",
		left: "50%",
		[theme.breakpoints.down("xs")]: {
			left: "20%",
			width: "80%",
			height: "100%",
		},
	},
	title: {
		color: "#f7f7fe",
		letterSpacing: "-0.00833em",
		lineHeight: "1.5",
		margin: "-2rem 1.5rem 0 1.5rem",
		position: "relative",
		top: "30%",
		[theme.breakpoints.down("md")]: {
			fontSize: "3rem",
			top: "25%",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "2.75rem",
			margin: "0 0.5rem 0 0.5rem",
			top: "20%",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "2rem",
			margin: "1rem 1.25rem 0 1rem",
		},
	},
	titleLight: {
		color: "#100f10",
	},
	titleDark: {
		color: "#f7f7fe",
	},

	subtitle: {
		color: "#f7f7fe",
		display: "block",
		letterSpacing: "-0.00833em",
		lineHeight: "1.5",
		[theme.breakpoints.down("md")]: {
			fontSize: "3rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "2.75rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "2rem",
			margin: "1rem 1.25rem 0 0",
		},
	},
	subtitleLight: {
		color: "#100f10",
	},
	subtitleDark: {
		color: "#f7f7fe",
	},
	spanColor: {
		color: "#37b9f1",
		[theme.breakpoints.down("sm")]: {
			fontSize: "2.75rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "2rem",
		},
	},
}));

function Presentation(props) {
	const classes = useStyles();
	const darkMode = props.darkMode;

	return (
		<article>
			<ThemeProvider theme={MyTheme}>
				{/* if the darkMode value is true, display the card to the right with a dark background */}
				{/* else if the darkMode value is false, display the card to the left with a white background */}
				{darkMode ? (
					<Grid
						container
						item
						xs
						direction="column"
						className={classes.cardDark}
					>
						<Typography
							variant="h2"
							className={`${classes.title} ${classes.titleDark}`}
							style={MyTheme.typographyRubik}
						>
							Hola, me llamo Gabriel Fierro.
							<Typography
								component="span"
								variant="h2"
								className={`${classes.subtitle} ${classes.subtitleDark}`}
								style={MyTheme.typographyRubik}
							>
								Soy un desarrollador
								<Typography
									variant="h2"
									component="span"
									className={classes.spanColor}
									style={MyTheme.typographyRubik}
								>
									{" "}
									front-end{" "}
								</Typography>
								creativo.
							</Typography>
						</Typography>
					</Grid>
				) : (
					<Grid
						container
						item
						xs
						direction="column"
						className={classes.cardLight}
					>
						<Typography
							variant="h2"
							className={`${classes.title} ${classes.titleLight}`}
							style={MyTheme.typographyRubik}
						>
							Hola, me llamo Gabriel Fierro.
							<Typography
								component="span"
								variant="h2"
								className={`${classes.subtitle} ${classes.subtitleLight}`}
								style={MyTheme.typographyRubik}
							>
								Soy un desarrollador
								<Typography
									variant="h2"
									component="span"
									className={classes.spanColor}
									style={MyTheme.typographyRubik}
								>
									{" "}
									front-end{" "}
								</Typography>
								creativo.
							</Typography>
						</Typography>
					</Grid>
				)}
			</ThemeProvider>
		</article>
	);
}

export default Presentation;
