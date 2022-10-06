import style from './Output.module.css'

type OutputType = {
    maxValueInp: number,
    startValueInp: number,
    counter: number,
    isValid: boolean,
}

const Output = (props: OutputType) => {
    return (
        <div className={style.Output}>
            <p className={props.startValueInp >= props.maxValueInp || props.startValueInp < 0 || props.counter >= props.maxValueInp ? style.maxValue : style.minValue}>
                {props.counter}
            </p>

        </div>
    )
}

export default Output;