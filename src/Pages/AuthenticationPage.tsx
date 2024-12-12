import React, { useState } from 'react'
import {
  Box,
  Tabs,
  Tab,
  Typography,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import Header from '../components/Header/Header'
import DesktopNav from '../components/DesktopNav/DesktopNav'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ mt: 3 }}>{children}</Box>}
    </div>
  )
}

const AuthenticationPage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0)
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      {isDesktop && <DesktopNav />}

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          mt: 5,
          px: 2,
        }}
      >
        <Box sx={{ maxWidth: 400, width: '100%' }}>
          <Typography
            variant="h5"
            sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}
          >
            Welcome Back!
          </Typography>

          <Tabs value={tabValue} onChange={handleChange} centered>
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>

          <TabPanel value={tabValue} index={0}>
            <TextField fullWidth label="Email" type="email" sx={{ mb: 2 }} />
            <TextField
              fullWidth
              label="Password"
              type="password"
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                textTransform: 'none',
                fontWeight: 'bold',
                backgroundColor: '#004d61',
                '&:hover': { backgroundColor: '#003843' },
              }}
            >
              Login
            </Button>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <TextField fullWidth label="Name" sx={{ mb: 2 }} />
            <TextField fullWidth label="Email" type="email" sx={{ mb: 2 }} />
            <TextField
              fullWidth
              label="Password"
              type="password"
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                textTransform: 'none',
                fontWeight: 'bold',
                backgroundColor: '#004d61',
                '&:hover': { backgroundColor: '#003843' },
              }}
            >
              Register
            </Button>
          </TabPanel>
        </Box>
      </Box>
    </Box>
  )
}

export default AuthenticationPage
