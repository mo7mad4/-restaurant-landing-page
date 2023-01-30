import React from 'react'
import Container from '../../components/Container';
import GridContant from '../../components/GridContant';
import KitchenCard from './KitchenCard';
import './style.css'
import image1 from '../../assets/images/StraightFromKitchen/card1.png';
import image2 from '../../assets/images/StraightFromKitchen/card2.png';
import image3 from '../../assets/images/StraightFromKitchen/card3.png';
import image4 from '../../assets/images/StraightFromKitchen/card4.png';
import image5 from '../../assets/images/StraightFromKitchen/card5.png';
import image6 from '../../assets/images/StraightFromKitchen/card6.png';
import image7 from '../../assets/images/StraightFromKitchen/card7.png';
import image8 from '../../assets/images/StraightFromKitchen/card8.png';
import image9 from '../../assets/images/StraightFromKitchen/card9.png';
import image10 from '../../assets/images/StraightFromKitchen/card10.png';
import image11 from '../../assets/images/StraightFromKitchen/card11.png';
import image12 from '../../assets/images/StraightFromKitchen/card12.png';

const Kitchen = () => {
    return (
        <div className="kitchen">
            <GridContant
                title="Straight From Kitchen"
                subTitle="Our Menu"
                isCentered
            />
            <Container>
                <div className="kitchenContent">

                    <KitchenCard
                        img={image1}
                        title="Lorem ipsum dolor sit amet"
                        subTitle="Lorem ipsum dolor sit amet"
                        price="Rs 222"
                    />
                    <KitchenCard
                        img={image2}
                        title="Phasellus convallis maximus"
                        subTitle="Lorem ipsum dolor sit amet"
                        price="Rs 148"
                    />
                    <KitchenCard
                        img={image3}
                        title="Vivamus sodales augue vita"
                        subTitle="Lorem ipsum dolor sit amet"
                        price="Rs 590"
                    />
                    <KitchenCard
                        img={image4}
                        title="Vestibulum est turpis"
                        subTitle="Lorem ipsum dolor sit amet"
                        price="Rs 135"
                    />
                    <KitchenCard
                        img={image5}
                        title="Pellentesque semper semper"
                        subTitle="Lorem ipsum dolor sit amet"
                        price="Rs 130"
                    />
                    <KitchenCard
                        img={image6}
                        title="Vivamus sodales augue vita"
                        subTitle="Lorem ipsum dolor sit amet"
                        price="Rs 590"
                    />
                    <KitchenCard
                        img={image7}
                        title="Vestibulum est turpis"
                        subTitle="Lorem ipsum dolor sit amet"
                        price="Rs 135"
                    />
                    <KitchenCard
                        img={image8}
                        title="Lorem ipsum dolor sit amet"
                        subTitle="Lorem ipsum dolor sit amet"
                        price="Rs 222"
                    />
                    <KitchenCard
                        img={image9}
                        title="Phasellus convallis maximus"
                        subTitle="Lorem ipsum dolor sit amet"
                        price="Rs 148"
                    />
                    <KitchenCard
                        img={image10}
                        title="Nullam elementum magna"
                        subTitle="Lorem ipsum dolor sit amet"
                        price="Rs 200"
                    />
                    <KitchenCard
                        img={image11}
                        title="Nullam elementum magna"
                        subTitle="Lorem ipsum dolor sit amet"
                        price="Rs 200"
                    />
                    <KitchenCard
                        img={image12}
                        title="Pellentesque semper semper"
                        subTitle="Lorem ipsum dolor sit amet"
                        price="Rs 130"
                    />
                </div>
            </Container>
        </div>
    )
}

export default Kitchen;
