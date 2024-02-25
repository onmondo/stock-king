import React from "react";
import EditIcon from "../../assets/EditIcon";

export function OrderStatus(props: { isTargetMet: boolean }) {
    const { isTargetMet } = props
    return (
        <>
            {
                (isTargetMet) 
                ? 
                    <aside>Yes <a className="editicon" href="#"><EditIcon color="#1a8eb0" /></a></aside> 
                : 
                    <aside>No <a className="editicon" href="#"><EditIcon color="#e7f2f2" /></a></aside>
            }
        </>
    )
}