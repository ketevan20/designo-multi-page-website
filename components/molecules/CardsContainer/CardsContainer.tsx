import Card from '@/components/atoms/Card/Card';
import React from 'react'

type CardDetail = {
    image: string;
    title: string;
    text: string;
}

type CardsContainerProps = {
    cardDetails: CardDetail[];
}


const CardsContainer = ({ cardDetails }: CardsContainerProps) => {
    return (
        <div className='relative z-30 grid grid-cols-3 gap-7.5'>
            {
                cardDetails.map(detail => 
                    <Card image={detail.image} text={detail.text} title={detail.title}/>
                )
            }
        </div>
    )
}

export default CardsContainer