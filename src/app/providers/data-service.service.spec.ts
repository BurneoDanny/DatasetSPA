import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DataServiceService } from './data-service.service';
import { DataType } from '../interfaces/data-type';

describe('DataServiceService', () => {
  let service: DataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], 
      providers: [DataServiceService]
    });
    service = TestBed.inject(DataServiceService);
  });

  
   // La función donde se encarga de esperar por completar el requerimiento
   it('getResponse() should return value from observable', (done:DoneFn) => {
    //Invoque el método con la petición asincrónica
    service.getResponse().subscribe((data) => {
      
      // Valide que la respuesta sea mayor que 0
      expect((data as DataType[]).length).toBeGreaterThan(0);

      // Que espere hasta que llegue la respuesta 
      done();
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
