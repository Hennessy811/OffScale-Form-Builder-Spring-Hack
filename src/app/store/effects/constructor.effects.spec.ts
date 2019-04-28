import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ConstructorEffects } from './constructor.effects';

describe('ConstructorEffects', () => {
  let actions$: Observable<any>;
  let effects: ConstructorEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConstructorEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ConstructorEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
