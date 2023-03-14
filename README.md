#ANGULAR # esn-luxury-mega-menu

Angular Mega Menu

---------------------INSTALLATION

     npm i esn-luxury-mega-menu --force

     import { EsnLuxuryMegaMenuModule } from 'esn-luxury-mega-menu';
        
---------------------Demo

        https://stackblitz.com/edit/esn-luxury-mega-menu

  	    https://esn-luxury-mega-menu.stackblitz.io

---------------------Usage

--------------------TS

    data = {
        bg: '#111',
        menuBg:'#995511',
        color:'#fff',
        baseUrl:'https://www.burjcrown.com/drm/tst/',
        menu:
        [
            {
            New: [
                'tablet',
                'labtop']

            },
            {
            Brands: [
                'samsung',
                'panasonic',
                'motorola',
                'sony',
            ]
            },
            {
            Clothes: [
                'shoe',
                'cloth',]
            },
            {
            Electronics: [
                'watch',
                'modem',]
            }
      ]
    }
    

        result(res) {
            alert(res)
        }
--------------------HTML

            <esn-luxury-mega-menu
            [data]="data"
            (result)="result($event)"></esn-luxury-mega-menu>