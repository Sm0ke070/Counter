import style from './Output.module.css'

type OutputType = {
    counter: number
    styles: string
    show: boolean
    Valid: boolean
}

const Output = (props: OutputType) => {

    return (

        <div className={style.Output}>
            <p className={props.styles}>
                {props.show
                    ? props.counter
                    : <p>{props.Valid ? "Incorrect value!" : "enter values and press 'set'"}</p>}
            </p>
        </div>
    )


}

export default Output;