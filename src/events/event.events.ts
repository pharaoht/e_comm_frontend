interface EventRegistry {
    [eventName: string]: boolean
}

class Events {

    public readonly _itemToBagEvent: string

    private eventRegistry: EventRegistry;

    constructor(){
        this._itemToBagEvent = 'itemAddedToBag';
        this.eventRegistry = {};
    }

    public registerEvent(eventName: string): boolean{

        if(this.eventRegistry[eventName]){

            console.log(`${eventName} already exists`);

            return false
        }
        else {

            this.eventRegistry[eventName] = true;

            return true
        }
    }

    public createNewEvent(eventName: string, eventValue: any): CustomEvent<any> {
        
        const event = new CustomEvent(eventName, { detail: eventValue});

        return event;
    }


};

export const eventService = new Events();