import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

const AddBlog = () => {
  const [formData, setFormData] = useState({
    blogName: '',
    description: '',
    authorName: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" sx={{ mt: 4, mb: 3, fontWeight: 'bold' }}>
        Add Blog
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          p: 3,
          boxShadow: 1,
          borderRadius: 2,
          backgroundColor: 'background.paper',
        }}
      >
        <TextField
          label="Blog Name"
          name="blogName"
          value={formData.blogName}
          onChange={handleChange}
          fullWidth
          required

        />
        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          required
          multiline
          rows={4}

        />
        <TextField
          label="Author Name"
          name="authorName"
          value={formData.authorName}
          onChange={handleChange}
          fullWidth
          required

        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
        >
          Add Blog
        </Button>
      </Box>
    </Container>
  );
};

export default AddBlog;