import React from 'react'
import { Carousel } from 'react-bootstrap'

const Banner = () => {
  return (
    <Carousel className='h-50'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/08/23163109/Course-after-MBA.png"
      alt="First slide"
      style={{height:'35rem'}}
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/01/online-course-main-800x549.png"
      alt="Second slide"
      style={{height:'35rem'}}
    />
  </Carousel.Item>
  <Carousel.Item className='relative'>
    <img
      className="d-block w-100"
      src="https://scholarship-positions.com/wp-content/uploads/2020/02/Free-Online-Course-1.jpg"
      alt="Third slide"
      style={{height:'35rem'}}
    />
  </Carousel.Item>
</Carousel>
  )
}

export default Banner