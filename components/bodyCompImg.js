import styles from "./bodyCompImg.module.css"

const BodyCompImg = (props) => {
    return (
        <div className={ styles.image }>
            <img id={ `${ props.width < 600 ? styles.pictureSmallScreen : styles.picture }` } src={props.decal}/>
        </div>
    )
}

export default BodyCompImg 