import React from 'react';
import { Grid, Paper, Box, Typography, Stack, Button } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

interface DemoPanelProps {

}

const DemoExample: React.FC<DemoPanelProps> = () => {
  const theme = useTheme();

  const onLogin = () => {
    window.location.href = 'http://localhost:3000/login';
  };

  return (
    <Box sx={{maxWidth:"1000px", margin:"0 auto", padding:"20px 0"}}>
 <Grid size={{xs:12, md:6}}>
      <Paper
        elevation={8}
        sx={{
          background: alpha('#ffffff', 0.98),
          borderRadius: 4,
          overflow: 'hidden',
          backdropFilter: 'blur(10px)',
          border: '1px solid',
          borderColor: alpha('#ffffff', 0.3),
        }}
      >
        <Box
          sx={{
            background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
            p: 3,
            color: 'white',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            Интерактивная демонстрация системы
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            Посмотрите, как TrustFlow работает в действии
          </Typography>
        </Box>

        <Box sx={{ p: 4 }}>
          <Stack spacing={3}>
            <InfoCard
              title="⚠️ ИНЦИДЕНТ ОБНАРУЖЕН"
              description="Подозрение на завышение цены на 15% выше рыночной"
              color="primary"
              bgColor={alpha('#1976d2', 0.05)}
            />
            <InfoCard
              title="✅ АВТОМАТИЧЕСКАЯ ПРОВЕРКА"
              description="Проверено 247 транзакций за последние 24 часа"
              color="success"
              bgColor={alpha('#4caf50', 0.05)}
            />
            <InfoCard
              title="📊 АНАЛИТИКА"
              description="Снижение рисков на 43% за последний квартал"
              color="warning"
              bgColor={alpha('#ff9800', 0.05)}
            />

            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={onLogin}
              sx={{
                mt: 2,
                py: 1.5,
                fontSize: '1rem',
                textTransform: 'none',
                fontWeight: 600,
              }}
            >
              Попробовать сейчас
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Grid>
    </Box>
   
  );
};

interface InfoCardProps {
  title: string;
  description: string;
  color: 'primary' | 'success' | 'warning';
  bgColor: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, color, bgColor }) => (
  <Paper
    elevation={0}
    sx={{
      p: 2.5,
      bgcolor: bgColor,
      borderLeft: '4px solid',
      borderColor: `${color}.main`,
      transition: 'all 0.3s',
      '&:hover': {
        transform: 'translateX(8px)',
        boxShadow: 2,
      },
    }}
  >
    <Typography variant="subtitle2" color={`${color}.main`} sx={{ mb: 1, fontWeight: 600 }}>
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {description}
    </Typography>
  </Paper>
);

export default DemoExample;
