import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, CardActions, CardContent, Typography, Grid, Container } from '@mui/material';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
        Blog Dashboard
      </Typography>
      <Grid container spacing={3}>
        {data.map((post) => (
            <Grid item xs={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  Post ID: {post.id}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.body}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;