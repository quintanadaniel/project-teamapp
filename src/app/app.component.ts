import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage: string = "";
  numberOfTeam: number | "" = "";
  teams:string[][] = [];

  onInput(member: string) {
    this.newMemberName = member;
  }

  onInputNumberTeam(value: string) {
    this.numberOfTeam = Number(value)
  }

  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = "Name can't be empty";
      return;
    }
    
    this.errorMessage = "";
    this.members.push(this.newMemberName);
    this.newMemberName = "";
  }

  generateTeams() {
    if (!this.numberOfTeam || this.numberOfTeam <= 0 ) {
      this.errorMessage = "The number of team can't be less or iqual to zero (0)"
      return;
    }

    const allMembers = [...this.members]

    this.errorMessage = "";
    for(let i = 0; i < this.numberOfTeam; i++) {
      const randomIndex = Math.floor(Math.random() * allMembers.length);
      const member = allMembers.splice(randomIndex, 1)[0]

      if(this.teams[i]) {
        this.teams[i].push(member);
      }else{
        this.teams[i] = [member];
      }
    }
    console.log(this.teams);
  }
}
