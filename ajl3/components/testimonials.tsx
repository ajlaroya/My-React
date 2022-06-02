import React from 'react'
import Carousel from './carousel'
import CarouselItem from './carousel-item'
import Review from './review'

const Testimonials: React.FC = () => (
    <Carousel className="bg-black text-white py-10 lg:py-20">
        <CarouselItem index={0}>
            <Review by="Peter (friend)">My mate Arthur is a very talented and creative individual with a passion for building beautiful web applications!</Review>
        </CarouselItem>
        <CarouselItem index={1}>
            <Review by="David (friend)">Arthur knows his stuff! He made a quality website that follows my specifications deeply</Review>
        </CarouselItem>
    </Carousel>
)

export default Testimonials