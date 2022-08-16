import style from './Output.module.css'

type OutputType = {
    counter: number
    maxValue:number
}

const Output = (props: OutputType) => {
    return (
        <div className={style.Output}>
            <p className={props.counter === props.maxValue ? style.maxValue: style.minValue}>{props.counter}</p>
        </div>
    )
}

export default Output;