class Aluno {
    
    constructor(nome, login, RA) {
        this._nome = nome,
        this._login = login,
        this._RA = RA;
    }

    public function getNome () {return this._nome;}

    public function getLogin () {return this._login;}

    public function getRA () {return this._RA;}

    public function setNome (nome) {this._nome = nome;}

    public function setLogin (login) {this._login = login;}

    public function setRA (RA) {this._RA = RA;}

 }

var aluno = new Aluno('Matheus', 'matheusp6378', 'a2410184')

console.log("Nome:",aluno._nome, "- Login:",aluno._login,"- RA:",aluno._RA)

export {Aluno}; 