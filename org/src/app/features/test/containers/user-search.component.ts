import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from '../servces/test.service';

@Component({
  selector: 'app-test',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.scss',
})
export class UserSearchComponent {
  @ViewChild('textSearch') textSearchRef!: ElementRef<HTMLInputElement>;

  userList: any = [];
  userDetail: any;

  constructor(private testService: TestService) {
    this.testService.getResult().subscribe({
      next: (data) => {
        this.userList = data;
        console.log('can be put a success feedback behavior here');
      },
      error: (err) => {
        console.error(err);
        console.log('can be put a error feedback behavior here (toaster, modal, etc')
      },
    });
  }

  onSearch(search: string) {
    this.userDetail = null;
    this.testService.search(search);
  }

  openDetail(user: any) {
    this.userDetail = user;
  }

  resetFilter(searchValue: string) {
    this.onSearch('');
    this.textSearchRef.nativeElement.value = '';
  }
}
