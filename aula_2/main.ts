// type Medication = {
//     name: string
//     price: number
// }

// const medication: Medication ={ name: "Be-ron", price: 3.99};

// console.log(medication)

interface Carro {
    name: string,
    modelo: string,
    year?: number
};

const carro :Carro = { name: "Toyota" , modelo:"AE86"};

console.log(carro)

type MetodoPagamento = "Paypal" | "MBway" 

interface Pagamento {
    valor: number,
    metodo: MetodoPagamento
    detalhes: string,
}

const pagamento : Pagamento ={ valor:12 , metodo :"MBway", detalhes: "Recibo"}

function processarPagamento (pagamento :Pagamento) : string {
    return pagamento.metodo
}

console.log("Pagamento" , pagamento )
console.log(`Foma de pagamento ${processarPagamento}`)
