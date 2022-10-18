console.log("Example of observer design pattern");

// it works on Pub(Publish)/Sub(Subscriber)

class YoutubeChannel{
    subscriptionArr = [];
    subscribe(subscriber){
        this.subscriptionArr.push(subscriber);
    };
    unsubscribe(subscriber){
        this.subscriptionArr = this.subscriptionArr.filter(
            (sub) => sub.id !== subscriber.id
        );
    };
    publish(msg){
        for(let subscriber of this.subscriptionArr){
            subscriber.notify(msg);
        }
    }
}


class Subscriber{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
    notify(msg){
        console.log(`Hey ${this.name} : ${msg}`);
    }
}

const user1 = new Subscriber(1,'Anwar Moazam');
const user2 = new Subscriber(2,'Sikandar Khan');
const user3 = new Subscriber(3,'Sanjay');

const channel = new YoutubeChannel();
channel.subscribe(user1);
channel.subscribe(user2);
channel.subscribe(user3);
channel.publish('Dekho video aa gaya he');
channel.unsubscribe(user1)
channel.publish('to kaisa laga video aapko?')
channel.publish('Hit Like')
