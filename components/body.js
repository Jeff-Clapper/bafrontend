import styles from "./body.module.css"
import BodyComp from "./bodyComp"


const Body = (props) => {
    let width = 600;

    if (props.screenSize){
        width = props.screenSize.width;
    }

    return (
        <div id={ styles.base } className={styles.baseColor}>
            <div className={ styles.bodyContainer }>
                <BodyComp style="original" width={ width } decal="./diego-ph-fIq0tET6llw-unsplash.jpg" decalPlacement="front" bodyTitle="Who We Serve" bodyText="Your business is everything. You've identified a gap in the market or a service you can provide the world to make it better. You've built it up to where it is today and you are looking to expand. But as you expand, you notice that managing the technical side can be difficult, time-consuming, or just plain tedious. We are here to help. Allow us to assit you with the boring stuff so it can free up bandwith for you and your company to focus on what's truly important." />
                <BodyComp style="original" width={ width } decal="./holly-mindrup-j7RQSDAhpYI-unsplash.jpg" decalPlacement="back" bodyTitle="Who We Are" bodyText="We are a veteren owned and operated company. As any veteren will tell you, we have been tasked with missions that require equipment and skills we may not have. As such, we have developed a unique ability to problem solve and adapt to almost impossible situations. Combine that with an almost manic obsession with mission success and we have created a company ready to assist you with any problem you may face." />
                <BodyComp style="services" width={ width } bodyTitle="Services" bodyText="More to Come" />
                <BodyComp style="contact" width={ width } bodyTitle="Ready to Start?" questionaireSetter = {props.questionaireSetter} bodyText="We would love an opportunity to get to know more about you and your company. Select the 'Contact Us' button below, fill out the form, and we will set up a time to meet with you and your team!" />
            </div>
        </div>

    )
};

export default Body