class Turma {
    
    constructor(codigo, nota) {
        this._codigo = codigo,
        this._nota = nota;
    }

    private function getCodigo () {return this._codigo;}

    private function getNota () {return this._nota;}

    private function setCodigo (codigo) {this._codigo = codigo;}
    
    private function setNota (nota) {this._nota = nota;}

}

let turma = new Turma("031", "8.5")

console.log("Código",turma._codigo,"- Nota:",turma._nota)

export {Turma}