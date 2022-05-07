/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AboutUsComponent } from './about-us.component';

let component: AboutUsComponent;
let fixture: ComponentFixture<AboutUsComponent>;

describe('about-us component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AboutUsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AboutUsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});