import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import HeaderView from '../../components/header/header';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './store.css';

function Copyright(props: any) {

  return (
    <Typography variant="body2" color="#ffffff" align="center" {...props}>
      {'Copyright © '}
      <Link color="#ffffff" href="https://highkingdom.xyz/">
        HighKindom
      </Link>{' 2022'}
      {new Date().getFullYear() != 2022 && (' - ' + new Date().getFullYear())}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'HighAconor',
    price: '16,99',
    description: [
      'Cargo de Premium',
      'Criar tag própria'
    ],
    buttonText: 'Assinar agora',
    buttonVariant: 'outlined',
  },
  {
    title: 'HighPylert',
    subheader: 'Mais Recomendado',
    price: '50,00',
    description: [
      'Cargo de Premium',
      'Criar tag própria com icone',
      'Novidades antecipadas',
      'sorteios exclusivos',
      'Direito a call propria',
      'Permissão para entrar na call Decorativa'
    ],
    buttonText: 'Assinar agora',
    buttonVariant: 'contained',
  },
  {
    title: 'HighSkyrus',
    price: '30',
    description: [
      'Cargo de Premium',
      'Criar tag própria com icone',
      'Novidades antecipadas',
      'sorteios exclusivos',
    ],
    buttonText: 'Assinar agora',
    buttonVariant: 'outlined',
  },
];

function PricingContent() {
  
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="MainStore">
      { open && (
        <>
            <Dialog
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
              >
            <DialogTitle id="responsive-dialog-title">
              {"Esse Serviço estará disponivel em breve"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                O site HighKingdom se encontra em desenvolvimento. por tanto muitas paginas e recursos estão em beta ou em development. se junte a nossa comunidado do {<Link href='/invite' color="#212121">Discord</Link>} para ser notificado quando esse recurso estiver pronto
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                Fechar
              </Button>
            </DialogActions>
          </Dialog>
        </>
      ) }
        <React.Fragment>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <CssBaseline />
        <HeaderView />
        {/* Hero unit */}
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="#ffffff"
            gutterBottom
          >
            Seja HighPremium
          </Typography>
          <Typography variant="h5" align="center" color="#ffffff" component="p">
            Olá! Estamos agora com planos oficiais da HighKingdom.
            agora podemos finalmente cobrar os valores na nossa moeda ofical e também temos nosso próprio sistema de premium.
          </Typography>
        </Container>
        {/* End hero unit */}
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === 'Enterprise' ? 12 : 6}
                md={4}
              >
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                    subheaderTypographyProps={{
                      align: 'center',
                    }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'baseline',
                        mb: 2,
                      }}
                    >
                      <Typography component="h2" variant="h3" color="text.primary">
                        R${tier.price}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        /mês
                      </Typography>
                    </Box>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant={tier.buttonVariant as 'outlined' | 'contained'}
                      onClick={() => handleClickOpen()}
                      >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* Footer */}
        <Container
          maxWidth="md"
          component="footer"
          sx={{
            borderTop: (theme) => `1px solid #ffffff`,
            mt: 8,
            py: [3, 6],
          }}
        >

          <Copyright sx={{ mt: 5 }} />
        </Container>
        {/* End footer */}
      </React.Fragment>
    </div>
  );
}

export default function Pricing() {
  return <PricingContent />;
}