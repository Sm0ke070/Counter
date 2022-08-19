import style from "./Btn.module.css"

type ResetType = {
    resetOutput: () => void,
    counter: number,
    title: string,
    isValid: boolean,
    maxValueInp:number,
}
const Reset = (props: ResetType) => {

    return (
        <div className={style.btn}>
            <button className={props.counter <= props.maxValueInp ? style.IncResSetBtn : style.inactiveBtn}
                    onClick={props.resetOutput}
                    disabled={props.counter === 0}>
                {props.title}
            </button>
        </div>
    )
}

export default Reset;