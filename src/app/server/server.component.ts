import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles: [`
        .created {
            font: italic 1em "Open Sans", sans-serif;
        }
    `]
})
export class ServerComponent{
    public  allowServer: boolean = false;
    public  serverId: string = 'default';
    public  servers = []; 
    private serverStatus: string = 'Online';
    public  serverCreationStatus: string = 'No additional server created';
    public  serverCreated: boolean = false;

    constructor(){
        setTimeout(()=>{
            this.allowServer = true;
        }, 2000)
    }

    onCreateServer(){
        this.serverCreated = true;
        this.servers.push(this.serverId);
        return this.serverCreationStatus = "New Server Created with ID " + this.servers;
    }

    onUpdateServer(event: Event){
        console.log(event);
        return this.serverId = (<HTMLInputElement>event.target).value; //We have to explicitly mention the value is fetched from HTML Input and typecast
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverCreated === true ? 'green' : 'red'
    }
}