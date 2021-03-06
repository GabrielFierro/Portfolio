import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
	palette: {
		primary: {
			main: "#f7f7fe",
			dark: "#1a1919",
		},
		accentColor: {
			color: "#37b9f1",
		},
		buttonSecondary: {
			backgroundColor: "#f7f7fe",
			contrastText: "#37b9f1",
			border: "1px solid #37b9f1",
		},
		buttonPrimary: {
			backgroundColor: "#37b9f1",
			constrastText: "#f7f7fe",
		},
	},
	typographyRubik: {
		fontFamily: "Rubik",
		fontWeight: 700,
	},
	typographyKarla: {
		fontFamily: "Karla",
		fontWeight: 700,
	},
});
