import { ThemeProvider } from "@emotion/react";
import SendIcon from "@mui/icons-material/Send";
import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { createTheme, styled } from "@mui/material/styles";
import Axios from "axios";
import { useEffect, useRef, useState } from "react";
import ReCaptcha from "react-google-recaptcha";
import Logo from "./components/Logo";
import shared from "./styles/Shared.module.css";

const api = Axios.create({
	baseURL: "https://psbackend-pelc.onrender.com/api/v1/register/",
	headers: {
		"Content-Type": "application/json",
	},
});

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
		midday: {
			main: "#1CACD8",
		},
	},
});

const descricoes = {
	gi: "A Gestão Interna é a diretoria responsável por cuidar dos aspectos jurídicos, financeiros e administrativos da Pixel.",
	comercial:
		"A diretoria comercial é responsável pela precificação e prospecção de clientes, além de cuidar do relacionamento com os clientes atuais.",
	projetos:
		"A diretoria de projetos é responsável por gerenciar equipes de desenvolvimento e documentar os projetos da Pixel.",
	marketing:
		"A diretoria de marketing é responsável por cuidar da comunicação e imagem da Pixel e fazer estudos mercadológicos acerca da mesma.",
	presidencia:
		"A presidência é a diretoria responsável por representar a Pixel oficialmente e cuidar do relacionamento com outras empresas juniores e com a UFSC.",
	dho: "A diretoria de desenvolvimento humano e organizacional é responsável por cuidar do desenvolvimento pessoal e promover o engajamento e permanência dos membros na Pixel.",
};

const PixelSlider = styled(Slider)({
	color: "#82337E",
	height: 8,
	"& .MuiSlider-track": {
		border: "none",
	},
	"& .MuiSlider-thumb": {
		height: 24,
		width: 24,
		backgroundColor: "#fff",
		border: "2px solid currentColor",
		"&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
			boxShadow: "inherit",
		},
		"&::before": {
			display: "none",
		},
	},
	"& .MuiSlider-valueLabel": {
		lineHeight: 1.2,
		fontSize: 12,
		background: "unset",
		padding: 0,
		width: 32,
		height: 32,
		borderRadius: "50% 50% 50% 0",
		backgroundColor: "#82337E",
		transformOrigin: "bottom left",
		transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
		"&::before": { display: "none" },
		"&.MuiSlider-valueLabelOpen": {
			transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
		},
		"& > *": {
			transform: "rotate(45deg)",
		},
	},
});

const cursos = [
	{ label: "Ciências da Computação", id: 1 },
	{ label: "Sistemas de Informação", id: 2 },
	{ label: "Outro", id: 3 },
];

const generos = [
	{ label: "Feminino (Cisgênero)", id: 1 },
	{ label: "Masculino (Cisgênero)", id: 2 },
	{ label: "Feminino (Transgênero)", id: 3 },
	{ label: "Masculino (Transgênero)", id: 4 },
	{ label: "Não-binário", id: 5 },
	{ label: "Gênero fluido", id: 6 },
	{ label: "Outro", id: 7 },
];

const racas = [
	{ label: "Preto", id: 1 },
	{ label: "Branco", id: 2 },
	{ label: "Pardo", id: 3 },
	{ label: "Amarelo", id: 4 },
	{ label: "Indígena", id: 5 },
	{ label: "Outro", id: 6 },
];

function App() {
	const nomeRef = useRef(null);
	const matriculaRef = useRef(null);
	const faseRef = useRef(null);
	const horasRef = useRef(null);
	const trabRef = useRef(null);
	const expRef = useRef(null);
	const inglesRef = useRef(null);
	const mandarimRef = useRef(null);
	const espanholRef = useRef(null);
	const javascriptRef = useRef(null);
	const nodejsRef = useRef(null);
	const reactRef = useRef(null);
	const wordpressRef = useRef(null);
	const nextjsRef = useRef(null);
	const cssRef = useRef(null);
	const frontendRef = useRef(null);
	const backendRef = useRef(null);
	const gestaoRef = useRef(null);
	const gerenciaRef = useRef(null);
	const vendasRef = useRef(null);
	const atraiuRef = useRef(null);
	const expectRef = useRef(null);
	const agregarRef = useRef(null);
	const giRef = useRef(null);
	const comercialRef = useRef(null);
	const projetosRef = useRef(null);
	const marketingRef = useRef(null);
	const presidenciaRef = useRef(null);
	const dhoRef = useRef(null);
	const emailRef = useRef(null);
	const whatsappRef = useRef(null);
	const linkedinRef = useRef(null);
	const githubRef = useRef(null);
	const recaptchaRef = useRef(null);

	const respostas_padrao = {
		nome: "",
		genero: "",
		raca: "",
		curso: "",
		matricula: "",
		fase: 1,
		horas: 20,
		trab: "",
		exp: "",
		idiomas: [],
		tecnologias: [],
		interesse: [],
		atraiu: "",
		expect: "",
		agregar: "",
		diretorias: [],
		remunera: "",
		reuniao: "",
		oitohoras: "",
		inclusao: "",
		trilhas: "",
		email: "",
		whatsapp: "",
		linkedin: "",
		github: "",
		soma: 10,
	};

	const [respostas, setRespostas] = useState(respostas_padrao);
	const [horas, setHoras] = useState(20);

	const [fase, setFase] = useState(1);

	const [erroMatricula, setErroMatricula] = useState("");

	const [erroWhatsapp, setErroWhatsapp] = useState("");

	const [errorTitulo, setErrorTitulo] = useState("");

	const [errorMessage, setErrorMessage] = useState("");

	const [loading, setLoading] = useState(false);

	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	};

	const [token, setToken] = useState(null);

	const geraTokenRecaptcha = () => {
		const tokenrc = recaptchaRef.current.getValue();
		setToken(tokenrc);
	};

	const [sucesso, setSucesso] = useState(false);

	const nomeChangeHandler = () => {
		setRespostas({ ...respostas, nome: nomeRef.current.value });
	};

	const generoChangeHandler = (e) => {
		setRespostas({ ...respostas, genero: e.target.value });
	};

	const racaChangeHandler = (e) => {
		setRespostas({ ...respostas, raca: e.target.value });
	};

	const cursoChangeHandler = (e) => {
		setRespostas({ ...respostas, curso: e.target.value });
	};

	const matriculaChangeHandler = (e) => {
		const sanitizedValue = e.target.value.replace(/[^0-9]/g, "");
		setRespostas({ ...respostas, matricula: sanitizedValue });

		if (sanitizedValue !== e.target.value) {
			setErroMatricula("A matrícula deve conter apenas números");
		} else {
			setErroMatricula("");
		}
	};

	const changeFaseHandler = (event, newValue) => {
		// A ordem no nome foi alterada para indicar que esse handler e o próximo são usados nos sliders
		setFase(newValue);
		setRespostas({ ...respostas, fase: newValue });
	};

	const changeHorasHandler = (event, newValue) => {
		setHoras(newValue);
		setRespostas({ ...respostas, horas: newValue });
	};
	const trabChangeHandler = () => {
		setRespostas({ ...respostas, trab: trabRef.current.value });
	};

	const expChangeHandler = () => {
		setRespostas({ ...respostas, exp: expRef.current.value });
	};

	const inglesChangeHandler = () => {
		inglesRef.current.value = "Inglês";
		if (respostas.idiomas.includes(inglesRef.current.value)) {
			setRespostas({
				...respostas,
				idiomas: respostas.idiomas.filter(
					(item) => item !== inglesRef.current.value,
				),
			});
		} else {
			setRespostas({
				...respostas,
				idiomas: [...respostas.idiomas, inglesRef.current.value],
			});
		}
	};
	const mandarimChangeHandler = () => {
		mandarimRef.current.value = "Mandarim";
		if (respostas.idiomas.includes(mandarimRef.current.value)) {
			setRespostas({
				...respostas,
				idiomas: respostas.idiomas.filter(
					(item) => item !== mandarimRef.current.value,
				),
			});
		} else {
			setRespostas({
				...respostas,
				idiomas: [...respostas.idiomas, mandarimRef.current.value],
			});
		}
	};
	const espanholChangeHandler = () => {
		espanholRef.current.value = "Espanhol";
		if (respostas.idiomas.includes(espanholRef.current.value)) {
			setRespostas({
				...respostas,
				idiomas: respostas.idiomas.filter(
					(item) => item !== espanholRef.current.value,
				),
			});
		} else {
			setRespostas({
				...respostas,
				idiomas: [...respostas.idiomas, espanholRef.current.value],
			});
		}
	};

	/*   const outroChangeHandler = () => {
    outroRef.current.value = 'Outro';
    if (respostas.idiomas.includes(outroRef.current.value)) {
      setRespostas({...respostas, idiomas: respostas.idiomas.filter((item) => item !== outroRef.current.value)});
    }
    else {
      setRespostas({...respostas, idiomas: [...respostas.idiomas, outroRef.current.value]});
    }
  } */

	const javascriptChangeHandler = () => {
		javascriptRef.current.value = "JavaScript";
		if (respostas.tecnologias.includes(javascriptRef.current.value)) {
			setRespostas({
				...respostas,
				tecnologias: respostas.tecnologias.filter(
					(item) => item !== javascriptRef.current.value,
				),
			});
		} else {
			setRespostas({
				...respostas,
				tecnologias: [...respostas.tecnologias, javascriptRef.current.value],
			});
		}
	};

	const nodejsChangeHandler = () => {
		nodejsRef.current.value = "Node.js";
		if (respostas.tecnologias.includes(nodejsRef.current.value)) {
			setRespostas({
				...respostas,
				tecnologias: respostas.tecnologias.filter(
					(item) => item !== nodejsRef.current.value,
				),
			});
		} else {
			setRespostas({
				...respostas,
				tecnologias: [...respostas.tecnologias, nodejsRef.current.value],
			});
		}
	};

	const reactChangeHandler = () => {
		reactRef.current.value = "React";
		if (respostas.tecnologias.includes(reactRef.current.value)) {
			setRespostas({
				...respostas,
				tecnologias: respostas.tecnologias.filter(
					(item) => item !== reactRef.current.value,
				),
			});
		} else {
			setRespostas({
				...respostas,
				tecnologias: [...respostas.tecnologias, reactRef.current.value],
			});
		}
	};

	const wordpressChangeHandler = () => {
		wordpressRef.current.value = "WordPress";
		if (respostas.tecnologias.includes(wordpressRef.current.value)) {
			setRespostas({
				...respostas,
				tecnologias: respostas.tecnologias.filter(
					(item) => item !== wordpressRef.current.value,
				),
			});
		} else {
			setRespostas({
				...respostas,
				tecnologias: [...respostas.tecnologias, wordpressRef.current.value],
			});
		}
	};

	const nextjsChangeHandler = () => {
		nextjsRef.current.value = "Next.js";
		if (respostas.tecnologias.includes(nextjsRef.current.value)) {
			setRespostas({
				...respostas,
				tecnologias: respostas.tecnologias.filter(
					(item) => item !== nextjsRef.current.value,
				),
			});
		} else {
			setRespostas({
				...respostas,
				tecnologias: [...respostas.tecnologias, nextjsRef.current.value],
			});
		}
	};

	const cssChangeHandler = () => {
		cssRef.current.value = "CSS";
		if (respostas.tecnologias.includes(cssRef.current.value)) {
			setRespostas({
				...respostas,
				tecnologias: respostas.tecnologias.filter(
					(item) => item !== cssRef.current.value,
				),
			});
		} else {
			setRespostas({
				...respostas,
				tecnologias: [...respostas.tecnologias, cssRef.current.value],
			});
		}
	};

	const frontendChangeHandler = () => {
		frontendRef.current.value = "Front-end";
		if (respostas.interesse.includes(frontendRef.current.value)) {
			setRespostas({
				...respostas,
				interesse: respostas.interesse.filter(
					(item) => item !== frontendRef.current.value,
				),
			});
		} else {
			setRespostas({
				...respostas,
				interesse: [...respostas.interesse, frontendRef.current.value],
			});
		}
	};

	const backendChangeHandler = () => {
		backendRef.current.value = "Back-end";
		if (respostas.interesse.includes(backendRef.current.value)) {
			setRespostas({
				...respostas,
				interesse: respostas.interesse.filter(
					(item) => item !== backendRef.current.value,
				),
			});
		} else {
			setRespostas({
				...respostas,
				interesse: [...respostas.interesse, backendRef.current.value],
			});
		}
	};

	const gestaoChangeHandler = () => {
		gestaoRef.current.value = "Gestão de Empresas";
		if (respostas.interesse.includes(gestaoRef.current.value)) {
			setRespostas({
				...respostas,
				interesse: respostas.interesse.filter(
					(item) => item !== gestaoRef.current.value,
				),
			});
		} else {
			setRespostas({
				...respostas,
				interesse: [...respostas.interesse, gestaoRef.current.value],
			});
		}
	};

	const gerenciaChangeHandler = () => {
		gerenciaRef.current.value = "Gerência de Projetos";
		if (respostas.interesse.includes(gerenciaRef.current.value)) {
			setRespostas({
				...respostas,
				interesse: respostas.interesse.filter(
					(item) => item !== gerenciaRef.current.value,
				),
			});
		} else {
			setRespostas({
				...respostas,
				interesse: [...respostas.interesse, gerenciaRef.current.value],
			});
		}
	};

	const vendasChangeHandler = () => {
		vendasRef.current.value = "Vendas e Marketing";
		if (respostas.interesse.includes(vendasRef.current.value)) {
			setRespostas({
				...respostas,
				interesse: respostas.interesse.filter(
					(item) => item !== vendasRef.current.value,
				),
			});
		} else {
			setRespostas({
				...respostas,
				interesse: [...respostas.interesse, vendasRef.current.value],
			});
		}
	};

	const atraiuChangeHandler = () => {
		setRespostas({ ...respostas, atraiu: atraiuRef.current.value });
	};

	const expectChangeHandler = () => {
		setRespostas({ ...respostas, expect: expectRef.current.value });
	};

	const agregarChangeHandler = () => {
		setRespostas({ ...respostas, agregar: agregarRef.current.value });
	};

	const giChangeHandler = () => {
		giRef.current.value = "Gestão Interna";
		if (respostas.diretorias.includes(giRef.current.value)) {
			setRespostas({
				...respostas,
				diretorias: respostas.diretorias.filter(
					(item) => item !== giRef.current.value,
				),
			});
		} else {
			setRespostas({
				...respostas,
				diretorias: [...respostas.diretorias, giRef.current.value],
			});
		}
	};

	const comercialChangeHandler = () => {
		comercialRef.current.value = "Comercial";
		if (respostas.diretorias.includes(comercialRef.current.value)) {
			setRespostas({
				...respostas,
				diretorias: respostas.diretorias.filter(
					(item) => item !== comercialRef.current.value,
				),
			});
		} else {
			setRespostas({
				...respostas,
				diretorias: [...respostas.diretorias, comercialRef.current.value],
			});
		}
	};

	const projetosChangeHandler = () => {
		projetosRef.current.value = "Projetos";
		if (respostas.diretorias.includes(projetosRef.current.value)) {
			setRespostas({
				...respostas,
				diretorias: respostas.diretorias.filter(
					(item) => item !== projetosRef.current.value,
				),
			});
		} else {
			setRespostas({
				...respostas,
				diretorias: [...respostas.diretorias, projetosRef.current.value],
			});
		}
	};

	const marketingChangeHandler = () => {
		marketingRef.current.value = "Marketing";
		if (respostas.diretorias.includes(marketingRef.current.value)) {
			setRespostas({
				...respostas,
				diretorias: respostas.diretorias.filter(
					(item) => item !== marketingRef.current.value,
				),
			});
		} else {
			setRespostas({
				...respostas,
				diretorias: [...respostas.diretorias, marketingRef.current.value],
			});
		}
	};

	const presidenciaChangeHandler = () => {
		presidenciaRef.current.value = "Presidência";
		if (respostas.diretorias.includes(presidenciaRef.current.value)) {
			setRespostas({
				...respostas,
				diretorias: respostas.diretorias.filter(
					(item) => item !== presidenciaRef.current.value,
				),
			});
		} else {
			setRespostas({
				...respostas,
				diretorias: [...respostas.diretorias, presidenciaRef.current.value],
			});
		}
	};

	const dhoChangeHandler = () => {
		dhoRef.current.value = "Desenvolvimento Humano e Organizacional";
		if (respostas.diretorias.includes(dhoRef.current.value)) {
			setRespostas({
				...respostas,
				diretorias: respostas.diretorias.filter(
					(item) => item !== dhoRef.current.value,
				),
			});
		} else {
			setRespostas({
				...respostas,
				diretorias: [...respostas.diretorias, dhoRef.current.value],
			});
		}
	};

	const remuneraChangeHandler = (e) => {
		setRespostas({ ...respostas, remunera: e.target.value });
	};

	const reuniaoChangeHandler = (e) => {
		setRespostas({ ...respostas, reuniao: e.target.value });
	};

	const oitohorasChangeHandler = (e) => {
		setRespostas({ ...respostas, oitohoras: e.target.value });
	};

	const inclusaoChangeHandler = (e) => {
		setRespostas({ ...respostas, inclusao: e.target.value });
	};

	const trilhasChangeHandler = (e) => {
		setRespostas({ ...respostas, trilhas: e.target.value });
	};

	const emailChangeHandler = () => {
		setRespostas({ ...respostas, email: emailRef.current.value });
	};

	const whatsappChangeHandler = (e) => {
		const sanitizedValue = e.target.value.replace(/[^0-9]/g, "");
		setRespostas({ ...respostas, whatsapp: sanitizedValue });

		if (sanitizedValue !== e.target.value) {
			setErroWhatsapp("O número de telefone deve conter apenas números");
		} else {
			setErroWhatsapp("");
		}
	};

	const linkedinChangeHandler = () => {
		setRespostas({ ...respostas, linkedin: linkedinRef.current.value });
	};

	const githubChangeHandler = () => {
		setRespostas({ ...respostas, github: githubRef.current.value });
	};

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const enviarHandler = () => {
		setLoading(true);
		switch (true) {
			case respostas.nome === "":
				setErrorTitulo("Erro");
				setErrorMessage("O campo Nome é obrigatório");
				handleOpen();
				setLoading(false);
				break;
			case respostas.genero === "":
				setErrorTitulo("Erro");
				setErrorMessage("O campo Gênero é obrigatório");
				handleOpen();
				setLoading(false);
				break;
			case respostas.raca === "":
				setErrorTitulo("Erro");
				setErrorMessage("O campo Etnia é obrigatório");
				handleOpen();
				setLoading(false);
				break;
			case respostas.curso === "":
				setErrorTitulo("Erro");
				setErrorMessage("O campo Curso é obrigatório");
				handleOpen();
				setLoading(false);
				break;
			case respostas.matricula === "":
				setErrorTitulo("Erro");
				setErrorMessage("O campo Matrícula é obrigatório");
				handleOpen();
				setLoading(false);
				break;
			case respostas.remunera ||
				respostas.reuniao ||
				respostas.oitohoras ||
				respostas.inclusao ||
				respostas.trilhas === "":
				setErrorTitulo("Erro");
				setErrorMessage(
					"Os campos sobre o conhecimento da Pixel são todos obrigatórios",
				);
				handleOpen();
				setLoading(false);
				break;
			case respostas.email === "":
				setErrorTitulo("Erro");
				setErrorMessage("O campo Email é obrigatório");
				handleOpen();
				setLoading(false);
				break;
			case respostas.whatsapp === "":
				setErrorTitulo("Erro");
				setErrorMessage("O campo Whatsapp é obrigatório");
				handleOpen();
				setLoading(false);
				break;
			case respostas.whatsapp.length < 9:
				setErrorTitulo("Erro");
				setErrorMessage(
					"O campo Whatsapp deve conter um número de telefone válido",
				);
				handleOpen();
				setLoading(false);
				break;
			case token === "":
				setErrorTitulo("Erro");
				setErrorMessage("Por favor, complete o reCAPTCHA");
				handleOpen();
				break;
			default:
				setToken(false);
				api
					.post("/", respostas)
					.then(() => {
						setErrorTitulo("Sucesso!");
						setErrorMessage(
							"Inscrição feita com sucesso! Agora é só enviar sua carta de motivação para dho@ejpixel.com.br para conhecermos você melhor, contando um pouco sobre a sua motivação para entrar na pixel, e no que você pretende agregar à EJ.",
						);
						setRespostas(respostas_padrao);
						setSucesso(true);
						handleOpen();
						setLoading(false);
					})
					.catch(() => {
						setErrorTitulo("Erro");
						setErrorMessage("Erro ao enviar os dados!");
						// console.log(error);
						handleOpen();
						setLoading(false);
					});
		}
	};
	const [preenchidos, setPreenchidos] = useState(false);

	useEffect(() => {
		if (
			respostas.nome !== "" &&
			respostas.genero !== "" &&
			respostas.raca !== "" &&
			respostas.curso !== "" &&
			respostas.matricula !== "" &&
			respostas.remunera !== "" &&
			respostas.reuniao !== "" &&
			respostas.oitohoras !== "" &&
			respostas.inclusao !== "" &&
			respostas.trilhas !== "" &&
			respostas.email !== "" &&
			respostas.whatsapp !== ""
		) {
			setPreenchidos(true);
		} else {
			setPreenchidos(false);
		}
	}, [respostas]);

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
									spacing={1}
									direction="column"
									justifyContent="center"
									alignItems="center"
								>
									<Grid item xs={12} sm={12} md={12}>
										<Logo />
									</Grid>
									<Grid item xs={12} sm={12} md={12}>
										<Typography
											sx={{
												align: "justify",
												mx: "auto",
											}}
											variant="h5"
										>
											Boas-vindas à primeira etapa do processo seletivo da
											Pixel!
										</Typography>
									</Grid>
									<Grid item xs={12} sm={12} md={12}>
										<Typography
											sx={{
												align: "justify",
												mx: "auto",
												mb: 3,
											}}
											variant="p"
										>
											A{" "}
											<Link href="https://ejpixel.com.br/" underline="none">
												Pixel
											</Link>{" "}
											é a Empresa Júnior dos cursos de Ciências da Computação e
											Sistemas de Informação da UFSC
										</Typography>
									</Grid>
									<Grid
										container
										padding={2}
										spacing={1}
										direction="column"
										justifyContent="center"
										alignItems="left"
									>
										<Typography
											sx={{
												align: "justify",
												mt: 3,
												mb: 3,
											}}
											variant="h5"
										>
											Passo 1 : Informações Pessoais
										</Typography>
										<Grid
											container
											spacing={1}
											direction="row"
											justifyContent="center"
											alignItems="center"
										>
											<Grid item xs={12} sm={6} md={4}>
												<FormControl
													variant="outlined"
													sx={{
														width: 1,
														mt: 2,
														mx: "auto",
													}}
												>
													<InputLabel htmlFor="nome" />
													<TextField
														required
														id="nome"
														inputRef={nomeRef}
														onChange={nomeChangeHandler}
														label="Nome Completo"
														variant="outlined"
													/>
												</FormControl>
											</Grid>
											<Grid item xs={12} sm={6} md={4}>
												<FormControl
													variant="outlined"
													sx={{
														width: 1,
														mt: 2,
														mx: "auto",
													}}
												>
													<InputLabel id="label-genero">
														Com qual gênero você se identifica?*
													</InputLabel>
													<Select
														labelId="label-genero"
														label="Com qual gênero você se identifica?*"
														value={respostas.genero}
														onChange={generoChangeHandler}
													>
														{generos.map((option) => (
															<MenuItem key={option.id} value={option.label}>
																{option.label}
															</MenuItem>
														))}
													</Select>
												</FormControl>
											</Grid>
											<Grid item xs={12} sm={8} md={4}>
												<FormControl
													variant="outlined"
													sx={{
														width: 1,
														mt: 2,
														mx: "auto",
													}}
												>
													<InputLabel id="label-raca">
														Com qual grupo étnico você se identifica?*
													</InputLabel>
													<Select
														labelId="label-raca"
														label="Com qual grupo étnico você se identifica?*"
														value={respostas.raca}
														onChange={racaChangeHandler}
													>
														{racas.map((option) => (
															<MenuItem key={option.id} value={option.label}>
																{option.label}
															</MenuItem>
														))}
													</Select>
												</FormControl>
											</Grid>
										</Grid>
										<Grid
											container
											spacing={1}
											direction="row"
											justifyContent="left"
											alignItems="center"
										>
											<Grid item xs={12} sm={12} md={12}>
												<Typography
													sx={{
														align: "justify",
														mt: 3,
														mb: 3,
													}}
													variant="h5"
												>
													Passo 2 : Informações Acadêmicas
												</Typography>
											</Grid>
											<Grid item xs={12} sm={6} md={6}>
												<FormControl
													variant="outlined"
													sx={{
														width: 1,
														mt: 2,
														mx: "auto",
													}}
												>
													<InputLabel id="label-curso">
														Qual é o seu curso?*
													</InputLabel>
													<Select
														labelId="label-curso"
														label="Qual é o seu curso?*"
														value={respostas.curso}
														onChange={cursoChangeHandler}
													>
														{cursos.map((option) => (
															<MenuItem key={option.id} value={option.label}>
																{option.label}
															</MenuItem>
														))}
													</Select>
												</FormControl>
											</Grid>
											<Grid item xs={12} sm={6} md={6}>
												<FormControl
													variant="outlined"
													sx={{
														width: 1,
														mt: 2,
														mx: "auto",
													}}
												>
													<InputLabel htmlFor="matricula" />
													<TextField
														required
														id="matricula"
														{...(erroMatricula
															? {
																	error: true,
																	helperText: erroMatricula,
																}
															: {})}
														inputRef={matriculaRef}
														onChange={matriculaChangeHandler}
														label="Qual seu número de matrícula?"
														variant="outlined"
													/>
												</FormControl>
											</Grid>
											<Grid item xs={12} sm={12} md={12}>
												<Typography
													sx={{
														align: "justify",
														mt: 3,
														mb: 3,
													}}
													variant="h5"
												/>
												<FormControl
													variant="outlined"
													sx={{
														width: 1,
														mt: 2,
														mx: "auto",
													}}
												>
													<PixelSlider
														value={fase}
														inputRef={faseRef}
														aria-label="Default"
														valueLabelDisplay="auto"
														step={1}
														marks
														min={1}
														max={8}
														onChange={changeFaseHandler}
													/>
													<Typography id="totalhoras" sx={{ mx: "auto" }}>
														Fase que está no curso (aproximadamente): {fase}ª
													</Typography>
												</FormControl>
											</Grid>
											<Grid item xs={12} sm={12} md={12}>
												<FormControl
													variant="outlined"
													sx={{
														width: 1,
														mx: "auto",
													}}
												>
													<PixelSlider
														value={horas}
														inputRef={horasRef}
														aria-label="Default"
														valueLabelDisplay="auto"
														step={1}
														marks
														min={12}
														max={30}
														onChange={changeHorasHandler}
													/>
													<Typography id="totalhoras" sx={{ mx: "auto" }}>
														Total de horas-aula que está cursando esse semestre:{" "}
														{horas} h.a.
													</Typography>
												</FormControl>
											</Grid>
										</Grid>
										<Grid
											container
											spacing={1}
											direction="row"
											justifyContent="left"
											alignItems="center"
										>
											<Grid item xs={12} sm={12} md={12}>
												<Typography
													sx={{
														align: "justify",
														mt: 3,
														mb: 3,
													}}
													variant="h5"
												>
													Passo 3 : Informações Profissionais
												</Typography>
											</Grid>
											<Grid item xs={12} sm={12} md={6}>
												<FormControl
													variant="outlined"
													sx={{
														width: 1,
														mt: 2,
														mx: "auto",
													}}
												>
													<TextField
														id="trab"
														inputRef={trabRef}
														onChange={trabChangeHandler}
														label="Você trabalha ou faz estágio atualmente? Fale sobre"
														multiline
														rows={4}
														defaultValue=""
													/>
												</FormControl>
											</Grid>
											<Grid item xs={12} sm={12} md={6}>
												<FormControl
													variant="outlined"
													sx={{
														width: 1,
														mt: 2,
														mx: "auto",
													}}
												>
													<TextField
														id="exp"
														inputRef={expRef}
														onChange={expChangeHandler}
														label="Trabalho ou experiência profissional prévia? Fale sobre"
														multiline
														rows={4}
														defaultValue=""
													/>
												</FormControl>
											</Grid>
										</Grid>
										<Grid
											container
											spacing={1}
											direction="row"
											justifyContent="left"
											alignItems="center"
											sx={{ mt: 2 }}
										>
											<Grid item xs={12} sm={12} md={12}>
												<Typography
													sx={{
														align: "justify",
														mt: 3,
														mb: 3,
													}}
													variant="h5"
												>
													Passo 4 : Habilidades e tecnologias
												</Typography>
											</Grid>
											<Grid item xs={12} sm={4} md={3}>
												<FormControl
													variant="outlined"
													sx={{
														width: 1,
														mx: "auto",
													}}
												>
													<Typography htmlFor="idiomas">
														Quais desses idiomas você compreende?
													</Typography>
													<FormGroup row>
														<FormControlLabel
															control={
																<Checkbox
																	sx={{
																		color: theme.palette.midnight.main,
																		"&.Mui-checked": {
																			color: theme.palette.spacecadet.main,
																		},
																	}}
																/>
															}
															label="Inglês"
															inputRef={inglesRef}
															onChange={inglesChangeHandler}
														/>
														<FormControlLabel
															control={
																<Checkbox
																	sx={{
																		color: theme.palette.midnight.main,
																		"&.Mui-checked": {
																			color: theme.palette.spacecadet.main,
																		},
																	}}
																/>
															}
															label="Mandarim"
															inputRef={mandarimRef}
															onChange={mandarimChangeHandler}
														/>
														<FormControlLabel
															control={
																<Checkbox
																	sx={{
																		color: theme.palette.midnight.main,
																		"&.Mui-checked": {
																			color: theme.palette.spacecadet.main,
																		},
																	}}
																/>
															}
															label="Espanhol"
															inputRef={espanholRef}
															onChange={espanholChangeHandler}
														/>
													</FormGroup>
												</FormControl>
											</Grid>
											<Grid item xs={12} sm={4} md={4}>
												<FormControl
													variant="outlined"
													sx={{
														width: 1,
														mx: "auto",
													}}
												>
													<Typography htmlFor="tecnologias">
														Quais dessas tecnologias você tem algum conhecimento
														sobre?
													</Typography>
													<FormGroup row>
														<FormControlLabel
															control={
																<Checkbox
																	sx={{
																		color: theme.palette.midnight.main,
																		"&.Mui-checked": {
																			color: theme.palette.spacecadet.main,
																		},
																	}}
																/>
															}
															label="JavaScript"
															inputRef={javascriptRef}
															onChange={javascriptChangeHandler}
														/>
														<FormControlLabel
															control={
																<Checkbox
																	sx={{
																		color: theme.palette.midnight.main,
																		"&.Mui-checked": {
																			color: theme.palette.spacecadet.main,
																		},
																	}}
																/>
															}
															label="Node.js"
															inputRef={nodejsRef}
															onChange={nodejsChangeHandler}
														/>
														<FormControlLabel
															control={
																<Checkbox
																	sx={{
																		color: theme.palette.midnight.main,
																		"&.Mui-checked": {
																			color: theme.palette.spacecadet.main,
																		},
																	}}
																/>
															}
															label="React"
															inputRef={reactRef}
															onChange={reactChangeHandler}
														/>
														<FormControlLabel
															control={
																<Checkbox
																	sx={{
																		color: theme.palette.midnight.main,
																		"&.Mui-checked": {
																			color: theme.palette.spacecadet.main,
																		},
																	}}
																/>
															}
															label="Wordpress"
															inputRef={wordpressRef}
															onChange={wordpressChangeHandler}
														/>
														<FormControlLabel
															control={
																<Checkbox
																	sx={{
																		color: theme.palette.midnight.main,
																		"&.Mui-checked": {
																			color: theme.palette.spacecadet.main,
																		},
																	}}
																/>
															}
															label="Next.js"
															inputRef={nextjsRef}
															onChange={nextjsChangeHandler}
														/>
														<FormControlLabel
															control={
																<Checkbox
																	sx={{
																		color: theme.palette.midnight.main,
																		"&.Mui-checked": {
																			color: theme.palette.spacecadet.main,
																		},
																	}}
																/>
															}
															label="CSS"
															inputRef={cssRef}
															onChange={cssChangeHandler}
														/>
													</FormGroup>
												</FormControl>
											</Grid>
											<Grid item xs={12} sm={4} md={5}>
												<FormControl
													variant="outlined"
													sx={{
														width: 1,
														mx: "auto",
													}}
												>
													<Typography htmlFor="gostaria">
														Em quais dessas áreas você tem interesse?
													</Typography>
													<FormGroup row>
														<FormControlLabel
															control={
																<Checkbox
																	sx={{
																		color: theme.palette.midnight.main,
																		"&.Mui-checked": {
																			color: theme.palette.spacecadet.main,
																		},
																	}}
																/>
															}
															label="Front-end"
															inputRef={frontendRef}
															onChange={frontendChangeHandler}
														/>
														<FormControlLabel
															control={
																<Checkbox
																	sx={{
																		color: theme.palette.midnight.main,
																		"&.Mui-checked": {
																			color: theme.palette.spacecadet.main,
																		},
																	}}
																/>
															}
															label="Back-end"
															inputRef={backendRef}
															onChange={backendChangeHandler}
														/>
														<FormControlLabel
															control={
																<Checkbox
																	sx={{
																		color: theme.palette.midnight.main,
																		"&.Mui-checked": {
																			color: theme.palette.spacecadet.main,
																		},
																	}}
																/>
															}
															label="Gestão de Empresas"
															inputRef={gestaoRef}
															onChange={gestaoChangeHandler}
														/>

														<FormControlLabel
															control={
																<Checkbox
																	sx={{
																		color: theme.palette.midnight.main,
																		"&.Mui-checked": {
																			color: theme.palette.spacecadet.main,
																		},
																	}}
																/>
															}
															label="Gerência de Projetos"
															inputRef={gerenciaRef}
															onChange={gerenciaChangeHandler}
														/>
														<FormControlLabel
															control={
																<Checkbox
																	sx={{
																		color: theme.palette.midnight.main,
																		"&.Mui-checked": {
																			color: theme.palette.spacecadet.main,
																		},
																	}}
																/>
															}
															label="Vendas e Marketing"
															inputRef={vendasRef}
															onChange={vendasChangeHandler}
														/>
													</FormGroup>
												</FormControl>
											</Grid>
										</Grid>
										<Grid
											container
											spacing={1}
											direction="row"
											justifyContent="left"
											alignItems="center"
											sx={{ mt: 2 }}
										>
											<Grid item xs={12} sm={12} md={12}>
												<Typography
													sx={{
														align: "justify",
														mb: 2,
													}}
													variant="h5"
												>
													Passo 5 : Expectativas em relação à Pixel
												</Typography>
											</Grid>
											<Grid item xs={12} sm={12} md={4}>
												<FormControl
													variant="outlined"
													sx={{
														width: 1,
														mx: "auto",
													}}
												>
													<TextField
														id="atraiu"
														label="O que te atraiu à Pixel?"
														multiline
														rows={4}
														defaultValue=""
														inputRef={atraiuRef}
														onChange={atraiuChangeHandler}
													/>
												</FormControl>
											</Grid>
											<Grid item xs={12} sm={12} md={4}>
												<FormControl
													variant="outlined"
													sx={{
														width: 1,
														mx: "auto",
													}}
												>
													<TextField
														id="expect"
														label="O que você espera da Pixel?"
														multiline
														rows={4}
														defaultValue=""
														inputRef={expectRef}
														onChange={expectChangeHandler}
													/>
												</FormControl>
											</Grid>
											<Grid item xs={12} sm={12} md={4}>
												<FormControl
													variant="outlined"
													sx={{
														width: 1,
														mx: "auto",
													}}
												>
													<TextField
														id="agregar"
														label="O que você acha que pode agregar à Pixel?"
														multiline
														rows={4}
														defaultValue=""
														inputRef={agregarRef}
														onChange={agregarChangeHandler}
													/>
												</FormControl>
											</Grid>
											<Grid item xs={12} sm={12} md={12}>
												<Grid
													container
													spacing={1}
													padding={1}
													direction="row"
													justifyContent="center"
													alignItems="center"
												>
													<FormControl
														id="diretorias"
														variant="outlined"
														sx={{
															width: 1,
															mx: "auto",
														}}
													>
														<FormGroup row>
															<Grid item xs={12} sm={12} md={12}>
																<Typography htmlFor="diretorias">
																	Em quais diretorias da Pixel você tem
																	interesse em atuar?
																</Typography>
															</Grid>
															<Tooltip title={descricoes.gi} arrow>
																<FormControlLabel
																	control={
																		<Checkbox
																			sx={{
																				color: theme.palette.midnight.main,
																				"&.Mui-checked": {
																					color: theme.palette.spacecadet.main,
																				},
																			}}
																		/>
																	}
																	label="Gestão Interna"
																	inputRef={giRef}
																	onChange={giChangeHandler}
																/>
															</Tooltip>
															<Tooltip title={descricoes.comercial} arrow>
																<FormControlLabel
																	control={
																		<Checkbox
																			sx={{
																				color: theme.palette.midnight.main,
																				"&.Mui-checked": {
																					color: theme.palette.spacecadet.main,
																				},
																			}}
																		/>
																	}
																	label="Comercial"
																	inputRef={comercialRef}
																	onChange={comercialChangeHandler}
																/>
															</Tooltip>
															<Tooltip title={descricoes.projetos} arrow>
																<FormControlLabel
																	control={
																		<Checkbox
																			sx={{
																				color: theme.palette.midnight.main,
																				"&.Mui-checked": {
																					color: theme.palette.spacecadet.main,
																				},
																			}}
																		/>
																	}
																	label="Projetos"
																	inputRef={projetosRef}
																	onChange={projetosChangeHandler}
																/>
															</Tooltip>
															<Tooltip title={descricoes.marketing} arrow>
																<FormControlLabel
																	control={
																		<Checkbox
																			sx={{
																				color: theme.palette.midnight.main,
																				"&.Mui-checked": {
																					color: theme.palette.spacecadet.main,
																				},
																			}}
																		/>
																	}
																	label="Marketing"
																	inputRef={marketingRef}
																	onChange={marketingChangeHandler}
																/>
															</Tooltip>
															<Tooltip title={descricoes.presidencia} arrow>
																<FormControlLabel
																	control={
																		<Checkbox
																			sx={{
																				color: theme.palette.midnight.main,
																				"&.Mui-checked": {
																					color: theme.palette.spacecadet.main,
																				},
																			}}
																		/>
																	}
																	label="Presidência"
																	inputRef={presidenciaRef}
																	onChange={presidenciaChangeHandler}
																/>
															</Tooltip>
															<Tooltip title={descricoes.dho} arrow>
																<FormControlLabel
																	control={
																		<Checkbox
																			sx={{
																				color: theme.palette.midnight.main,
																				"&.Mui-checked": {
																					color: theme.palette.spacecadet.main,
																				},
																			}}
																		/>
																	}
																	label="Desenvolvimento Humano e Organizacional"
																	inputRef={dhoRef}
																	onChange={dhoChangeHandler}
																/>
															</Tooltip>
														</FormGroup>
													</FormControl>
												</Grid>
											</Grid>
										</Grid>
										<Grid
											container
											spacing={1}
											direction="row"
											justifyContent="left"
											alignItems="center"
											sx={{ mt: 2 }}
										>
											<Grid item xs={12} sm={12} md={12}>
												<Typography
													sx={{
														align: "justify",
														mb: 2,
													}}
													variant="h5"
												>
													Passo 6 : Conhecimento sobre a Pixel*
												</Typography>
											</Grid>
											<Grid item xs={12} sm={12} md={12}>
												<FormControl
													id="conhecimentos"
													variant="outlined"
													sx={{
														width: 1,
														mx: "auto",
													}}
												>
													<Grid item xs={12} sm={12} md={12} sx={{ mb: 2 }}>
														<FormLabel component="legend">
															O trabalho na Pixel é remunerado?
														</FormLabel>
														<RadioGroup
															row
															aria-label="remunera"
															name="remunera"
															onChange={remuneraChangeHandler}
														>
															<FormControlLabel
																value="Sim"
																control={<Radio />}
																label="Sim"
															/>
															<FormControlLabel
																value="Não"
																control={<Radio />}
																label="Não"
															/>
															<FormControlLabel
																value="Somente quando desenvolvo"
																control={<Radio />}
																label="Somente quando desenvolvo"
															/>
														</RadioGroup>
													</Grid>
													<Grid item xs={12} sm={12} md={12} sx={{ mb: 2 }}>
														<FormLabel component="legend">
															Em qual horário pretende estar nas reuniões
															remotas com a câmera e microfone ligados?
														</FormLabel>
														<RadioGroup
															row
															aria-label="reuniao"
															name="reuniao"
															onChange={reuniaoChangeHandler}
														>
															<FormControlLabel
																value="22:30"
																control={<Radio />}
																label="22:30"
															/>
															<FormControlLabel
																value="23:00"
																control={<Radio />}
																label="23:00"
															/>
															<FormControlLabel
																value="Assim que chegar em casa"
																control={<Radio />}
																label="Assim que chegar em casa"
															/>
														</RadioGroup>
													</Grid>
													<Grid item xs={12} sm={612} md={12} sx={{ mb: 2 }}>
														<FormLabel component="legend">
															Quantas horas semanais pretende dedicar às
															atividades na Pixel?
														</FormLabel>

														<RadioGroup
															row
															aria-label="oitohoras"
															name="oitohoras"
															onChange={oitohorasChangeHandler}
														>
															<FormControlLabel
																value="Quatro"
																control={<Radio />}
																label="Quatro"
															/>
															<FormControlLabel
																value="Oito"
																control={<Radio />}
																label="Oito"
															/>
															<FormControlLabel
																value="Doze"
																control={<Radio />}
																label="Doze"
															/>
														</RadioGroup>
													</Grid>
													<Grid item xs={12} sm={12} md={12} sx={{ mb: 2 }}>
														<FormLabel component="legend">
															Qual dentre esses é um dos valores da Pixel?
														</FormLabel>
														<RadioGroup
															row
															aria-label="inclusao"
															name="inclusao"
															onChange={inclusaoChangeHandler}
														>
															<FormControlLabel
																value="Faturamento"
																control={<Radio />}
																label="Faturamento"
															/>
															<FormControlLabel
																value="Lucro"
																control={<Radio />}
																label="Lucro"
															/>
															<FormControlLabel
																value="Diversidade"
																control={<Radio />}
																label="Diversidade"
															/>
														</RadioGroup>
													</Grid>
													<Grid item xs={12} sm={12} md={12} sx={{ mb: 2 }}>
														<FormLabel component="legend">
															Como pretende capacitar-se na Pixel?
														</FormLabel>
														<RadioGroup
															row
															aria-label="trilhas"
															name="trilhas"
															onChange={trilhasChangeHandler}
														>
															<FormControlLabel
																value="Já tenho capacitação"
																control={<Radio />}
																label="Já tenho capacitação"
															/>
															<FormControlLabel
																value="Estudando"
																control={<Radio />}
																label="Estudando"
															/>
															<FormControlLabel
																value="Nas aulas síncronas ministradas pelos membros da Pixel aos sábados à noite"
																control={<Radio />}
																label="Nas aulas síncronas ministradas pelos membros da Pixel aos sábados à noite"
															/>
														</RadioGroup>
													</Grid>
												</FormControl>
											</Grid>
										</Grid>
										<Grid
											container
											spacing={1}
											direction="row"
											justifyContent="left"
											alignItems="center"
											sx={{ mt: 2 }}
										>
											<Grid item xs={12} sm={12} md={12}>
												<Typography
													sx={{
														align: "justify",
														mb: 2,
													}}
													variant="h5"
												>
													Passo 7 : Informações de contato
												</Typography>
											</Grid>
											<Grid item xs={12} sm={6} md={3}>
												<FormControl
													variant="outlined"
													sx={{
														width: 1,
														mx: "auto",
													}}
												>
													<InputLabel htmlFor="email" />
													<TextField
														required
														id="email"
														inputRef={emailRef}
														onChange={emailChangeHandler}
														label="E-mail"
														variant="outlined"
													/>
												</FormControl>
											</Grid>
											<Grid item xs={12} sm={6} md={3}>
												<FormControl
													variant="outlined"
													sx={{
														width: 1,
														mx: "auto",
													}}
												>
													<InputLabel htmlFor="whatsapp" />
													<TextField
														required
														{...(erroWhatsapp
															? {
																	error: true,
																	helperText: erroWhatsapp,
																}
															: {})}
														id="whatsapp"
														inputRef={whatsappRef}
														onChange={whatsappChangeHandler}
														label="WhatsApp"
														variant="outlined"
													/>
												</FormControl>
											</Grid>
											<Grid item xs={12} sm={6} md={3}>
												<FormControl
													variant="outlined"
													sx={{
														width: 1,
														mx: "auto",
													}}
												>
													<InputLabel htmlFor="linkedin" />
													<TextField
														id="linkedin"
														inputRef={linkedinRef}
														onChange={linkedinChangeHandler}
														label="LinkedIn"
														variant="outlined"
													/>
												</FormControl>
											</Grid>
											<Grid item xs={12} sm={6} md={3}>
												<FormControl
													variant="outlined"
													sx={{
														width: 1,
														mx: "auto",
													}}
												>
													<InputLabel htmlFor="github" />
													<TextField
														id="github"
														inputRef={githubRef}
														onChange={githubChangeHandler}
														label="GitHub"
														variant="outlined"
													/>
												</FormControl>
											</Grid>
										</Grid>
										<Grid
											container
											padding={1}
											spacing={1}
											direction="column"
											justifyContent="center"
											alignItems="center"
										>
											<Grid item xs={12} sm={6} md={6}>
												<Typography sx={{ align: "justify" }} variant="h5" />
												<ReCaptcha
													ref={recaptchaRef}
													sitekey="6LefiZwpAAAAACAPYBupkycHvuK3j-Y7016LVZ9g"
													onChange={geraTokenRecaptcha}
												/>{" "}
											</Grid>
											<Grid item xs={12} sm={6} md={6}>
												<Button
													disabled={
														loading || !preenchidos || sucesso || !token
													}
													variant="contained"
													endIcon={<SendIcon />}
													sx={{
														width: 1,
														mx: "auto",
														backgroundColor: theme.palette.midnight.main,
														color: theme.palette.sunrise.main,
													}}
													onClick={enviarHandler}
												>
													{loading ? <CircularProgress size={24} /> : "Enviar"}
												</Button>
											</Grid>
											<Grid item xs={12} sm={12} md={12}>
												<Typography variant="p" sx={{ fontSize: "0.8rem" }}>
													Os campos com * são necessários
												</Typography>
											</Grid>
											<Grid item xs={12} sm={12} md={12}>
												<Typography variant="p" sx={{ fontSize: "0.8rem" }}>
													Baixe o manual do processo clicando{" "}
													<Link
														target="_blank"
														rel="noopener"
														href="https://drive.google.com/file/d/111Pc-kwQoi90yPcB2dk4wit96DI8ASmn/view?usp=sharing"
														underline="none"
														color="#1CACD8"
													>
														aqui
													</Link>
												</Typography>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
						<Grid
							container
							spacing={1}
							direction="column"
							justifyContent="center"
							alignItems="center"
						>
							<Grid item xs={12} sm={12} md={12}>
								<Typography
									sx={{
										mt: 3,
										mb: 3,
										color: theme.palette.sunrise.main,
									}}
									variant="p"
								>
									Aplicação desenvolvida em{" "}
									<Link
										href="https://react.dev/"
										underline="none"
										color="#1CACD8"
									>
										React
									</Link>
									, na stack{" "}
									<Link
										href="https://www.mongodb.com/mern-stack"
										underline="none"
										color="#1CACD8"
									>
										MERN
									</Link>
									, por
									<Link
										href="https://www.linkedin.com/in/rudolfoneto"
										underline="none"
										color="#1CACD8"
									>
										Rudolfo Lange Neto
									</Link>
									, Presidente da Pixel
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<Typography
							id="modal-modal-title"
							variant="h6"
							component="h2"
							sx={{ textAlign: "center" }}
						>
							{errorTitulo}
						</Typography>
						<Typography
							id="modal-modal-description"
							sx={{ textAlign: "justify" }}
						>
							{errorMessage}
						</Typography>
					</Box>
				</Modal>
			</div>
		</ThemeProvider>
	);
}

export default App;
