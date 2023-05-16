import styles from "./bodyCompImg.module.css"

const BodyCompImg = (props) => {
    const decalPlacement = props.decalPlacement;
    let left = false;
    
    if (decalPlacement=='front'){
        left = true;
    }

    return (
        <div className={ styles.image }>
            <img id={styles.picture} className={left ? styles.leftRound : styles.rightRound} src={props.decal}></img>
        </div>
    )
}

export default BodyCompImg 