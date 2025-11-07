import { type FC } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Stack,
  IconButton,
} from '@mui/material';
import {
  EmailOutlined,
  PhoneOutlined,
  LocationOnOutlined,
  LinkedIn,
  Twitter,
  Facebook,
} from '@mui/icons-material';

export const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.dark',
        color: 'white',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
              Compliance System
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
              Профессиональное решение для управления комплаенс-рисками
              в процессе закупок.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton sx={{ color: 'white' }}>
                <LinkedIn />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <Facebook />
              </IconButton>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Контакты
            </Typography>
            <Stack spacing={1.5}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailOutlined fontSize="small" />
                <Typography variant="body2">
                  info@compliance-system.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneOutlined fontSize="small" />
                <Typography variant="body2">
                  +7 (495) 123-45-67
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnOutlined fontSize="small" />
                <Typography variant="body2">
                  Москва, ул. Примерная, д. 123
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Быстрые ссылки
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="hover">
                О компании
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Документация
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Политика конфиденциальности
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Условия использования
              </Link>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: '1px solid',
            borderColor: 'rgba(255, 255, 255, 0.2)',
            mt: 4,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Compliance Risk Management System. Все права защищены.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};