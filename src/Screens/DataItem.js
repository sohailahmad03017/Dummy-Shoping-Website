import { Button, Grid, Container, Box, Typography, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function DataItem() {

  const location = useLocation();
  const [data, setData] = useState('');
  const [value, setValue] = useState(4)

  useEffect(() => {
    setData(location.state);
  }, [])

  return (
    <>

      <Container maxWidth='lg'>

        <Box style={{ marginTop: '20px' }}>
          <Grid container spacing={2}>

            <Grid item md={6} sm={6} xs={12} style={{ display: 'flex', justifyContent: 'center' }} >
              <img src={data.image} alt="" width='75%' />
            </Grid>

            <Grid item md={6} sm={6} xs={12} >

              <Box style={{ border: '1px solid lightgray', padding: '10px', margin:'20px 0px', borderRadius:'10px' }}>

                <Typography variant='h2' style={{ marginBottom: '20px' }}>Rs. {data.price}</Typography>

                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                /> 

                <Typography variant='h5' style={{ margin: '15px 0px' }}>{data.title}</Typography>
                
                <Box style={{textAlign:'center'}}>
                  <Button variant='contained' style={{ margin: '15px 0px'}}>Buy Now</Button>
                </Box>

              </Box>


              <Box style={{ border: '1px solid lightgray', padding: '10px', borderRadius:'10px' }}>


                <Typography variant='h5' style={{ marginBottom: '10px' }}>Description: </Typography>
                <Typography variant='h6' style={{ marginBottom: '10px' }}>{data.description}</Typography>
                <Typography variant='h6' style={{ textAlign: 'center', color: 'gray' }}>{data.category}</Typography>
              </Box>

            </Grid>

          </Grid>
        </Box>

      </Container>

      {/* <Container maxWidth='lg'  >
      <Box style={{marginTop:'10px'}}>
        <Grid container spacing={3} >

          <Grid item lg={6} md={6} xs={12} >
            <p style={{background:'blue'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quae, corporis earum eligendi eius facere provident ut sit voluptatem alias perferendis consectetur delectus nostrum eaque explicabo velit illo architecto aliquid officia sunt eum tempore. Ipsa aut assumenda veritatis, ratione est rerum vel itaque dolor exercitationem totam deserunt officiis, molestias recusandae qui delectus quo maiores quas possimus nobis suscipit nihil, velit facilis officia ipsam. Dignissimos quis quo fugiat et nemo illum illo eaque praesentium repellat optio delectus voluptas reiciendis magni aut labore, ex, laborum id! Sit, sunt ipsa iure assumenda deserunt voluptatem accusantium accusamus fuga modi, porro odit magni doloribus illo.
            </p>
          </Grid>

          <Grid item lg={6} md={6} >
          <p style={{background:'red'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quae, corporis earum eligendi eius facere provident ut sit voluptatem alias perferendis consectetur delectus nostrum eaque explicabo velit illo architecto aliquid officia sunt eum tempore. Ipsa aut assumenda veritatis, ratione est rerum vel itaque dolor exercitationem totam deserunt officiis, molestias recusandae qui delectus quo maiores quas possimus nobis suscipit nihil, velit facilis officia ipsam. Dignissimos quis quo fugiat et nemo illum illo eaque praesentium repellat optio delectus voluptas reiciendis magni aut labore, ex, laborum id! Sit, sunt ipsa iure assumenda deserunt voluptatem accusantium accusamus fuga modi, porro odit magni doloribus illo.
            </p>
            <Button variant='contained'>Data</Button>

          </Grid>

        </Grid>
      </Box>

      </Container> */}
      <br />



    </>

  )
}
