import { withStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import styled from '@emotion/styled';

export const BlackTypography = withStyles({
  root: {
    color: "#323339"
  }
})(Typography);

export const WhiteTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

export const DarkGreyTypography = withStyles({
  root: {
    color: "#C60310"
  }
})(Typography);

export const PrimaryDarkTypography = withStyles({
  root: {
    color: "#C60310"
  }
})(Typography);

export const PrimaryLightTypography = withStyles({
  root: {
    color: "#FF4438"
  }
})(Typography);

export const PriceCutTypography = styled(Typography)`
  margin: auto 0;
  background: linear-gradient(to top left, transparent calc(50% - 1px), var(--dark-grey), transparent calc(50% + 1px) );
`


