import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import RailwayStation from 'src/components/dashboard/RailwayStation';
import TrainSchedule from 'src/components/dashboard/TrainSchedule';
import TrainDelay from 'src/components/dashboard/TrainDelay';
import TrainCancel from 'src/components/dashboard/TrainCancel';
import TicketReservation from 'src/components/dashboard/TicketReservation';
import Carousel from 'src/components/dashboard/Carousel';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>

    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ pt: 3 }}>
          <Typography
            component="div"
            align="center"
            gutterBottom
            sx={{
              letterSpacing: 2,
              fontSize: 44,
              fontWeight: 'bold',
              fontFamily: [
                '-apple-system',
                '"Segoe UI"',
                'Roboto',
                'Arial',
                'sans-serif',
              ].join(','),
            }}
          >
            Welcome to Porto Railways
          </Typography>

          <br />
          <Carousel />
        </Box>

        <br />

        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3,
          }}
        >
          <Container maxWidth={false}>
            <Grid container spacing={3}>

              <Grid item lg={2.4} sm={4.4} xl={2.4} xs={8.4}>
                <a
                  href="/app/railwayStations"
                  aria-label="Open Railway Stations page"
                >
                  <RailwayStation />
                </a>
              </Grid>

              <Grid item lg={2.4} sm={4.4} xl={2.4} xs={8.4}>
                <a
                  href="/app/trainSchedule"
                  aria-label="Open Train Schedule page"
                >
                  <TrainSchedule />
                </a>
              </Grid>

              <Grid item lg={2.4} sm={4.4} xl={2.4} xs={8.4}>
                <a
                  href="/app/trainDelays"
                  aria-label="Open Train Delays page"
                >
                  <TrainDelay />
                </a>
              </Grid>

              <Grid item lg={2.4} sm={4.4} xl={2.4} xs={8.4}>
                <a
                  href="/app/trainCancellations"
                  aria-label="Open Train Cancellations page"
                >
                  <TrainCancel />
                </a>
              </Grid>

              <Grid item lg={2.4} sm={4.4} xl={2.4} xs={8.3}>
                <a
                  href="/app/ticketReservation"
                  aria-label="Open Ticket Reservation page"
                >
                  <TicketReservation />
                </a>
              </Grid>

            </Grid>
          </Container>
        </Box>

      </Container>
    </Box>
  </>
);

export default Dashboard;
