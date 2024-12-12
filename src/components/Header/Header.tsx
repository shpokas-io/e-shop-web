import { useState, FC, MouseEventHandler } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
  Person as PersonIcon,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

interface HeaderProps {
  brandName?: string
  menuItems?: string[]
  drawerWidth?: number
}

const DefaultMenuItems = [
  "Men's Clothes",
  "Women's Clothes",
  'Electronics',
  'Jewelry',
  'Wardrobe',
]

const MobileDrawerContent: FC<{
  brandName: string
  menuItems: string[]
  onClose: MouseEventHandler
  width: number
}> = ({ brandName, menuItems, onClose, width }) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        width,
        display: 'flex',
        flexDirection: 'column',
        p: 2,
      }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      {/* Brand */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pb: 2,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold', textAlign: 'center' }}
        >
          {brandName}
        </Typography>
      </Box>

      {/* Login/Register and Cart Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 2,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Button
          startIcon={<PersonIcon />}
          sx={{ textTransform: 'none', fontWeight: 'bold' }}
          // If needed, navigation on mobile menu as well
          onClick={(e) => {
            e.stopPropagation()
            ;(onClose as Function)()
            window.location.href = '/auth'
          }}
        >
          Login/Register
        </Button>
        <Button
          startIcon={<ShoppingCartIcon />}
          sx={{ textTransform: 'none', fontWeight: 'bold' }}
        >
          0,00 €
        </Button>
      </Box>

      {/* Categories Section */}
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

const Header: FC<HeaderProps> = ({
  brandName = 'My E-Shop',
  menuItems = DefaultMenuItems,
  drawerWidth = 250,
}) => {
  const theme = useTheme()
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'))
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = useNavigate()

  const toggleDrawer = (open: boolean) => () => setMenuOpen(open)

  return (
    <>
      <AppBar position="sticky" color="default" sx={{ boxShadow: 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {isMobileOrTablet ? (
            // Mobile/Tablet Layout
            <>
              <IconButton
                edge="start"
                color="inherit"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold' }}
              >
                {brandName}
              </Typography>
              <IconButton edge="end" color="inherit">
                <ShoppingCartIcon />
              </IconButton>
            </>
          ) : (
            // Desktop Layout
            <>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {brandName}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: theme.palette.grey[200],
                  borderRadius: theme.shape.borderRadius,
                  px: theme.spacing(1.5),
                  width: 400,
                  mx: 'auto',
                }}
              >
                <InputBase
                  placeholder="Search products..."
                  inputProps={{ 'aria-label': 'search' }}
                  sx={{ flexGrow: 1 }}
                />
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton onClick={() => navigate('/auth')}>
                  <PersonIcon />
                </IconButton>
                <IconButton>
                  <ShoppingCartIcon />
                </IconButton>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile/Tablet Drawer */}
      <Drawer anchor="left" open={menuOpen} onClose={toggleDrawer(false)}>
        <MobileDrawerContent
          brandName={brandName}
          menuItems={menuItems}
          onClose={toggleDrawer(false)}
          width={drawerWidth}
        />
      </Drawer>
    </>
  )
}

export default Header
