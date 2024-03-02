import React from "react";

export function OrderStatus(props: { isTargetMet: boolean }) {
    const { isTargetMet } = props
    return (
        <>
            {
                (isTargetMet) 
                ? 
                    <aside>Yes <a className="editicon" href="#"></a></aside> 
                : 
                    <aside>No <a className="editicon" href="#"></a></aside>
            }
        </>
    )
}