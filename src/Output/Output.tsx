import style from './Output.module.css'

type OutputType = {
    counter: number
    styles: string
    show: boolean
    isValid: boolean
}

const Output = (props: OutputType) => {

    return (

        <div className={style.Output}>
            <p className={props.styles}>
                {props.show
                    ? props.counter
                    : <p>{props.isValid ? "enter values and press 'set'" : "Incorrect value!"}</p>}
            </p>
        </div>
    )


}

export default Output;