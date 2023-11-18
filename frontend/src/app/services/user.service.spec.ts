import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { of } from 'rxjs';
import { User } from '../shared/models/user';

describe('UserService', () => {
  let service: UserService;
  let httpClient: HttpClient;
  let toastrService: ToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [UserService, ToastrService],
    });
    service = TestBed.inject(UserService);
    httpClient = TestBed.inject(HttpClient);
    toastrService = TestBed.inject(ToastrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call HttpClient.post when login is called', () => {
    const userLogin: IUserLogin = {
      email: 'testuser',
      password: 'testpassword',
    };

    const postSpy = spyOn(httpClient, 'post').and.returnValue(of());

    service.login(userLogin).subscribe(() => {
      expect(postSpy).toHaveBeenCalledOnceWith(jasmine.any(String), userLogin);
    });
  });

  it('should update userSubject and display success message on successful login', () => {
    const userLogin: IUserLogin = {
      email: 'testuser',
      password: 'testpassword',
    };
    const mockUser: Partial<User> = { id: '1', name: 'Jane Smith' };

    const nextSpy = spyOn(service['userSubject'], 'next');

    const successSpy = spyOn(toastrService, 'success');

    spyOn(httpClient, 'post').and.returnValue(of(mockUser));

    service.login(userLogin).subscribe(() => {
      expect(nextSpy).toHaveBeenCalledWith(mockUser as User);

      expect(successSpy).toHaveBeenCalledWith(
        `Welcome to Foodmine ${mockUser.name}`,
        'Login Successful'
      );
    });
  });
});
