import { TestBed } from '@angular/core/testing';
/* import { by, By } from 'protractor';
 */import {By} from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    component = new AppComponent();
  });

  it('Should contain title', () => {
    let title : string = component.title
    expect(title).toEqual('angularTesting - Ing Web')
  });

  it('Test convertirARoman(1) should return I', () =>{
    let numero : number = 1;
    let resultado: string = 'I';
    expect(resultado).toEqual(component.convertirARomano(numero));
  });

  it('Test convertirARoman(3) should return III', () =>{
    let numero : number = 3;
    let resultado: string = 'III';
    expect(resultado).toEqual(component.convertirARomano(numero));
  });

  it('Test convertirARoman(5) should return V', () =>{
    let numero : number = 5;
    let resultado: string = 'V';
    expect(resultado).toEqual(component.convertirARomano(numero));
  });

  it('Test convertirARoman(15) should return XV', () =>{
    let numero : number = 15;
    let resultado: string = 'XV';
    expect(resultado).toEqual(component.convertirARomano(numero));
  });

  it('Test convertirARoman(30) should return XXX', () =>{
    let numero : number = 30;
    let resultado: string = 'XXX';
    expect(resultado).toEqual(component.convertirARomano(numero));
  });

  it('Test convertirARoman(50) should return L', () =>{
    let numero : number = 50;
    let resultado: string = 'L';
    expect(resultado).toEqual(component.convertirARomano(numero));
  });

  it('Test convertirARoman(60) should return LX', () =>{
    let numero : number = 60;
    let resultado: string = 'LX';
    expect(resultado).toEqual(component.convertirARomano(numero));
  });

  it('Test convertirARoman(100) should return C', () =>{
    let numero : number = 100;
    let resultado: string = 'C';
    expect(resultado).toEqual(component.convertirARomano(numero));
  });

  it('Test convertirARoman(500) should return M', () =>{
    let numero : number = 500;
    let resultado: string = 'D';
    expect(resultado).toEqual(component.convertirARomano(numero));
  });

  it('Test convertirARoman(1000) should return M', () =>{
    let numero : number = 1000;
    let resultado: string = 'M';
    expect(resultado).toEqual(component.convertirARomano(numero));
  });

  it('Test convertirARoman(4000) should return "Ingresa un número entre 1 y 3999"', () =>{
    let numero : number = 4000;
    let resultado: string = 'Ingresa un número entre 1 y 3999';
    expect(resultado).toEqual(component.convertirARomano(numero));
  });

  it('Test duplicarLetras(3,A) should return AAA', () =>{
    let numero : number = 3;
    let letra : string = 'A'
    let resultado: string = 'AAA';
    expect(resultado).toEqual(component.duplicarLetras(letra,numero));
  });

  it('Test duplicarLetras(2,Z) should return ZZ', () =>{
    let numero : number = 2;
    let letra : string = 'Z'
    let resultado: string = 'ZZ';
    expect(resultado).toEqual(component.duplicarLetras(letra,numero));
  });

  it('There must be a method called duplicarLetras(a,b)', () => {
    let methodName = spyOn(component, 'duplicarLetras')
    component.duplicarLetras('B', 3)
    expect(methodName).toHaveBeenCalled();
  });

  it('There must be a method called duplicarLetras(a,b)', () => {
    let methodName = spyOn(component, 'duplicarLetras')
    component.duplicarLetras('B', 3)
    expect(methodName).toHaveBeenCalled();
  });

});
