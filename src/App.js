/* React imports */
import { React, useState } from "react";
/* ReactRouter import */
import {
	Link,
	NavLink,
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
/* MaterialUI imports*/
import {
	AppBar,
	createMuiTheme,
	IconButton,
	Grid,
	makeStyles,
	Menu,
	MenuItem,
	ThemeProvider,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme,
} from "@material-ui/core";
import MaterialSwitch from "@material-ui/core/Switch";
/* Components sections imports */
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
/* import the css code */
import "./index.css";
/* import the theme file */
import MyTheme from "./MyTheme";
/* import the menu icon from a relative directory */
import { ReactComponent as MenuIcon } from "./assets/images/icons/menu.svg";
/* Background */
import Background from "./components/Background/Background";

const useStyles = makeStyles((theme) => ({
	typography: {
		fontSize: "1.75rem",
		[theme.breakpoints.down("md")]: {
			fontSize: "1.35rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.85rem",
		},
		[theme.breakpoints.down("xs")]: {},
	},
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(6),
	},
	title: {
		flexGrow: 1,
	},
	switch: {
		marginLeft: "100px",
		[theme.breakpoints.down("sm")]: {
			marginLeft: "-25px",
		},
	},
	switchBase: {
		color: "#f7f7fe	",
		"&$checked": {
			color: "#37b9f1",
			"&:hover": {
				color: "#f7f7fe",
				backgroundColor: "#37b9f1",
			},
		},
		"&$checked + $track": {
			backgroundColor: "#37b9f1",
		},
	},
	checked: {},
	track: {
		backgroundColor: "#f7f7fe",
	},
	logo_name: {
		marginLeft: "-55px",
		marginTop: "5px",
	},
}));

function App() {
	const classes = useStyles();
	/* These states and values define the hamburger menu on small devices */
	const [anchor, setAnchor] = useState(null);
	const open = Boolean(anchor);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const handleMenu = (event) => {
		setAnchor(event.currentTarget);
	};

	const [darkMode, setDarkMode] = useState(false); // state to manage the dark mode

	const lightTheme = createMuiTheme({
		palette: {
			primary: {
				main: "#37b9f1",
			},
		},
	});

	const darkTheme = createMuiTheme({
		palette: {
			type: "dark",
			primary: {
				main: "#1a1919",
			},
		},
	});

	const handleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<Router>
			<Grid className={classes.root}>
				<AppBar position="fixed">
					<nav>
						<Toolbar>
							{/* Depends of the darkMode value the component will have a light or dark theme */}
							<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
								<Typography
									className={classes.typography}
									style={MyTheme.typographyRubik}
								>
									{/* if the isMobile value is true display the hamburger menu with its sections inside */}
									{/* else if isMobile is false display the sections name with its links to the specific route */}
									{isMobile ? (
										<>
											<IconButton
												color="textPrimary"
												className={classes.menuButton}
												edge="start"
												aria-label="menu"
												onClick={handleMenu}
											>
												<MenuIcon />
											</IconButton>
											<Menu
												id="menu-appbar"
												anchorEl={anchor}
												anchorOrigin={{
													vertical: "top",
													horizontal: "right",
												}}
												KeepMounted
												transformOrigin={{
													vertical: "top",
													horizontal: "right",
												}}
												open={open}
											>
												<MenuItem
													onClick={() => setAnchor(null)}
													component={Link}
													to="/"
												>
													<Typography variant="h6"> Home </Typography>
												</MenuItem>
												<MenuItem
													onClick={() => setAnchor(null)}
													component={Link}
													to="/about"
												>
													<Typography variant="h6"> Acerca de mi </Typography>
												</MenuItem>
												<MenuItem
													onClick={() => setAnchor(null)}
													component={Link}
													to="/Experience"
												>
													<Typography variant="h6"> Experiencia </Typography>
												</MenuItem>
												<MenuItem
													onClick={() => setAnchor(null)}
													component={Link}
													to="/Project"
												>
													<Typography variant="h6"> Proyectos </Typography>
												</MenuItem>
												<MenuItem
													onClick={() => setAnchor(null)}
													component={Link}
													to="/Contact"
												>
													<Typography variant="h6"> Contacto </Typography>
												</MenuItem>
											</Menu>
										</>
									) : (
										<Grid
											container
											justify="center"
											style={{ marginLeft: "100px" }}
										>
											<NavLink exact to="/">
												<img
													className={classes.logo_name}
													src="/logo_name.png"
													alt="Logo"
												/>
											</NavLink>
											<NavLink exact to="/">
												Home
											</NavLink>
											<NavLink exact to="/about">
												Acerca de mi
											</NavLink>
											<NavLink exact to="/experience">
												Experiencia
											</NavLink>
											<NavLink exact to="/project">
												Proyectos
											</NavLink>
											<NavLink exact to="/contact">
												Contacto
											</NavLink>
										</Grid>
									)}
								</Typography>
								<MaterialSwitch
									classes={{
										root: classes.switch,
										switchBase: classes.switchBase,
										track: classes.track,
										checked: classes.checked,
									}}
									checked={darkMode}
									onChange={() => {
										handleDarkMode();
									}}
								/>
							</ThemeProvider>
						</Toolbar>
					</nav>
				</AppBar>
			</Grid>
			{/* In this section manage the route to the differents sections and add the prop darkMode to every component */}
			<Switch>
				<Route exact path="/">
					<Home darkMode={darkMode} />
				</Route>
				<Route exact path="/about">
					<About darkMode={darkMode} />
				</Route>
				<Route exact path="/experience">
					<Experience darkMode={darkMode} />
				</Route>
				<Route exact path="/project">
					<Project darkMode={darkMode} />
				</Route>
				<Route exact path="/contact">
					<Contact darkMode={darkMode} isMobile={isMobile} />
				</Route>
			</Switch>
			<Background darkMode={darkMode} isMobile={isMobile} />
		</Router>
	);
}

export default App;
