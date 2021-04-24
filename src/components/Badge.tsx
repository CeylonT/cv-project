import { Box } from '@material-ui/core'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const StyledBadge = styled(Box)`
  border-radius: 1px 8px;
  color: white;
  padding: 4px 8px;

  ${(props) => css`
    background: ${props.theme.palette.primary.main};
  `};
`
export const Badge = ({ children }) => {
  return <StyledBadge>{children}</StyledBadge>
}
