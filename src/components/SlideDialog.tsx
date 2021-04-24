import { SlideUpTransition } from "./Transitions"
import { AppBar, Box, Dialog, IconButton, Slide, Toolbar, Typography } from "@material-ui/core"
import { theme } from "../theme"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import PropTypes from 'prop-types';
import React from "react"
import { TransitionProps } from "@material-ui/core/transitions"

export const SlideDialog = ({open, handleClose, title, children, TransitionComponent}) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={TransitionComponent}
    >
      <AppBar position='relative' style={{ background: "white" }}>
        <Toolbar>
          <Box flex='1'>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              style={{ color: theme.palette.text.secondary }}
            >
              <ChevronLeftIcon />
            </IconButton>
          </Box>
          <Box flex='8' textAlign='center' width="100%">
            <Typography variant='h5' color='textPrimary'>
              {title}
            </Typography>
          </Box>
          <Box flex='1'> </Box>
        </Toolbar>
      </AppBar>
      {children}
    </Dialog>
  )
}

SlideDialog.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  handleClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}
