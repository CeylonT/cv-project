import styled from '@emotion/styled'
import { TextField } from '@material-ui/core'

export const StyledTextField = styled(TextField)`
  width: 100%;
  margin-top: 4px;
  .MuiOutlinedInput-root {
    border-radius: 6px;
  }
  .MuiOutlinedInput-input {
    border-radius: 100px !important;
    height: 24px;
    padding: 8px 16px;
  }
  .Mui-focused * {
    border-color: 1px solid var(--black) !important;
  }
`
