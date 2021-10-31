import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';
const blogs = [
    {
        title:"Eight common travel tech for save disaster",
        id:'2121',
        released:'22 Feb 2021',
        des:'we released recently eight common travel tricks and trips which can really helpful for travel',
        img:'https://intravel.sdemo.site/wp-content/uploads/2016/05/blog_intravel_image_demo_4-372x275.jpg'
    },
    {
        title:"A to z timeless travel advise and support",
        id:'2122',
        released:'13 dec 2020',
        des:'we released recently A to z timeless travel advise and support which can really helpful for travel',
        img:'https://intravel.sdemo.site/wp-content/uploads/2016/05/blog_intravel_image_demo_8-372x275.jpg'
    },
    {
        title:"Tips for traveling when you are pregnant",
        id:'2123',
        released:'11 sep 2021',
        des:'we released recently Tips for traveling when you are pregnant which can really helpful for travel',
        img:'https://intravel.sdemo.site/wp-content/uploads/2016/05/blog_intravel_image_demo_2-372x275.jpg'
    },
]
const Blogs = () => {
    return (
        <div>
            <div className='text-center my-5'>
                <h2 className="text-warning">Travel guide and tips</h2>
                <p>Read our travel guide and for safe travel  and explore <br /> the world which ever way you want</p>
            </div>
           <Container>
           <Row lg={3} xs={1} sm={3}>
                {
                   blogs.map(blog=> <Blog key={blog.id} blog={blog}></Blog> )     
                }
            </Row>
           </Container>
        </div>
    );
};

export default Blogs;