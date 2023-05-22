import BodyCompImg from "./bodyCompImg"
import styles from "./bodyComp.module.css"
import ContactUs from "./contactUs";

const BodyComp = ( props ) => {
    let hasFrontDecal = props.hasOwnProperty('decal') && props.decalPlacement=='front' && props.width > 600;
    let hasBackDecal = props.hasOwnProperty('decal') && (props.decalPlacement=='back' || props.width <= 600);
    let isContactBlock = props.style=="contact";

    return ( 
        <div className={ `${props.width < 600 ? styles.bodyCompBlockSmallScreen : styles.bodyCompBlock }` }>
            { hasFrontDecal ? <BodyCompImg decal={ props.decal } /> : false }
            <div className={ props.style }>
                <h3 className={ styles.title }>{ props.bodyTitle }</h3>
                <p className={ styles.data } >{ props.bodyText }</p>
                { isContactBlock ? <ContactUs currentPageSetter = {props.currentPageSetter}/> : false }
            </div>
            { hasBackDecal ? <BodyCompImg decal={ props.decal } width={ props.width }/> : false }
        </div>
    )}

export default BodyComp