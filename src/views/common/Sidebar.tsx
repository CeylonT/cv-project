import styled from '@emotion/styled'
import {
  Box,
  Drawer,
  List,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import MoonIcon from '@material-ui/icons/Brightness2'
import { Routes } from 'constants/Routes'
import { includes } from 'lodash'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo } from 'react'
import { SidebarItem, Props as SidebarItemProps } from './SidebarItem'
import Logo from 'svgs/logo.svg'

const StyledDrawer = styled(Drawer)`
  width: 240px;
  flex-shrink: 0;

  & > .MuiDrawer-paper {
    width: 240px;
  }
`

const StyledToolbar = styled(Toolbar)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

type Props = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
  navHeight: number
}

export const Sidebar = (props: Props) => {
  const { isOpen, onClose, children, navHeight } = props
  const router = useRouter()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const items: SidebarItemProps['item'][] = useMemo(
    () => [
      {
        label: 'Menu',
        icon: <MoonIcon />,
        items: [
          {
            label: 'Sub Menu',
            icon: <MoonIcon />,
            props: {
              selected: router.pathname === '/',
              onClick: () => router.push('/'),
            },
          },
        ],
      },
      {
        label: 'Utility',
        icon: <MoonIcon />,
        props: {
          selected: router.pathname.startsWith('/utility'),
          onClick: () => router.push('/utility'),
        },
      },
      {
        label: 'Design System',
        icon: <MoonIcon />,
        props: {
          selected: router.pathname.startsWith('/design'),
          onClick: () => router.push('/design'),
        },
      },
    ],
    [router],
  )

  const handleLogoClick = () => {
    router.push('/')
  }

  useEffect(() => {
    router.events.on('routeChangeStart', onClose)
    return () => router.events.off('routeChangeStart', onClose)
  }, [router, onClose])

  // if (includes(Routes.SIDEBAR_HIDDEN, router.pathname)) {
  //   return <>{children}</>
  // }

  return (
    <Box display="flex" minHeight="100vh">
      <StyledDrawer
        anchor="left"
        // variant={isMobile ? "temporary" : "permanent"}
        variant={'temporary'}
        open={isOpen}
        ModalProps={{ keepMounted: true }}
        onClose={onClose}
      >
        <StyledToolbar onClick={handleLogoClick}>
          <Logo height={44} width={null} />
        </StyledToolbar>
        <List>
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </List>
      </StyledDrawer>
      <Box display="flex" flexDirection="column" width="100%">
        <Toolbar style={{ minHeight: `${navHeight}px` }} />
        {children}
      </Box>
    </Box>
  )
}
