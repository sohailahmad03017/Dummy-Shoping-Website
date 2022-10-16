import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Container } from '@mui/system';
import { Grid, Typography } from '@mui/material';

export default function News() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('https://newsapi.org/v2/everything?q=Apple&from=2022-10-16&sortBy=popularity&apiKey=7aeb70281a244c93a27ac1b56e31dc87')
            .then((success) => setNews(success.data.articles))
            .catch((error) => console.log(error));
    }, []);

   
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {news.map((data, index) => {
                    return (
                        <Container maxWidth='lg' key={index} style={{ margin: '20px 0px', borderRadius: '20px', padding: '40px', boxShadow: '4px 4px 10px gray', width:'90%', textAlign:'justify' }}>

                            <Grid container spacing={4} style={{display:'flex', alignItems:'center', boxSizing:'border-box'}}>

                                <Grid item lg={6} sm={6} xs={12} style={{}}>

                                    <Typography variant='h5' style={{ margin: '15px 0', width:'100%' }}>{data.source.name}</Typography>

                                    <img src={data.urlToImage} alt="" width='100%' style={{borderRadius:'20px'}}/>

                                </Grid>

                                <Grid item lg={6} sm={6} xs={12} style={{}}>

                                    <Typography variant='h6' style={{ margin: '10px 0', fontWeight:'600' }}>{data.title}</Typography>

                                    <Typography variant='p' style={{ margin: '10px 0' }}><b>Author: </b>{data.author}</Typography>


                                    <p style={{ margin: '15px 0px' }}><b>Publish At:</b> {data.publishedAt}</p>


                                    <Typography variant='p' >{data.content}</Typography>

                                    <p style={{ margin: '15px 0px' }}><b>Description: </b> {data.description}</p>

                                    {/* <p style= {{ color: 'blue' }}>{data.url}</p> */}




                                </Grid>


                            </Grid>
                        </Container>
                    )
                })}
            </div>
        </>
    )
}
