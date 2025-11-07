
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Benefits } from './components/Benefits';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import DemoExample from './components/DemoExample';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hero />
      <DemoExample/>
      <Features />
      <Benefits />
      <ContactForm />
      <Footer />
    </ThemeProvider>
  );
}

export default App;