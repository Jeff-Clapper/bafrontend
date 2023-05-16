import BodyCompImg from "./bodyCompImg"
import styles from "./bodyComp.module.css"
import ContactUs from "./contactUs";

const BodyComp = (props) => {
    let hasFrontDecal = props.hasOwnProperty('decal') && props.decalPlacement=='front';
    let hasBackDecal = props.hasOwnProperty('decal') && props.decalPlacement=='back';
    let isContactBlock = false;
    if (props.style=="contact"){
        isContactBlock = true;
    }


    return ( 
        <div className={ styles.bodyCompBlock }>
            { hasFrontDecal ? <BodyCompImg decal={ props.decal } decalPlacement={ props.decalPlacement } /> : false }
            <div className={ props.style }>
                <h3 className={ styles.title }>{ props.bodyTitle }</h3>
                <p className={ styles.data } >{ props.bodyText }</p>
                { isContactBlock ? <ContactUs questionaireSetter = {props.questionaireSetter}/> : false }
            </div>
            { hasBackDecal ? <BodyCompImg decal={ props.decal } /> : false }
        </div>
    )}

export default BodyComp