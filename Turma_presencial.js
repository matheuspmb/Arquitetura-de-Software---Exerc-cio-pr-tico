import { Turma } from "./Turma";

class Turma_presencial extends Turma{

    constructor(frequencia) {
        this._frequencia = frequencia;
    }

    private function getFrequencia () {return this._frequencia;}

    private function setFrenquencia (frequencia) {this._frequencia = frequencia;}

}