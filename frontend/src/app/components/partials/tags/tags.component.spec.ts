import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsComponent } from './tags.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TagsComponent', () => {
  let component: TagsComponent;
  let fixture: ComponentFixture<TagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagsComponent],
      imports: [AppRoutingModule, HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(TagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
