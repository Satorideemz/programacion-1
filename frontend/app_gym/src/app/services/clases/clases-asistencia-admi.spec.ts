import { TestBed } from '@angular/core/testing';

import { ClasesAsistenciaService } from './clases-asistencia-admi.service';

describe('ClasesAsistenciaService', () => {
  let service: ClasesAsistenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClasesAsistenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
