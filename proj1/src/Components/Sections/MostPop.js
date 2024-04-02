import './MostPop.css';
import Card from '../Card/Card';
import SectionHeader from '../Comp/SectionHeader';
import SectionWrapper from '../Comp/SectionWrapper';
import MostPopData from '../../Data/MostPopData';
import { Fragment } from 'react';

const MostPop = () => {
    const cards = MostPopData.map(card => {
        return <Card key={card.id} img={card.img} title={card.title} category={card.category} rate={card.rate} download={card.download}/>
    })

    return (
        <Fragment>
            <SectionWrapper>
                <SectionHeader>Most Popular</SectionHeader>
                <div className='most-pop-items'>
                    {cards}
                </div>
            </SectionWrapper>
        </Fragment>
    )
}
export default MostPop;