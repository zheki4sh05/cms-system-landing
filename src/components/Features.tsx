
import { type FC } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  alpha,
} from '@mui/material';
import {
  SecurityOutlined,
  AnalyticsOutlined,
  SpeedOutlined,
  AutoGraphOutlined,
  VerifiedUserOutlined,
  NotificationsActiveOutlined,
} from '@mui/icons-material';

const features = [
  {
    icon: SecurityOutlined,
    title: 'Контроль рисков',
    description: 'Автоматическое выявление потенциальных нарушений и рисков в процессе закупок.',
  },
  {
    icon: AnalyticsOutlined,
    title: 'Аналитика',
    description: 'Глубокая аналитика с визуализацией трендов и ключевых показателей эффективности.',
  },
  {
    icon: SpeedOutlined,
    title: 'Быстрая реакция',
    description: 'Мгновенные уведомления о критических инцидентах и автоматическая эскалация.',
  },
  {
    icon: AutoGraphOutlined,
    title: 'Прогнозирование',
    description: 'Предиктивная аналитика для предотвращения проблем до их возникновения.',
  },
  {
    icon: VerifiedUserOutlined,
    title: 'Комплаенс',
    description: 'Полное соответствие законодательству и внутренним политикам компании.',
  },
  {
    icon: NotificationsActiveOutlined,
    title: 'Мониторинг 24/7',
    description: 'Непрерывный мониторинг всех транзакций и процессов закупок.',
  },
];

export const Features: FC = () => {
  return (
    <Box
      sx={{
        py: 12,
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{ color: 'text.primary' }}
          >
            Возможности системы
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            Комплексное решение для управления рисками с современными
            инструментами автоматизации и аналитики
          </Typography>
        </Box>

       <Box display="flex" flexWrap="wrap" gap={2}>
  {features.map((feature, index) => {
    const Icon = feature.icon;
    return (
      <Box
        key={index}
        sx={{
          flexBasis: { xs: '100%', sm: 'calc(50% - 8px)' }, // два в ряд с отступом
          flexGrow: 1,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 4,
            height: '100%',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 3,
            transition: 'all 0.3s',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: theme => theme.shadows[8],
              borderColor: 'primary.main',
              cursor:"pointer"
            },
          }}
        >
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: 2,
              bgcolor: theme => alpha(theme.palette.primary.main, 0.1),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 3,
            }}
          >
            <Icon sx={{ fontSize: 32, color: 'primary.main' }} />
          </Box>

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            {feature.title}
          </Typography>

          <Typography variant="body1" color="text.secondary">
            {feature.description}
          </Typography>
        </Paper>
      </Box>
    );
  })}
</Box>

      </Container>
    </Box>
  );
};