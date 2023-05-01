import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";

const StyledMainContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  backgroundColor: theme.palette.primary.main,
  padding: 20,
}));

const StyledMainTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  lineHeight: 1.3,
}));

const StyledIconTail = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  width: 75,
  height: 75,
  borderRadius: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  filter: `drop-shadow(5px 5px 22px #2C317E)`,
}));

const StyledIconLabel = styled(Box)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: 12,
}));

const IconTails = (props: any) => {
  const router = useRouter();
  return (
    <Grid
      item
      xs={4}
      container
      flexDirection="column"
      alignItems="center"
      onClick={() => {
        if (props.route) {
          router.push(props.route);
        }
      }}
    >
      <Grid item>
        <StyledIconTail mb={2}>
          <img width={65} src={props.src} />
        </StyledIconTail>
      </Grid>
      <Grid item>
        <StyledIconLabel textAlign="center">{props.title}</StyledIconLabel>
      </Grid>
    </Grid>
  );
};

const Home = () => {
  return (
    <StyledMainContainer>
      <Box p={1}>
        <StyledMainTitle gutterBottom variant="h6" textAlign="center">
          Medical Memory Dashboard
        </StyledMainTitle>
        <Box mt={2}>
          <StyledMainTitle variant="body1" textAlign="center">
            Search now you can manage medical conditions and drive better
            outcomes by following this simple plan.
          </StyledMainTitle>
        </Box>
      </Box>
      <Box mt={6}>
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          <IconTails
            title="Gain Knowledge"
            src="/images/knowledge.jpg"
            route="/knowledge"
          />
          <IconTails
            title="Treatment Plan"
            src="/images/treatment_plans.jpg"
            route="/treatment-plan"
          />
          <IconTails
            route="/manage_symptoms"
            title="Manage Symptoms"
            src="/images/manage_symptoms.jpg"
          />
          <IconTails
            title="Communication"
            src="/images/communication.jpg"
            route="/communication"
          />
          <IconTails title="Outcomes" src="/images/outcomes.jpg" />
          <IconTails title="Appointments" src="/images/appointment.jpg" />
        </Grid>
      </Box>
    </StyledMainContainer>
  );
};

export default Home;
