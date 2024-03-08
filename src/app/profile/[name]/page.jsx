"use client"
import React from 'react'

const persons = {
    obed: [
        {
            id: 1,
            description: "Obed is a sofware developer , lorem lorem lorem lorem"
        }
    ],
    raph: [
        {
            id: 2,
            description: "raph is a WTF , lorem lorem lorem lorem"
        },
        {
            desc2:"Raph is still Wtf"
        }
    ],
    tunde: [
        {
            id: 11,
            description: "tunde is a seasoned dev, lorem lorem lorem lorem"
        }
    ],
    vic: [
        {
            id: 21,
            description: "vic is a seasoned dev, lorem lorem lorem lorem"
        }
    ],
}



export default function Name({ params }) {
    // desstructure params.name and store the result in a variable
let personName=params.name
console.log(personName)

// let datas=persons['tunde'] which is still the same as datas=person.params.name
let datas=persons[personName]
    console.log(params)
    return (
        <div>
            <h1>this is the profile  page of {personName}</h1>
        </div>
    )
}
