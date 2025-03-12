import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { error } from 'console';
import { NgFor, NgIf } from '@angular/common'; 

@Component({
  selector: 'app-profile',
  imports: [NgIf ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  user:any;

  constructor(private userService: UserService){}

  ngOnInit() {
    this.userService.getProfile().subscribe((data) => {
      this.user = data;
    },
    (error) => {
      console.error('Error fetching user profile:', error);
    }   
  )
  }

}
