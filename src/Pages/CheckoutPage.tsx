import React from 'react'
import {
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import Header from '../components/Header/Header'
import DesktopNav from '../components/DesktopNav/DesktopNav'
import Footer from '../components/Footer/Footer'

const CheckoutPage: React.FC = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const handlePlaceOrder = () => {
    //Here will be later the logic for placing order
    console.log('Order placed')
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header
        brandName="My E-Shop"
        menuItems={[
          "Men's Clothes",
          "Women's Clothes",
          'Electronics',
          'Jewelry',
          'Wardrobe',
        ]}
        drawerWidth={250}
      />
      {isDesktop && <DesktopNav />}

      <Box sx={{ flex: 1, p: { xs: 2, md: 5 } }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Checkout
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Shipping Address
            </Typography>
            <TextField fullWidth label="Full Name" sx={{ mb: 2 }} />
            <TextField fullWidth label="Address" sx={{ mb: 2 }} />
            <TextField fullWidth label="City" sx={{ mb: 2 }} />
            <TextField fullWidth label="Postal Code" sx={{ mb: 2 }} />
            <TextField fullWidth label="Country" sx={{ mb: 2 }} />

            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
              Payment Details
            </Typography>
            <TextField fullWidth label="Card Number" sx={{ mb: 2 }} />
            <TextField fullWidth label="Expiry Date" sx={{ mb: 2 }} />
            <TextField fullWidth label="CVV" sx={{ mb: 2 }} />
          </Box>

          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Order Summary
            </Typography>
            <Typography>Modern Lamp - €10.00</Typography>
            <Typography>Stylish Chair - €20.00</Typography>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              Total: €30.00
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                textTransform: 'none',
                backgroundColor: '#004d61',
                '&:hover': { backgroundColor: '#003843' },
              }}
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default CheckoutPage
