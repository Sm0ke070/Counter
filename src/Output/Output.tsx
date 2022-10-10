import style from './Output.module.css'

type OutputType = {
    counter: number,
    styles: string
    show: boolean
}

const Output = (props: OutputType) => {

    return (

        <div className={style.Output}>
            <p className={props.styles}>
                {props.show ? props.counter : "enter values and press 'set'"}
            </p>
        </div>
    )


}

export default Output;