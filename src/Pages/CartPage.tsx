import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Header from '../components/Header/Header'
import DesktopNav from '../components/DesktopNav/DesktopNav'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Footer from '../components/Footer/Footer'
import ProductCard from '../components/Product/ProductCard'
import { useNavigate } from 'react-router-dom'

const cartProducts = [
  {
    id: 1,
    name: 'Modern Lamp',
    image: 'https://via.placeholder.com/300',
    price: '€10.00',
  },
  {
    id: 2,
    name: 'Stylish Chair',
    image: 'https://via.placeholder.com/300',
    price: '€20.00',
  },
]

const CartPage: React.FC = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const navigate = useNavigate()

  const handleCheckout = () => {
    navigate('/checkout')
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
          Your Cart
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '1fr 1fr 1fr',
            },
            gap: 2,
          }}
        >
          {cartProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </Box>

        <Box sx={{ mt: 4, textAlign: 'right' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Total: €30.00
          </Typography>
          <Button
            variant="contained"
            onClick={handleCheckout}
            sx={{
              textTransform: 'none',
              backgroundColor: '#004d61',
              '&:hover': { backgroundColor: '#003843' },
            }}
          >
            Proceed to Checkout
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default CartPage
