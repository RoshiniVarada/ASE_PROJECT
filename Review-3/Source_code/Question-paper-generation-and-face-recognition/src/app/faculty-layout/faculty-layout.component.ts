import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-faculty-layout',
    templateUrl: './faculty-layout.component.html',
    styleUrls: ['./faculty-layout.component.scss']
})
export class FacultyLayoutComponent implements OnInit {

    collapedSideBar: boolean;

    constructor() {}

    ngOnInit() {}

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
