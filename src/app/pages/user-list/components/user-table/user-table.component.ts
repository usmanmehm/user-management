import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//HERE IS SERVICES
import { GlobalDataService } from '@core/services/common';
//HERE IS MODELS
import { PROFILE } from '@models/auth';
//HERE IS ENV
import { environment } from '@environments/environment';
@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  private readonly userRoles = environment?.userRoles;
  @Input() userList!: PROFILE[];  //HERE IS Input that property will recieve from parrent  
  @Output() update = new EventEmitter<PROFILE>();  //HERE IS Output update and delete from child to parrent
  @Output() delete = new EventEmitter<PROFILE>();

  constructor(private globalData: GlobalDataService) {}

  ngOnInit(): void {}
  visualizeUserRole(roleIndex: number | undefined): string {
    return this.userRoles[roleIndex ? roleIndex : 0];
  }
  //HERE IS AVOID TO DELETE CURRENT USER
  isOwner(user: PROFILE): boolean {
    return this.globalData.currentUser$.getValue()?.id === user?.id;
  }
  //HERE IS FOR LOOP PERFORMANCE
  trackByFn(index: number, user: PROFILE): number {
    return user?.id;
  }
}
