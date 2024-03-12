import { Component, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ngAfterViewInit() {
    this.init();
  }
  init() {
    /*--
        Menu Sticky
    -----------------------------------*/
    var windows = $(window);
    var sticky = $('.header-sticky');
    let menuNav = $('nav.main-navigation');
    windows.on('scroll', function() {
        var scroll = windows.scrollTop();
        if (scroll < 5) {
            sticky.removeClass('is-sticky');
        } else{
            sticky.addClass('is-sticky');
        }
    });
    
    // Prevent closing dropdown upon clicking inside the dropdown
    $(".dropdown-menu").on("click", function(e: { stopPropagation: () => void; }) {
        e.stopPropagation();
    });
    
    /*--
        Mobile Menu
    ------------------------*/
    
    
    // menuNav.meanmenu({
    //     meanScreenWidth: '991',
    //     meanMenuContainer: '.mobile-menu',
    //     meanMenuClose: '<span class="menu-close"></span>',
    //     meanMenuOpen: '<span class="menu-bar"></span>',
    //     meanRevealPosition: 'right',
    //     meanMenuCloseSize: '0',
    // });
  }
}
