import { type FC } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';

const benefits = [
  'Снижение финансовых рисков до 85%',
  'Автоматизация рутинных проверок',
  'Соответствие международным стандартам',
  'Интеграция с существующими системами',
  'Обучение персонала и техническая поддержка',
  'Регулярные обновления и улучшения',
];

export const Benefits: FC = () => {
  return (
    <Box sx={{ py: 12, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{xs:12, md:6}}>
            <Typography variant="h2" gutterBottom>
              Преимущества нашего решения
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Мы помогаем компаниям минимизировать риски и обеспечить
              полный контроль над процессами закупок с помощью передовых
              технологий и лучших практик индустрии.
            </Typography>

            <List>
              {benefits.map((benefit, index) => (
                <ListItem key={index} sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircleOutline color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={benefit}
                    primaryTypographyProps={{
                      fontSize: '1.1rem',
                      fontWeight: 500,
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid size={{xs:12, md:6}}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: 3,
              }}
            >
              <Typography variant="h3" gutterBottom>
                Начните прямо сейчас
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                Получите 30-дневный бесплатный доступ ко всем функциям системы.
                Без привязки карты, без скрытых платежей.
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Typography variant="h4" component="span" sx={{ fontWeight: 700 }}>
                  0₽
                </Typography>
                <Typography variant="body1" component="span" sx={{ ml: 1 }}>
                  / первый месяц
                </Typography>
              </Box>

              <Typography variant="caption" sx={{ opacity: 0.8 }}>
                Далее от 50 000₽/месяц в зависимости от объема транзакций
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};