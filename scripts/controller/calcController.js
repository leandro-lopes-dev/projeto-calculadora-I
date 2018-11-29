// Classe é um conjunto de atributos e métodos.
class calcController{ // criando um objeto, inicia pela classe que vai conter varáveis (atributos) e funções (métodos)
                        

    constructor(){ // metodo (função)
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora"); // this faz referência do próprio objeto que foi instaciado, referencia atributos e métodos
        this._currentDate; // convencionou-se que o uso do underline é privado
        this.initialize();
        this.initButtonsEvents();
        // atributo é similar a uma variável mas tem mais recurso

    }

    // metodo principal do projeto
    initialize(){

        this.setDisplayDateTime();

        setInterval(() => {
        this.setDisplayDateTime();    
        }, 1000 );
    }

    // função para multimplos eventos
    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });

    }

    

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g"); // variável buttons

        buttons.forEach((btn, index) => {

            this.addEventListenerAll(btn, "click drag" , e => {

                console.log(btn.className.baseVal.replace("btn - ",""));

            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer";
            });

        });
        
    }

    setDisplayDateTime(){
            this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
                day: "2-digit",
                month: "long",
                year: "numeric",
            })
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
       this._dateEl.innerHTML = value;
    }

    // getters e setters permitem definir como acessar os valores
    get displayCalc(){
        return this._displayCalcEl.innerHTML;    // get devolve a informação por isto o uso do return
    }

    set displayCalc(value){         // para mudar o valor usa-se o set
        this._displayCalcEl.innerHTML = value;
    }

    
    get currentDate(){
        return new Date; // Date é uma classe nativa do JS para Datas
    }

    set currentDate(value){
        this._currentDate = value;
    }

}
