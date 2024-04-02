import './GamingLibrary.css';
import SectionHeader from '../Comp/SectionHeader';
import SectionWrapper from '../Comp/SectionWrapper';
import { Fragment } from 'react';
import GamingLibraryData from '../../Data/GamingLibraryData';
import Glcard from '../GamingLibraryCard/GLcard';
function GamingLibrary() {
    const cardsLibrary = GamingLibraryData.map(card => {
        return <Glcard key={card.id} img={card.img} title={card.title}  category={card.category} hours_played={card.hours_played} data_added={card.data_added} currently={card.currently}/>
    })
return (
    <Fragment>
            <SectionWrapper>
                <SectionHeader>Gaming Library</SectionHeader>
                <div className='gaming-library-cards'>
                    {cardsLibrary}
                </div>
            </SectionWrapper>
        </Fragment>
)
}

export default GamingLibrary
