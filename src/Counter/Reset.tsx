import style from "./Btn.module.css"

type ResetType={
    resetOutput:()=>void;
    counter:number;
    title:string
}
const Reset=(props:ResetType)=>{
    return(
        <div className={style.btn}>
            <button className={style.IncResSetBtn} onClick={props.resetOutput} disabled={props.counter===0}>
                {props.title}
            </button>
        </div>
    )
}

export default Reset;