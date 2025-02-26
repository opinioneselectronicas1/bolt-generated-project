import React, { useState } from 'react';
import {
  Container,
  TextField,
  Select,
  MenuItem,
  Button,
  Typography,
  Box,
  FormControl,
  InputLabel,
} from '@mui/material';

const Home = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [language, setLanguage] = useState('en');

  const translate = async () => {
    const url = `https://hackiando.vercel.app/traductor/?input=${inputText}&lang=${language}&pass=tx3`;
    try {
      const response = await fetch(url);
      const data = await response.text();
      setTranslatedText(data);
    } catch (error) {
      console.error("Translation error:", error);
      setTranslatedText('Translation failed.');
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Modern Translator
      </Typography>
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Text to Translate"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="language-select-label">Target Language</InputLabel>
          <Select
            labelId="language-select-label"
            id="language-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            label="Target Language"
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="fr">French</MenuItem>
            <MenuItem value="de">German</MenuItem>
            <MenuItem value="es">Spanish</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button variant="contained" color="primary" onClick={translate}>
        Translate
      </Button>
      {translatedText && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            Translated Text:
          </Typography>
          <TextField
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            value={translatedText}
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
      )}
    </Container>
  );
};

export default Home;
