// import { useTheme } from "@mui/system";
import * as React from 'react';
import { Box, Grid } from '@mui/material';


import {
  TestimonialImage,
  TestimonialBox,
  UserBox,
  UserTestimonial,
  UserName,
  UserRating,
  TestimonialContainer,
  TestimonialGridContainer,
  TestimonialItem
} from "../../styles/TestimonialStyles";

const reviews = [
  {
    "image": "./images/testimony-2.png",
    "name": "Paco Fernández",
    "rating": 4.2,
    "review": `Llevo bastantes años usando la App y estoy más que encantada. Mucha personalización a la hora de organizar tus movimientos y controlar tus gastos.`
  },
  {
    "image": "./images/testimony-2.png",
    "name": "Juanita Valderrama",
    "rating": 4.5,
    "review": `Llevo bastantes años usando la App y estoy más que encantada. Mucha personalización a la hora de organizar tus movimientos y controlar tus gastos.`
  },
  {
    "image": "./images/testimony-2.png",
    "name": "Neil Young",
    "rating": 5,
    "review": `Llevo bastantes años usando la App y estoy más que encantada. Mucha personalización a la hora de organizar tus movimientos y controlar tus gastos.`
  },
];


function CustomerTestimonials() {
  // const theme = useTheme();
  return (
    <TestimonialContainer sx={{ flexGrow: 1 }}>
      <TestimonialGridContainer container spacing={7}>
        {reviews.map((review) => (
          <Grid item md={9} lg={3}>
            <TestimonialItem elevation={3}>
              <TestimonialBox>
                <UserBox>
                  <Box key={review.name}>
                    <TestimonialImage src={`${review.image}`} />
                  </Box>
                  <Box>
                    <UserName component="h3">{review.name}</UserName>
                    <UserRating name="half-rating-read" value={review.rating} defaultValue={2.5} precision={0.5} readOnly />
                  </Box>
                </UserBox>
                <Box>
                  <UserTestimonial>“{review.review}”</UserTestimonial>
                </Box>
              </TestimonialBox>
            </TestimonialItem>
          </Grid>))};
      </TestimonialGridContainer>
    </TestimonialContainer>
  );
}

export default CustomerTestimonials;