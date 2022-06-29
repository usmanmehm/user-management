import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

//HERE IS services is imported
import { UserListService } from '@core/services/auth';
import { SnackMessageService } from '@core/services/notifcation';
//HERE IS models imported
import { PROFILE } from '@models/auth';
import { UserModal } from './components';
//HERE IS Component
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList!: PROFILE[]; //HERE IS an array users

  //HERE IS inject the dependencies into component class
  constructor(
    private userListService: UserListService,
    private dialog: MatDialog,
    private messageService: SnackMessageService
  ) {}
//HERE IS The async pipe subscribes to an Observable or Promise and returns the latest value it has emitted AND await to call a function that return a promise.
  async ngOnInit() {
    this.userList = await this.userListService.getAllUsers();
  }
  //HERE IS Function about the create user
  async createNewUser() {
    try {
      const { success, userData } = await this.openUserModal();
      if (success) {
        this.userList.push(userData);
      }
    } catch (error: any) {
      this.messageService.show({
        message: error?.message || 'An error occoured when creating new user',
      });
    }
  }

  //HERE IS Function about the update user
  async updateUser(user: PROFILE) {
    try {
      const { success, userData } = await this.openUserModal(user);
      if (success) {
        const userIndex = this.userList.findIndex(
          (usr) => usr?.id === user?.id
        );
        if (userIndex >= 0) {
          this.userList[userIndex] = userData;
          this.messageService.show({
            message: `User (${userData?.fullName}) has been updated successfully`,
            duration: 4000,
          });
        }
      }
    } catch (error: any) {
      this.messageService.show({
        message: error?.message || 'An error occoured when updating  user',
      });
    }
  }
    //HERE IS Function about the delete user
  async deleteUser(userData: PROFILE) {
    const { success } = await this.userListService.deleteUser(userData?.id);
    if (success) {
      const userIndex = this.userList.findIndex(
        (usr) => usr.id === userData?.id
      );
      if (userIndex >= 0) {
        this.userList.splice(userIndex, 1);
        this.messageService.show({
          message: `User (${userData?.fullName}) has been removed successfully`,
        });
      }
    }
  }
  // OPEN MODAL WITH SOME CONFIGRATION and open userlist
  private async openUserModal(user?: PROFILE) {
    const userDialog = this.dialog.open(UserModal, {
      width: '450px',
      maxWidth: '100%',
      data: user,
      disableClose: true,
    });
    return await userDialog.afterClosed().toPromise();
  }
}
