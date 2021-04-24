import styled from '@emotion/styled'
import { Button, TextField, Typography } from '@material-ui/core'
import { Limit } from '../Limit'

const Wrapper = styled(Limit)`
  & > * + * {
    margin-top: 1.5rem;
  }
`

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
`

const ButtonContainer = styled(Container)`
  grid-auto-columns: minmax(auto, 100px);
`

const TextFieldContainer = styled(Container)`
  grid-auto-columns: minmax(auto, 200px);
`

export const DesignSystemPage = () => {
  return (
    <Wrapper p={4}>
      <Typography variant="h1" color="textPrimary">
        h1 - Normal <br /> <b>h1 - Bold</b>
      </Typography>
      <Typography variant="h2" color="textPrimary">
        h2 - Normal <br /> <b>h2 - Bold</b>
      </Typography>
      <Typography variant="h3" color="textPrimary">
        h3 - Normal <br /> <b>h3 - Bold</b>
      </Typography>
      <Typography variant="h4" color="textPrimary">
        h4 - Normal <br /> <b>h4 - Bold</b>
      </Typography>
      <Typography variant="body1" color="textPrimary">
        body1. Lorem ipsum <b>dolor sit amet</b>, consectetur adipisicing elit.
        Quos blanditiis <b>tenetur unde</b> suscipit, quam beatae rerum
        inventore consectetur, neque doloribus, cupiditate numquam dignissimos
        laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" color="textPrimary">
        body2. Lorem ipsum <b>dolor sit amet</b>, consectetur adipisicing elit.
        Quos blanditiis <b>tenetur unde</b> suscipit, quam beatae rerum
        inventore consectetur, neque doloribus, cupiditate numquam dignissimos
        laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" color="textPrimary" display="block">
        button text
      </Typography>
      <Typography variant="caption" color="textPrimary" display="block">
        caption text
      </Typography>
      <Typography variant="overline" color="textPrimary" display="block">
        overline text
      </Typography>

      <TextFieldContainer>
        <TextField label="standard" variant="standard" />
        <TextField label="outlined" variant="outlined" />
      </TextFieldContainer>

      <ButtonContainer>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="default">
          Default
        </Button>
      </ButtonContainer>

      <ButtonContainer>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="default">
          Default
        </Button>
      </ButtonContainer>
    </Wrapper>
  )
}
