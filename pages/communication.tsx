import { Chip, Grid, IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const StyledMainContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  backgroundColor: "#004d40",
  padding: 20,
}));

const StyledMainTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  lineHeight: 1.3,
}));

const StyledIconTail = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  width: 100,
  height: 100,
  borderRadius: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
}));

const StyledIconTailMini = styled(Box)(({ theme }) => ({
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
        {props.mini ? (
          <StyledIconTailMini mb={2}>
            <img width={props?.width || 65} src={props.src} />
          </StyledIconTailMini>
        ) : (
          <StyledIconTail mb={2}>
            <img width={props?.width || 65} src={props.src} />
          </StyledIconTail>
        )}
      </Grid>
      <Grid item>
        <StyledIconLabel textAlign="center">{props.title}</StyledIconLabel>
      </Grid>
    </Grid>
  );
};

const Communication = () => {
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
          <StyledMainTitle gutterBottom variant="subtitle1" textAlign="center">
            Communication
          </StyledMainTitle>
        </Box>
      </Box>
      <Box mt={6}>
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          <IconTails width={85} title="Ask Doctor" src="/images/doctor.jpg" />
        </Grid>
        <Box mt={5}>
          <Typography
            sx={{ color: "white", border: `1px solid white`, padding: "10px" }}
            textAlign="center"
            variant="body1"
          >
            Share With Others
          </Typography>
          <Grid
            mt={3}
            container
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <IconTails
              width={55}
              mini={true}
              title="Lab"
              src="/images/lab.jpg"
            />
            <IconTails
              width={55}
              mini={true}
              title="Family"
              src="/images/family.jpg"
            />
          </Grid>
        </Box>
      </Box>
    </StyledMainContainer>
  );
};

export default Communication;
