import { GridContainer } from 'components/LanguageCards/LanguageCards.elements';
import Data from 'components/LanguageCards/Data';
import Card from 'components/LanguageCards/Card';

const LanguageCards = () => {

    return (
        <GridContainer>

            {
                (Data.length > 0)

                    ? Data.map(function (cardObj) {

                        const { name, header, description, price } = cardObj;

                        return <Card key={name} name={name} header={header} description={description} price={price} />
                    })

                    : <h1>Language cards data not available</h1>
            }

        </GridContainer>
    )
}

export default LanguageCards;