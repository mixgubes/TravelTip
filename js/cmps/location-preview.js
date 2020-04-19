
export class LocationPreview {    
    constructor(id, info, lan, lat, onCopyLocation) {
        this.table;
        this.id = id;
        this.info = info;
        this.lan = lan;
        this.lat = lat;
        this.onCopyLocation = onCopyLocation;
    }    
    render() {
        var elLocation = document.createElement('tr');
        var elId = document.createElement('td')
        elId.innerText = this.id;
        var elInfo = document.createElement('td')
        elInfo.innerText = this.info;
        var elBtnDelete = document.createElement('button')
        elBtnDelete.innerText = 'Delete';
        var elBtnUpdate = document.createElement('button')
        elBtnUpdate.innerText = 'Update';
        
        elLocation.appendChild(elId);
        elLocation.appendChild(elInfo);
        elLocation.appendChild(elBtnDelete);
        elLocation.appendChild(elBtnUpdate);
        // console.log(elLocation);
        this.table = elLocation;
        // document.querySelector('table').appendChild(elLocation);
    }
    toString() {
        return `${this.table}`;
    }
}