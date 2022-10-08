import style from './Output.module.css'

type OutputType = {
    counter: number,
    styles: string
}

const Output = (props: OutputType) => {
    return (
        <div className={style.Output}>
            <p className={props.styles}>{props.counter}</p>
        </div>
    )
}

export default Output;