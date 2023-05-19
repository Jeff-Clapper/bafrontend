import styles1 from "./bodyCompImg.module.css"
import styles2 from "./bodyCompImg.cell.module.css"

const BodyCompImg = (props) => {
    const decalPlacement = props.decalPlacement;
    let left = decalPlacement=='front';
    let styles = styles1;
    
    if (props.width < 600){
        styles = styles2
    }


    return (
        <div className={ styles.image }>
            <img id={styles.picture} className={left ? styles.leftRound : styles.rightRound} src={props.decal}></img>
        </div>
    )
}

export default BodyCompImg 