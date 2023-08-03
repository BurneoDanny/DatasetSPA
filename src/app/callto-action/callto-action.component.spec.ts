import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalltoActionComponent } from './callto-action.component';
import { HttpClientModule } from '@angular/common/http';
import { DataServiceService } from '../providers/data-service.service';

describe('CalltoActionComponent', () => {
  let component: CalltoActionComponent;
  let fixture: ComponentFixture<CalltoActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CalltoActionComponent],
      providers: [DataServiceService],
    });

    fixture = TestBed.createComponent(CalltoActionComponent);
    component = fixture.componentInstance;
  });


  it('id should exist', () => {
    const table = fixture.nativeElement.querySelector('table#DataTable');
    expect(table).toBeTruthy();
  });

  it('should render data table', () => {
    component.data = [
      {
        Company: 'Apple',
        Cpu: 'Intel Core i5 2.3GHz',
        Gpu: 'Intel Iris Plus Graphics 640',
        Inches: '13.3',
        Memory: '128GB SSD',
        OpSys: 'macOS',
        Price_in_euros: '1339.69',
        Product: 'MacBook Pro',
        Ram: '8GB',
        ScreenResolution: 'IPS Panel Retina Display 2560x1600',
        TypeName: 'Ultrabook',
        Weight: '1.37kg',
        laptop_ID: '1',
      },
      {
        Company: 'Apple',
        Cpu: 'Intel Core i5 1.8GHz',
        Gpu: 'Intel HD Graphics 6000',
        Inches: '13.3',
        Memory: '128GB Flash Storage',
        OpSys: 'macOS',
        Price_in_euros: '898.94',
        Product: 'Macbook Air',
        Ram: '8GB',
        ScreenResolution: '1440x900',
        TypeName: 'Ultrabook',
        Weight: '1.34kg',
        laptop_ID: '2',
      },
    ];

    fixture.detectChanges();

    const table = fixture.nativeElement.querySelector('table');
    const tableRows = table.querySelectorAll('tr');

    console.log(table);
    console.log(component.data);
    console.log(tableRows);

    expect(tableRows.length).toBe(component.data.length);

    for (let i = 0; i < component.data.length; i++) {
      const tableColumns = tableRows[i].querySelectorAll('td');
      console.log(tableColumns);
      expect(tableColumns[0].textContent).toContain(component.data[i].Cpu);
      expect(tableColumns[1].textContent).toContain(component.data[i].Gpu);
      expect(tableColumns[2].textContent).toContain(component.data[i].Ram);
    }
  });

  it('should request service user after Angular calls ngOnInit', (done:DoneFn) => {
    // Llame a ngOnInit para simular el ciclo de vida del componente
    component.ngOnInit();
    
    // Utilice fixture.whenStable para esperar a que se resuelva el observable del servicio
    fixture.whenStable().then(() => {
      // Valide que la respuesta sea mayor que 0
      console.log(component.data);
      expect(component.data.length).toBeGreaterThan(0);  //???
      // Que espere hasta que llegue la respuesta
      done();
    });
  });
});
