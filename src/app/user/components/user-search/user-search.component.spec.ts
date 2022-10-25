import {UserSearchComponent} from '@user/components/user-search/user-search.component';
import {UserSearchCriteria} from '@user/model';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';

describe('UserSearchComponent', () => {
  let testCriteria: UserSearchCriteria;
  let testQuery: string;

  beforeEach(() => {
    testCriteria = {query: 'Test me'};
    testQuery = 'Some query';
  });

  describe('(class tests)', () => {
    it('populates input criteria to form control', () => {
      // given
      const component = new UserSearchComponent();
      // when
      component.criteria = testCriteria;
      // then
      expect(component.queryFormControl.value).toBe(testCriteria.query!);
    });

    it('notifies on criteria changes', (done) => {
      // 1. given
      const component = new UserSearchComponent();
      component.criteriaChange.subscribe(changedCriteria => {
        // 3. then
        expect(changedCriteria.query).toBe(testQuery);
        done();
      });
      // 2. when
      component.queryFormControl.setValue(testQuery);
      component.notifyOnCriteriaChange();
    });
  });

  describe('DOM tests', () => {
    let fixture: ComponentFixture<UserSearchComponent>;
    let component: UserSearchComponent;
    let element: HTMLElement;

    beforeEach(() => {
      return TestBed.configureTestingModule({
        imports: [ReactiveFormsModule],
        declarations: [UserSearchComponent]
      }).compileComponents().then(() => {
        fixture = TestBed.createComponent(UserSearchComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement as HTMLElement;
      })
    });

    it('populates input criteria to input form control', () => {
      // given
      component.criteria = testCriteria;
      // when
      fixture.detectChanges();
      // then
      const queryInput = element.querySelector<HTMLInputElement>('input');
      expect(queryInput).not.toBeNull();
      expect(queryInput?.value).toBe(testCriteria.query);
    });

    it('notifies on criteria changes', (done) => {
      // 1. given
      fixture.detectChanges();
      component.criteriaChange.subscribe(changedCriteria => {
        // 4. then
        expect(changedCriteria.query).toBe(testQuery);
        done();
      });
      // 2. given
      const queryInput = element.querySelector<HTMLInputElement>('input');
      if (!queryInput) {
        throw new Error('No input found!');
      }
      queryInput.value = testQuery;
      queryInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      // 3. when
      const searchButton = element.querySelector<HTMLButtonElement>('button');
      if (!searchButton) {
        throw new Error('No button found!');
      }
      searchButton.click();
      fixture.detectChanges();
    });
  });
});
