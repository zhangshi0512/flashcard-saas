"use client";

import { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

export default function Generate() {
  const [text, setText] = useState("");
  const [flashcards, setFlashcards] = useState([]);

  const handleSubmit = async () => {
    if (!text.trim()) {
      alert("Please enter some text to generate flashcards.");
      return;
    }

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        body: text,
      });

      if (!response.ok) {
        throw new Error("Failed to generate flashcards");
      }

      const data = await response.json();
      setFlashcards(data);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Generate Flashcards
      </Typography>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        label="Enter text"
        fullWidth
        multiline
        rows={4}
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Generate Flashcards
      </Button>
      <Box sx={{ mt: 4 }}>
        {flashcards.length > 0 && (
          <Box>
            {flashcards.map((flashcard, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="body1">{flashcard.front}</Typography>
                <Typography variant="body2">{flashcard.back}</Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Container>
  );
}
