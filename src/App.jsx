import { useState, useEffect, useRef } from 'react'
import { Mongoose } from 'mongoose';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import Link from '@mui/material/Link';
import RadioGroup from '@mui/material/RadioGroup';
import SendIcon from '@mui/icons-material/Send';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import shared from './styles/Shared.module.css'
import { Form } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: 'Koho, Krub, sans-serif',
  },
  palette: {
    spacecadet: {
      main: '#82337E',
    },
    midnight: {
      main: '#023047',
      light: '#1CACD8'
    },
    sunrise: {
      main: '#FFB703',
    },
    midday: {
      main: '#1CACD8',
    },
  }
});

const descricoes = {
  gi: 'A Gestão Interna é a diretoria responsável por cuidar dos aspectos jurídicos, financeiros e administrativos da Pixel.',
  comercial: 'A diretoria comercial é responsável pela precificação e prospecção de clientes, além de cuidar do relacionamento com os clientes atuais.',
  projetos: 'A diretoria de projetos é responsável por gerenciar equipes de desenvolvimento e documentar os projetos da Pixel.',
  marketing: 'A diretoria de marketing é responsável por cuidar da comunicação e imagem da Pixel e fazer estudos mercadológicos acerca da mesma.',
  presidencia: 'A presidência é a diretoria responsável por representar a Pixel oficialmente e cuidar do relacionamento com outras empresas juniores e com a UFSC.',
  dho: 'A diretoria de desenvolvimento humano e organizacional é responsável por cuidar do desenvolvimento pessoal e promover o engajamento e permanência dos membros na Pixel.',
}

const PixelSlider = styled(Slider)({
  color: '#82337E',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&::before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#82337E',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&::before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const cursos = [
  { label: 'Ciências da Computação', id:1 },
  { label: 'Sistemas de Informação', id:2 },
  { label: 'Outro', id:3 },
]

const generos = [
  { label: 'Feminino (Cisgênero)', id:1 },
  { label: 'Masculino (Cisgênero)', id:2 },
  { label: 'Feminino (Transgênero)', id:3 },
  { label: 'Masculino (Transgênero)', id:4 },
  { label: 'Não-binário', id:5 },
  { label: 'Gênero fluido', id:6 },
  { label: 'Outro', id:7 },
]

const racas = [
  { label: 'Preto', id:1 },
  { label: 'Branco', id:2 },
  { label: 'Pardo', id:3 },
  { label: 'Amarelo', id:4 },
  { label: 'Indígena', id:5 },
  { label: 'Outro', id:6 },
]



function App() {
  const [horas, setHoras] = useState(20);
  const changeHorasHandler = (event, newValue) => {
    setHoras(newValue);
  }
  const [fase, setFase] = useState(1);
  const changeFaseHandler = (event, newValue) => {
    setFase(newValue);
  }

  return (
        <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className={`${shared.flex} ${shared.column} ${shared.backgroundStyle} ${shared.alignCenter}`}>
      <div className={`${shared.alignCenter} ${shared.marginTop} ${shared.padding20}`}>
      <Card sx={{width : 1, p : 0.3, mx : 'auto', align : 'center', boxShadow : 3}}>
        <CardContent>
          <Box component="img"
          sx={{display: 'flex', align : 'center', justifyContent : 'center', mx: 'auto', my: 1,}}
          alt="Logo da Pixel"
          src="/src/assets/horizontal.svg">
          </Box>
          <div className= {`${shared.marginTop} ${shared.alignCenter}`}>
            <Typography sx={{align : 'justify', mx : 'auto' }} variant="h5">
              Boas-vindas à primeira etapa do processo 24.1 de recrutamento da Pixel!
            </Typography>
            <Typography sx={{ align : 'justify', mx : 'auto' , mb : 3}} variant="p">
              A <Link href="https://ejpixel.com.br/" underline="none" >Pixel</Link> é a Empresa Júnior dos cursos de Ciências da Computação e Sistemas de Informação da UFSC
            </Typography>
            <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '30rem' },}}
            noValidate
            autoComplete="off">
            <Typography sx={{align : 'justify', mt : 3, mb : 3 }} variant="h5">
              Passo 1 : Informações Pessoais
            </Typography>
            <FormControl variant="outlined" sx={{width: 400, mt: 2, mx: 'auto'}}>
              <InputLabel htmlFor="nome"></InputLabel>
              <TextField id="nome" label="Nome Completo" variant="outlined" />
            </FormControl>
            <FormControl variant="outlined" sx={{width: 400, mt: 2, mx: 'auto'}}>
              <Autocomplete disablePortal
              id="genero"
              options={generos}
              sx={{width: 1, mx: 'auto'}}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Com qual gênero você se identifica?"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
              />
            </FormControl>
                        <Typography sx={{align : 'justify', mt : 3, mb : 3 }} variant="h5">
            </Typography>
            <FormControl variant="outlined" sx={{width: 400, mt: 2, mx: 'auto'}}>
              <Autocomplete disablePortal
              id="raca"
              options={racas}
              sx={{width: 1, mx: 'auto'}}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Com qual grupo étnico você mais se identifica?"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
              />
            </FormControl>
            <Typography sx={{align : 'justify', mt : 3, mb : 3 }} variant="h5">
              Passo 2 : Informações Acadêmicas
            </Typography>
            <FormControl variant="outlined" sx={{width: 400, mt: 2, mx: 'auto'}}>
              <Autocomplete disablePortal
              id="curso"
              options={cursos}
              sx={{width: 1, mx: 'auto'}} 
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Informe seu curso"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
              />
            </FormControl>
            <FormControl variant="outlined" sx={{width: 400, mt: 2, mx: 'auto'}}>
              <InputLabel htmlFor="matricula"></InputLabel>
              <TextField id="matricula" label="Qual seu número de matrícula?" variant="outlined" />
            </FormControl>
            <Typography sx={{align : 'justify', mt : 3, mb : 3 }} variant="h5">
            </Typography>
            <FormControl variant="outlined" sx={{width: 400, mt: 2, mx: 'auto'}}>
              <PixelSlider
                value={fase}
                aria-label="Default"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={8}
                onChange={changeFaseHandler}
              />
                <Typography id="totalhoras" sx={{mx: 'auto'}} >
                Fase que está no curso (aproximadamente): {fase}
              </Typography>
            </FormControl>
            <FormControl variant="outlined" sx={{width: 400, mx: 'auto'}}>
              {/* <InputLabel htmlFor="creditos" sx={{mt: '0.5rem'}}>Quantas horas-aula você está cursando esse semestre?</InputLabel> */}
              <PixelSlider
                value={horas}
                aria-label="Default"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={12}
                max={30}
                onChange={changeHorasHandler}
              />
              <Typography id="totalhoras" sx={{mx: 'auto'}} >
                Total de horas-aula esse semestre: {horas} horas-aula
              </Typography>
            </FormControl>
            <Typography sx={{align : 'justify', mt : 3, mb : 3 }} variant="h5">
              Passo 3 : Informações Profissionais
            </Typography>
            <FormControl variant="outlined" sx={{width: 400, mt: 2, mx: 'auto'}}>
              <TextField
                id="trab"
                label="Você trabalha ou faz estágio atualmente? Fale sobre"
                multiline
                rows={4}
                defaultValue=""
              />
            </FormControl>
            <FormControl variant="outlined" sx={{width: 400, mt: 2, mx: 'auto'}}>
              <TextField
                id="exp"
                label="Trabalho ou experiência profissional prévia? Fale sobre"
                multiline
                rows={4}
                defaultValue=""
              />
            </FormControl>
            <Typography sx={{align : 'justify', mt : 3, mb : 3 }} variant="h5">
              Passo 4 : Habilidades e tecnologias
            </Typography>
            <FormControl variant="outlined" sx={{width: 1,  mx: 'auto'}}>
              <Typography htmlFor="idiomas">Quais desses idiomas você compreende?</Typography>
              <FormGroup row>
                <FormControlLabel control={<Checkbox sx={{
          color: theme.palette.midnight.main,
          '&.Mui-checked': {
            color: theme.palette.spacecadet.main,
          },
        }} />} label="Inglês" />
                <FormControlLabel control={<Checkbox sx={{
          color: theme.palette.midnight.main,
          '&.Mui-checked': {
            color: theme.palette.spacecadet.main,
          },
        }} />} label="Mandarim" />
                <FormControlLabel control={<Checkbox sx={{
          color: theme.palette.midnight.main,
          '&.Mui-checked': {
            color: theme.palette.spacecadet.main,
          },
        }} />} label="Espanhol" />
              </FormGroup>
            </FormControl>
            <FormControl variant="outlined" sx={{width: 1,  mx: 'auto'}}>
              <Typography htmlFor="tecnologias">Quais dessas tecnologias você domina?</Typography>
              <FormGroup row>
                <FormControlLabel control={<Checkbox sx={{
          color: theme.palette.midnight.main,
          '&.Mui-checked': {
            color: theme.palette.spacecadet.main,
          },
        }} />} label="Python" />
                <FormControlLabel control={<Checkbox sx={{
          color: theme.palette.midnight.main,
          '&.Mui-checked': {
            color: theme.palette.spacecadet.main,
          },
        }} />} label="JavaScript" />
                <FormControlLabel control={<Checkbox sx={{
          color: theme.palette.midnight.main,
          '&.Mui-checked': {
            color: theme.palette.spacecadet.main,
          },
          }} />} label="Node.js" />
                <FormControlLabel control={<Checkbox sx={{
          color: theme.palette.midnight.main,
          '&.Mui-checked': {
            color: theme.palette.spacecadet.main,
          },
          }} />} label="React" />
              </FormGroup>
            </FormControl>
                        <Typography sx={{align : 'justify', mt : 3, mb : 3 }} variant="h5">
            </Typography>
            <FormControl variant="outlined" sx={{width: 400, mt: 2, mx: 'auto'}}>
              <Typography htmlFor="gostaria">Em quais dessas áreas você tem interesse?</Typography>
              <FormGroup row>

                <FormControlLabel control={<Checkbox sx={{
                  color: theme.palette.midnight.main,
                  '&.Mui-checked': {
                    color: theme.palette.spacecadet.main,
                  },
                }} />} label="Front-end" />
                <FormControlLabel control={<Checkbox sx={{
                  color: theme.palette.midnight.main,
                  '&.Mui-checked': {
                    color: theme.palette.spacecadet.main,
                  },
                }} />} label="Back-end" />
                <FormControlLabel control={<Checkbox sx={{
                  color: theme.palette.midnight.main,
                  '&.Mui-checked': {
                    color: theme.palette.spacecadet.main,
                  },
                }} />} label="Gestão de Empresas" />
                <FormControlLabel control={<Checkbox sx={{
          color: theme.palette.midnight.main,
          '&.Mui-checked': {
            color: theme.palette.spacecadet.main,
          },
          }} />} label="Gerência de Projetos" />
          <FormControlLabel control={<Checkbox sx={{
          color: theme.palette.midnight.main,
          '&.Mui-checked': {
            color: theme.palette.spacecadet.main,
          },
          }} />} label="Vendas e Marketing" />
              </FormGroup>
            </FormControl>
            <Typography sx={{align : 'justify', mt : 3, mb : 3 }} variant="h5">
              Passo 5 : Expectativas em relação à Pixel
            </Typography>
            <FormControl variant="outlined" sx={{width: 400, mt: 2, mx: 'auto'}}>
              <TextField
                id="rsns"
                label="O que te atraiu à Pixel?"
                multiline
                rows={4}
                defaultValue=""
              />
            </FormControl>
            <FormControl variant="outlined" sx={{width: 400, mt: 2, mx: 'auto'}}>
              <TextField
                id="expect"
                label="O que você espera da Pixel?"
                multiline
                rows={4}
                defaultValue=""
              />
            </FormControl>
                        <Typography sx={{align : 'justify', mt : 3, mb : 3 }} variant="h5">
            </Typography>
            <FormControl variant="outlined" sx={{width: 400, mt: 2, mx: 'auto'}}>
              <TextField
                id="cando"
                label="O que você acha que pode agregar à Pixel?"
                multiline
                rows={4}
                defaultValue=""
              />
            </FormControl>

            <FormControl id="diretorias" variant="outlined" sx={{width: 1,  mx: 'auto'}} >
              <FormGroup row>
                <Typography htmlFor="diretorias">Em quais diretorias da Pixel você tem interesse em atuar?</Typography>
                <Tooltip title={descricoes.gi} arrow>
                <FormControlLabel control={<Checkbox sx={{
          color: theme.palette.midnight.main,
          '&.Mui-checked': {
            color: theme.palette.spacecadet.main,
          },
          }} />} label="Gestão Interna" /> </Tooltip>

                <Tooltip title={descricoes.comercial} arrow>
                <FormControlLabel control={<Checkbox sx={{
          color: theme.palette.midnight.main,
          '&.Mui-checked': {
            color: theme.palette.spacecadet.main,
          },
        }} />} label="Comercial" /> </Tooltip>
                <Tooltip title={descricoes.projetos} arrow>
                <FormControlLabel control={<Checkbox sx={{
          color: theme.palette.midnight.main,
          '&.Mui-checked': {
            color: theme.palette.spacecadet.main,
          },
        }} />} label="Projetos" /> </Tooltip>
                <Tooltip title={descricoes.marketing} arrow>
                <FormControlLabel control={<Checkbox sx={{
          color: theme.palette.midnight.main,
          '&.Mui-checked': {
            color: theme.palette.spacecadet.main,
          },
        }} />} label="Marketing" /> </Tooltip>
              <Tooltip title={descricoes.presidencia} arrow>
              <FormControlLabel control={<Checkbox sx={{
                color: theme.palette.midnight.main,
                '&.Mui-checked': {
                  color: theme.palette.spacecadet.main,
                },
              }} />} label="Presidência, por que não?" />
              </Tooltip>
              <Tooltip title={descricoes.dho} arrow>
              <FormControlLabel control={<Checkbox sx={{
        color: theme.palette.midnight.main,
        '&.Mui-checked': {
          color: theme.palette.spacecadet.main,
        },
        }} />} label="Desenvolvimento Humano e Organizacional" />
              </Tooltip>
              </FormGroup>
            </FormControl>
              <Typography sx={{align : 'justify', mt : 3, mb : 3 }} variant="h5">
                Passo 6 : Conhecimento sobre a Pixel
              </Typography>
              <FormControl id="conhecimentos" variant="outlined" sx={{width: 400, mt: 2, mx: 'auto'}}>
                <FormLabel component="legend">O trabalho na Pixel é remunerado?</FormLabel>
                <RadioGroup row aria-label="remunera" name="remunera">
                  <FormControlLabel value="sim1" control={<Radio />} label="Sim" />
                  <FormControlLabel value="nao1" control={<Radio />} label="Não" />
                  <FormControlLabel value="talvez1" control={<Radio />} label="Talvez" />
                </RadioGroup>
                <FormLabel component="legend">Preciso estar <b>pontualmente</b> nas reuniões remotas às 22:30 com a câmera e microfone ligados?</FormLabel>
                <RadioGroup row aria-label="reuniao" name="reuniao">
                  <FormControlLabel value="sim2" control={<Radio />} label="Sim" />
                  <FormControlLabel value="nao2" control={<Radio />} label="Não" />
                  <FormControlLabel value="talvez2" control={<Radio />} label="Talvez" />
                </RadioGroup>
                <FormLabel component="legend">Preciso me comprometer a dedicar 8 horas semanais à minha atuação na EJ enquanto eu for bit ou byte?</FormLabel>
                <RadioGroup row aria-label="oitohoras" name="oitohoras">
                  <FormControlLabel value="sim3" control={<Radio />} label="Sim" />
                  <FormControlLabel value="nao3" control={<Radio />} label="Não" />
                  <FormControlLabel value="talvez3" control={<Radio />} label="Talvez" />
                </RadioGroup>
                <FormLabel component="legend">Respeito mútuo e diversidade são importantes na Pixel?</FormLabel>
                <RadioGroup row aria-label="inclusao" name="inclusao">
                  <FormControlLabel value="sim4" control={<Radio />} label="Sim" />
                  <FormControlLabel value="nao4" control={<Radio />} label="Não" />
                  <FormControlLabel value="talvez4" control={<Radio />} label="Talvez" />
                </RadioGroup>
                <FormLabel component="legend">Dentro da Pixel terei acesso a material de estudo para me capacitar em desenvolvimento web?</FormLabel>
                <RadioGroup row aria-label="trilhas" name="trilhas">
                  <FormControlLabel value="sim4" control={<Radio />} label="Sim" />
                  <FormControlLabel value="nao4" control={<Radio />} label="Não" />
                  <FormControlLabel value="talvez4" control={<Radio />} label="Talvez" />
                </RadioGroup>
              </FormControl>
              <Typography sx={{align : 'justify', mt : 3, mb : 3 }} variant="h5">
                Passo 7 : Informações de contato
              </Typography>
              <FormControl variant="outlined" sx={{width: 400, mt: 2, mx: 'auto'}}>
                <InputLabel htmlFor="email"></InputLabel>
                <TextField id="email" label="E-mail" variant="outlined" />
              </FormControl>
              <FormControl variant="outlined" sx={{width: 400, mt: 2, mx: 'auto'}}>
                <InputLabel htmlFor="whatsapp"></InputLabel>
                <TextField id="whatsapp" label="WhatsApp" variant="outlined" />
              </FormControl>
              <Typography sx={{align : 'justify', mt : 3, mb : 3 }} variant="h5"/>
              <FormControl variant="outlined" sx={{width: 400, mt: 2, mx: 'auto'}}>
                <InputLabel htmlFor="linkedin"></InputLabel>
                <TextField id="linkedin" label="LinkedIn" variant="outlined" />
              </FormControl>
              <FormControl variant="outlined" sx={{width: 400, mt: 2, mx: 'auto'}}>
                <InputLabel htmlFor="github"></InputLabel>
                <TextField id="github" label="GitHub" variant="outlined" />
              </FormControl>
              <Typography sx={{align : 'justify', mt : 3, mb : 3 }} variant="h5"/>

              <Button variant="contained" endIcon={<SendIcon />} sx={{width: 400, mt: 3, mx: 'auto', backgroundColor: theme.palette.midnight.main, color: theme.palette.sunrise.main,}}>Enviar</Button>

            </Box>
          </div>
        </CardContent>
      </Card>
            <Typography sx={{ mt : 3, mb : 3, color : theme.palette.sunrise.main }} variant="p">Aplicação desenvolvida em <Link href="https://react.dev/" underline="none" color="#1CACD8">React</Link> por Rudolfo Lange Neto</Typography> 
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
