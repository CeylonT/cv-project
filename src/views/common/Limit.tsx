import { Box, BoxProps } from '@material-ui/core'

export const Limit = (props: BoxProps) => {
  return (
    <Box maxWidth={1136} margin="auto" {...props}>
      {props.children}
    </Box>
  )
}
