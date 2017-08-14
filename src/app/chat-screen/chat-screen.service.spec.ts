import { TestBed, inject } from '@angular/core/testing';

import { ChatScreenService } from './chat-screen.service';

describe('ChatScreenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatScreenService]
    });
  });

  it('should be created', inject([ChatScreenService], (service: ChatScreenService) => {
    expect(service).toBeTruthy();
  }));
});
