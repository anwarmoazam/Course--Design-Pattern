// context (person) (should hold ref to the strategy object)
// strategy (car,bus,train,swim)
// Person => car,bus,train,swim => office

// context
function JobPerson(strategy){
    this.strategy = strategy;
}

JobPerson.prototype.goToOffice = function(){
    this.strategy()
}


// Group of strategies
const trainStrategy = function(){
    console.log('Caught Train for the office');
}

const busStrategy = function(){
    console.log('Caught Bus for the office');
}

const cabStrategy = function(){
    console.log('Took Cab for the office');
}

const arr = [];
const officeViaTrain = new JobPerson(trainStrategy);
arr.push(officeViaTrain);
const officeViaBus = new JobPerson(busStrategy);
arr.push(officeViaBus);
const officeViaCab = new JobPerson(cabStrategy);
arr.push(officeViaCab);


arr.forEach(task=>task.goToOffice());