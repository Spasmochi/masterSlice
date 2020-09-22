import { DocumentTypeListBuilder } from '@sanity/structure/lib/DocumentTypeList';
import React from 'react'
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";

function makePatch(value) {
    return PatchEvent.from(value === "" ? unset() : set(Number(value)));
}

const format = Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD" }).format;

export default function PriceAdd({type, value, onChange, inputComponent}) {
    return (
        <div>
            <h2>{type.title}: {value ? format(value / 100) : ""}</h2>
            <p>{type.description}</p>
            <input
                type={type.name}
                value={value}
                onChange={(event) => onChange(makePatch(event.target.value))} ref={inputComponent} />
        </div>
    )
}


PriceAdd.focus = function () {
    this._inputElement.focus();
}