import BodyCompImg from "./bodyCompImg"
import styles1 from "./bodyComp.module.css"
import styles2 from "./bodyComp.cell.module.css"
import ContactUs from "./contactUs";

const BodyComp = (props) => {
    let hasFrontDecal = props.hasOwnProperty('decal') && props.decalPlacement=='front' && props.width > 600;
    let hasBackDecal = props.hasOwnProperty('decal') && (props.decalPlacement=='back' || props.width <= 600);
    let isContactBlock = props.style=="contact";
    let styles = styles1;
    
    if (props.width < 600) {
        styles = styles2
    };

    return ( 
        <div className={ styles.bodyCompBlock }>
            { hasFrontDecal ? <BodyCompImg decal={ props.decal } decalPlacement={ props.decalPlacement } /> : false }
            <div className={ props.style }>
                <h3 className={ styles.title }>{ props.bodyTitle }</h3>
                <p className={ styles.data } >{ props.bodyText }</p>
                { isContactBlock ? <ContactUs questionaireSetter = {props.questionaireSetter}/> : false }
            </div>
            { hasBackDecal ? <BodyCompImg decal={ props.decal } width={ props.width }/> : false }
        </div>
    )}

export default BodyComp