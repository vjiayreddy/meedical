import { Chip, Grid, IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const StyledMainContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  backgroundColor: "#937DC2",
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
      xs={6}
      container
      flexDirection="column"
      alignItems="center"
      onClick={() => {
        router.push(props.route);
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

const Knowledge = () => {
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
          <StyledMainTitle gutterBottom variant="h6" textAlign="center">
            Gain Knowledge
          </StyledMainTitle>
        </Box>
      </Box>
      <Box mt={6}>
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          <IconTails
            title="Audio Transcript"
            src="/images/audio.jpg"
            route="/knowledge"
          />
          <IconTails
            title="Video Library"
            src="/images/video.jpg"
            route="/treatment-plan"
          />
          <IconTails
            title="Medical Terminology"
            src="/images/medical_terminlogy.jpg"
          />
          <IconTails title="Reference" src="/images/reference.jpg" />
        </Grid>
      </Box>
    </StyledMainContainer>
  );
};

export default Knowledge;
