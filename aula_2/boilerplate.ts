type User = {
    name: string,
    email: string,
}

type Medication = {
    id : number,
    name: string,
    price: number,
    dosage: number
}

type Order = {
    id: number,
    package: Medication[],
    timestamp: number 
}

const user : User= {
    name: "Juliao",
    email: "juliao@gmail.com"
}

const medication: Medication ={
    id: 1,
    name: "be-ron",
    price: 3.99,
    dosage: 1
}

const order: Order = {
    id:1,
    package: [],
    timestamp: 22
}