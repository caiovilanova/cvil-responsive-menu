# Cvil Responsive Menu  @caiovilanova

[EN-US] This feature is a set of html, css and js files that create a responsive menu navbar useful for most websites.

[PT-BR] Esta ferramenta é um conjunto de arquivos html, css e js que criam uma navbar com menu responsivo útil para a maioria dos websites. 

## Installation

[EN-US] CVIL Responsive Menu is available via Composer:

[PT-BR] CVIL Menu Responsivo está disponível via Composer:

~~~
"caiovilanova/cvil-responsive-menu": "1.0.*"
~~~

or run

~~~
composer require caiovilanova/cvil-responsive-menu
~~~


## Documentation

#### CSS cvil-menu.css
[EN-US] This file uses media query to set the screen resolution that adapts desktop to mobile design.
It is easily possible to customize the menu by changing the color variables. The navbar is defined with position:absolute but can easily be changed to position:fixed without changing the behavior of the menu.

[PT-BR] Este arquivo utiliza media query para definir a resolução de tela que adpata o design de desktop para mobile.
É facilmente possível personalizar o menu alterando as variáveis de cor. A navbar está definida com position:absolute mas pode facilmente ser trocado por position:fixed sem alterar o comportamento do menu.

#### JAVASCRIPT cvil-menu.js

[EN-US] This file listens for the menu button and, if enabled, applies styles that (1) remove scrolling from the page; (2) apply a background color to the transparent navbar and (3) Display the list of links filling the entire screen.

[PT-BR] Este arquivo ouve o botão do menu e, se ativado, aplica estilos que (1) removem o scrolling da página; (2) aplica uma cor de fundo na navbar transparente e (3) Exibe a lista de links preenchendo todo display.

~~~javascript
const navbar = document.querySelector('.navbar');
const menuButton = document.querySelector('.navbar-button');
const menuList = document.querySelector('.navbar-list');

menuButton.addEventListener('click', function() {
    navbar.classList.toggle('navbar-mobile-active');
    menuList.classList.toggle('navbar-list-mobile-active');  
    document.body.classList.toggle('noScrolling');
});
~~~

### HTML

[EN-US] Deployment in HTML:

[PT-BR] Implantação no HTML:
            
<!--NAV BAR-->
    <nav class="navbar" id="navbar">
        <a class="navbar-brand" href="https://example.com">
            BRAND
        </a>
        <div class="navbar-menu">
            <a href="javascript:;" class="navbar-button" aria-label="Open menu">
                <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect class="navbar-button-rect1" x="8" y="10" width="24" height="3" aria-hidden="true"></rect>
                    <rect class="navbar-button-rect2" x="8" y="16" width="24" height="3" aria-hidden="true"></rect>
                    <rect class="navbar-button-rect3" x="8" y="22" width="24" height="3" aria-hidden="true"></rect>
                </svg>
            </a>
            <ul class="navbar-list">
                <li class="nav-item"><a class="nav-link" href="https://example.com/link1">About us</a></li>
                <li class="nav-item"><a class="nav-link" href="https://example.com/link2">Services</a></li>
                <li class="nav-item"><a class="nav-link" href="https://example.com/link3">Products</a></li>
                <li class="nav-item"><a class="nav-link" href="https://example.com/link4">Contact</a></li>
            </ul>
        </div>
    </nav>
<!--END NAV BAR-->
            

## Contributing

Contributions are welcome and will be fully credited.
We accept contributions via Pull Requests on Github.
**Important: Create topic branches, One pull request per feature**


## Credits

* [Caio Vilanova](https://github.com/caiovilanova) (Developer)

## License

The MIT License (MIT). Please see [License File](https://github.com/caiovilanova/cvil-responsive-menu/blob/main/LICENSE) for more information.