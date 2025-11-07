import {type  FC } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Grid,
  alpha,
  Paper,
} from '@mui/material';
import {
  LoginOutlined,
  PersonAddOutlined,
  SecurityOutlined,
  VerifiedOutlined,
  TrendingUpOutlined,
} from '@mui/icons-material';

export const Hero: FC = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:3000/login';
  };

  const handleRegister = () => {
    // TODO: Implement registration flow
    window.location.href = 'http://localhost:3000/register';
  };

  return (
    <Box
      sx={{
        background: theme => `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Левая колонка - TrustFlow */}
          <Grid size={{xs:12, md:6}}>
            <Box>
              {/* Логотип/Название */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 2,
                    bgcolor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                    boxShadow: 3,
                  }}
                >
                  <SecurityOutlined 
                    sx={{ 
                      fontSize: 36, 
                      color: 'primary.main' 
                    }} 
                  />
                </Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                  }}
                >
                  TrustFlow
                </Typography>
              </Box>

              {/* Определение */}
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  opacity: 0.95,
                  fontWeight: 400,
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                }}
              >
                "Непрерывный поток доверия в управлении бизнес-процессами"
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                }}
              >
                <strong>TrustFlow</strong> — это система управления 
                комплаенс-рисками, которая обеспечивает непрерывный контроль и прозрачность 
                всех процессов закупок. Система автоматически выявляет потенциальные нарушения, 
                минимизирует риски и гарантирует соответствие законодательству на каждом этапе
              </Typography>

              {/* Ключевые преимущества */}
              <Stack spacing={2} sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <VerifiedOutlined sx={{ fontSize: 24 }} />
                  <Typography variant="body1">
                    Автоматическое выявление рисков в режиме реального времени
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <TrendingUpOutlined sx={{ fontSize: 24 }} />
                  <Typography variant="body1">
                    Прогнозная аналитика и предотвращение инцидентов
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <SecurityOutlined sx={{ fontSize: 24 }} />
                  <Typography variant="body1">
                    Полное соответствие нормативным требованиям
                  </Typography>
                </Box>
              </Stack>

              {/* Кнопки CTA */}
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2} 
                sx={{ mb: 4 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleLogin}
                  startIcon={<LoginOutlined />}
                  sx={{
                    bgcolor: 'white',
                    color: 'primary.main',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': {
                      bgcolor: alpha('#ffffff', 0.9),
                      transform: 'translateY(-2px)',
                      boxShadow: 6,
                    },
                    transition: 'all 0.3s',
                  }}
                >
                  Войти в систему
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleRegister}
                  startIcon={<PersonAddOutlined />}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderWidth: 2,
                    '&:hover': {
                      borderColor: 'white',
                      borderWidth: 2,
                      bgcolor: alpha('#ffffff', 0.15),
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s',
                  }}
                >
                  Регистрация
                </Button>
              </Stack>

              {/* Статистика */}
              <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid size={{xs:4}}>
                  <Box>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 0.5 }}>
                      99.9%
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.85, fontSize: '0.9rem' }}>
                      Точность обнаружения
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{xs:4}}>
                  <Box>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 0.5 }}>
                      24/7
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.85, fontSize: '0.9rem' }}>
                      Мониторинг
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{xs:4}}>
                  <Box>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 0.5 }}>
                      500+
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.85, fontSize: '0.9rem' }}>
                      Клиентов
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>        
        </Grid>
      </Container>
    </Box>
  );
};