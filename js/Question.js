class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createInput('Enter Correct Option No.');
      this.title = createElement('h2');
      this.question = createElement('h3');
      this.option1 = createElement('h4');
      this.option2 = createElement('h4');
      this.option3 = createElement('h4');
      this.option4 = createElement('h4');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      this.title.html("My Quiz");
      this.title.position(350, 0);
  
      this.input.position(130, 160);
      this.button.position(250, 200);

      this.question.html("Question:- What Starts and ends with the letter 'E' , but has only one letter");
      this.question.position(150,80);
      this.option1.html("1: Everyone ");
      this.option1.position(150,100);
      this.option2.html("2: Envwelope ");
      this.option2.position(150,120);
      this.option3.html("3: Estimate");
      this.option3.position(150,120);
      this.option4.html("4: Example");
  
      this.button.mousePressed(()=>{
        this.title.hide();
        this.input.hide();
        this.button.hide();
        contestant.name = this.input.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });
  
    }
  }