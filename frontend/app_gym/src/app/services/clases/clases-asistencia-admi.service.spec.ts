import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ClaseAsistenciaService } from './clases-asistencia-admi.service';

describe('ClaseAsistenciaService', () => {
  let service: ClaseAsistenciaService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClaseAsistenciaService]
    });
    service = TestBed.inject(ClaseAsistenciaService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
