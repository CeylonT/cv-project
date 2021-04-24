import styled from '@emotion/styled'
import { Box } from '@material-ui/core'

export const GreyBgBox = styled(Box)`
  background: var(--bg-grey);
`

export const WhiteBox = styled(Box)`
  background: white;
`

export const PriceCutBox = styled(Box)`
  background: linear-gradient(to top left, transparent calc(50% - 1px), var(--dark-grey), transparent calc(50% + 1px) )
`