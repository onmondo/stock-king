import React from "react";

export function OrderStatus(props: { isTargetMet: boolean }) {
    const { isTargetMet } = props
    return (
        <>
            {(isTargetMet) ? <aside>Target met</aside> : <aside>Target not yet met</aside>}
        </>
    )
}