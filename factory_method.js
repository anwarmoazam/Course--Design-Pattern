let Factory = function(){
    this.createEmployee = function (type){
        let employee = "";
        if(type === 'fulltime'){
            employee = new FullTime();
        } else if(type === 'parttime'){
            employee = new PartTime();
        } else if(type === 'temporary'){
            employee = new Temporary();
        } else if(type === 'contractor'){
            employee = new Contractor();
        }

        employee.type = type;

        employee.say = function(){
            console.log(this.type + ' : rate ' + this.hourly + '/hour');
        }

        return employee;
    }
}

const FullTime = function(){
    this.hourly = '₹200';
}

const PartTime = function(){
    this.hourly = '₹150';
}

const Temporary = function(){
    this.hourly = '₹120';
}

const Contractor = function(){
    this.hourly = '₹100';
}

function run(){
    let employees = [];
    let factory = new Factory();

    employees.push(factory.createEmployee('fulltime'));
    employees.push(factory.createEmployee('parttime'));
    employees.push(factory.createEmployee('temporary'));
    employees.push(factory.createEmployee('contractor'));

    for(let i=0; i<employees.length; i++){
        employees[i].say();
    }
}

run();