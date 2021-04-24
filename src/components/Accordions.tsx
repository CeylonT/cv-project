import styled from "@emotion/styled"
import { Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core"

export const StyledAccordion = styled(Accordion)`
  &:before {
    display: none;
  }
  box-shadow: none;
  margin: 0 !important;
`

export const StyledAccordionSummary = styled(AccordionSummary)`
  .Mui-expanded {
    margin: 12px 0;
  }
`

export const StyledAccordionDetails = styled(AccordionDetails)`
`