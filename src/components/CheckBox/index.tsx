import React from "react";

interface ICheckBox {
    labelText: string
    checkBoxHandler: (event: any) => void
    value: boolean
}
export default function CheckBox({ labelText, checkBoxHandler, value }: ICheckBox) {
    return (
        <p className="customChckBox">
            <input id="targetmet" type="checkbox" onChange={checkBoxHandler} value={`${value}`}/>
            <label htmlFor="targetmet">{labelText}</label>
        </p>
    )
}