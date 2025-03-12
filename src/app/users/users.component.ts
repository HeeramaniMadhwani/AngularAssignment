import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common'; 

@Component({
  standalone: true,
  selector: 'app-users',
  imports: [FormsModule, NgFor ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
    users: any[] = [];
    filteredUsers: any[] = [];
    searchTerm: string = '';

     constructor(private userService: UserService) {}

     ngOnInit(): void {
       this.userService.getUseers().subscribe((data:any) => {
         this.users = data.users;
         this.filteredUsers = [...this.users];
       },
       (error: any) => {
         console.error('Error fetching users:', error);
       }
      );
     }

     filterUsers(){
       this.filteredUsers = this.users.filter(user => user.firstName.toLowerCase().includes(this.searchTerm.toLowerCase())
             || user.lastName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
     }
}
