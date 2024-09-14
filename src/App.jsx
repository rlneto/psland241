import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Logo from "./components/Logo";
import shared from "./styles/Shared.module.css";

const theme = createTheme({
	typography: {
		fontFamily: "Koho, Krub, sans-serif",
	},
	palette: {
		spacecadet: {
			main: "#82337E",
		},
		midnight: {
			main: "#023047",
			light: "#1CACD8",
		},
		sunrise: {
			main: "#FFB703",
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className={`${shared.backgroundStyle}`}>
				<Grid
					container
					spacing={1}
					direction="column"
					justifyContent="center"
					alignItems="center"
				>
					<Grid item xs={12} sm={12} md={12} style={{ marginTop: "20px" }}>
						<Card
							sx={{
								width: 0.95,
								maxWidth: "1200px",
								height: 0.9,
								p: 0.1,
								mx: "auto",
								align: "center",
								boxShadow: 3,
							}}
						>
							<CardContent>
								<Grid
									container
									direction="column"
									justifyContent="center"
									alignItems="center"
								>
									<Grid item xs={12}>
										<Logo />
									</Grid>
									<Grid item xs={12}>
										<Typography
											sx={{
												textAlign: "center",
												mx: "auto",
												mt: 3,
												mb: 3,
											}}
											variant="h5"
										>
											Inscrições encerradas! Agradecemos o interesse.
										</Typography>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</div>
		</ThemeProvider>
	);
}

export default App;
