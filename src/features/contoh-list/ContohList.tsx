interface Biodata{
    name: string
    age: number
}


export default function ContohList(){

    const biodata : Biodata[] = [
        {
            name:"Adi",
            age: 20
        },
        {
            name:"John",
            age: 21
        },
        {
            name:"Arnold",
            age: 26
        },
        {
            name:"Sarah",
            age: 22
        }
    ]

    return (
        <>
        {
            biodata.map((item, index) =>(
                <li key={index} >{item.name} - {item.age}</li>
            ))
        }
        </>
    )
}