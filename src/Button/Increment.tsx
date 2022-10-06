import style from "./Btn.module.css"

type IncrementType = {
    counter: number;
    changeCounter: () => void;
    title: string
    maxValueInp: number
}
const Increment = (props: IncrementType) => {
    return (
        <div className={style.btn}>
            <button className={props.counter < props.maxValueInp ? style.IncResSetBtn : style.inactiveBtn}
                    onClick={props.changeCounter}>
                {props.title}
            </button>
        </div>
    )
}

export default Increment;