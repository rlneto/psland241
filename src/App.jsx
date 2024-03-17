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
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import shared from './styles/Shared.module.css'

const theme = createTheme({
  typography: {
    fontFamily: 'Koho, Krub, sans-serif',
  },
  // palette: {
  //   spacecadet: {
  //     main: '#82337E',
  //   },
  //   midnight: {
  //     main: '#023047',
  //   },
  //   sunrise: {
  //     main: '#FFB703',
  //   },
  //   midday: {
  //     main: '#1CACD8',
  //   },
  // }
});

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
              A Pixel é a Empresa Júnior dos cursos de Ciências da Computação e Sistemas de Informação da UFSC
            </Typography>
            <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '30rem' },}}
            noValidate
            autoComplete="off">
            <Typography sx={{align : 'justify', mt : 3, mb : 3 }} variant="h5">
              Etapa 1 : Informações Pessoais
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
              Etapa 2 : Informações Acadêmicas
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
              <InputLabel htmlFor="semestre">Em qual fase você diria que está em seu curso?</InputLabel>
              <Select
                native
                label="Em qual fase você diria que está em seu curso?"
                inputProps={{
                  name: 'semestre',
                  id: 'semestre',
                }}
              >
                <option aria-label="None" value="" />
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
              </Select>
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
              Etapa 3 : Informações Profissionais
            </Typography>
            <FormControl variant="outlined" sx={{width: 400, mt: 2, mx: 'auto'}}>
              <InputLabel htmlFor="trab">
                Você trabalha ou faz estágio atualmente? Se sim, fale um pouco sobre?
              </InputLabel>
              <TextField
                id="trab"
                label=""
                multiline
                rows={4}
                defaultValue=""
              />
            </FormControl>
            </Box>
          </div>

        </CardContent>
      </Card>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
