import { validate } from 'bycontract';


class passagem{
    #data
    #nrvoo
    #valor

    constructor(data, nrvoo, valor){
        validate(arguments,["String","Number","Number"]);
        this.#data = data
        this.#nrvoo = nrvoo
        this.#valor = valor
    }

    get data(){
        return this.#data;
    }

    get nrvoo(){
        return this.#nrvoo;
    }

    get valor(){
        return this.#valor;
    }

    totalpagar(){
        return undefined;
    }

    quantidadeMalas(){
        return 0;
    }

    acessoPrioritario(){
        return false;
    }

    toString(){
        let str = `Data: ${this.#data}, vôo: ${this.#nrvoo}, valor: R$${this.totalpagar()}`;
        str += `Malas: ${this.quantidadeMalas()}, acesso prioritário: ${this.acessoPrioritario()?'Sim':'Não'}`;
        return str;

    }

    toJSON(){
        return{
            data: this.#data,
            nrvoo: this.#nrvoo,
            valor: this.#valor,
            totalpagar: this.totalpagar(),
            quantidadeMalas: this.quantidadeMalas(),
            acessoprioritario: this.acessoPrioritario()
        };
    }
}

class economica extends passagem{

    constructor(data, nrvoo, valor){
        super(data, nrvoo, valor); 
    }

    totalpagar(){
        let custoOperacional = this.valor * 0.10;
        return this.valor + custoOperacional;
    }

    toString(){
        return `Econômica: `+super.toString();
    }
}

class executiva extends passagem{

    constructor(data, nrvoo, valor){
        super(data, nrvoo, valor); 
    }

    totalpagar(){
        let custoOperacional = this.valor * 0.30;
        return this.valor + custoOperacional;
    }

    quantidadeMalas(){
        return 1;
    }

    toString(){
        return `Executiva: `+super.toString();
    }
}

class primeiraclasse extends passagem{

    constructor(data, nrvoo, valor){
        super(data, nrvoo, valor); 
    }

    totalpagar(){
        let custoOperacional = this.valor * 0.40;
        return this.valor + custoOperacional;
    }

    quantidadeMalas(){
        return 3;
    }

    acessoPrioritario(){
        return true;
    }

    toString(){
        return `Primeira classe: `+super.toString();
    }
}

globalThis.passagem = passagem;

function quantidadeMalas(){
    validate(passagens, "Array.<passagem>");
    let cont = 0;
    for (let p of passagens){
        cont += p.quantidadeMalas();
        }
        return cont;
    }

function qtdVIP(passagens){
    validate(passagens, "Array.<passagem>");
    let cont = 0;
    for (let p of passagens){
        if (p.acessoPrioritario() == true){
            cont++;
        }
    }
    return cont;
}

let passagens = [];
passagens.push(new economica('10/03/2023',1010,500));
passagens.push(new executiva('10/03/2023',1010,500));
passagens.push(new primeiraclasse('10/03/2023',1010,500));
passagens.push(new economica('10/03/2023',1010,500));
passagens.push(new executiva('10/03/2023',1010,500));
passagens.push(new primeiraclasse('10/03/2023',1010,500));

console.log('Malas:'+quantidadeMalas(passagens));
console.log('VIPs: '+qtdVIP(passagens));

let j = JSON.stringify(passagens, null, 2);
console.log(j);