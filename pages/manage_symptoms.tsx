import { Grid, IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const StyledMainContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  backgroundColor: "#544376",
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
      xs={6}
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
  const router = useRouter();
  return (
    <StyledMainContainer>
      <Box mb={2}>
        <IconButton
          onClick={() => {
            router.back();
          }}
          sx={{ color: "white" }}
          size="small"
        >
          <ArrowBackIosIcon sx={{ color: "white" }} />
          Back
        </IconButton>
      </Box>
      <Box p={1}>
        <StyledMainTitle gutterBottom variant="h6" textAlign="center">
          Medical Memory Dashboard
        </StyledMainTitle>
        <Box mt={2}>
          <StyledMainTitle variant="body1" textAlign="center">
            Sarah now you can manage medical conditions and drive better
            outcomes by following this simple plan.
          </StyledMainTitle>
        </Box>
      </Box>
      <Box mt={6}>
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          <IconTails title="Patient Satisfaction" src="/images/satisfaction.jpg" />
          <IconTails
            title="View/Change Treatment Plan"
            src="/images/treatment_plans.jpg"
          />
          <IconTails
            title="Manage Symptoms"
            src="/images/manage_symptoms.jpg"
          />
          <IconTails title="Communication" src="/images/communication.jpg" />
          <IconTails title="Outcomes" src="/images/outcomes.jpg" />
        </Grid>
      </Box>
    </StyledMainContainer>
  );
};

export default Home;
