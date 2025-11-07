import { type FC, useState, type FormEvent } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import { SendOutlined } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
export const ContactForm: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setOpenSnackbar(true);
    // TODO: Send form data to backend
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 12,
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" gutterBottom>
            Свяжитесь с нами
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Оставьте заявку, и наш специалист свяжется с вами в течение 24 часов
          </Typography>
        </Box>

        <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid size={{xs:12}}>
                <TextField
                  fullWidth
                  label="Имя"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid size={{xs:12}}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid size={{xs:12}}>
                <TextField
                  fullWidth
                  label="Компания"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid size={{xs:12}}>
                <TextField
                  fullWidth
                  label="Сообщение"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid size={{xs:12}}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  endIcon={<SendOutlined />}
                >
                  Отправить заявку
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert severity="success" sx={{ width: '100%' }}>
            Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};