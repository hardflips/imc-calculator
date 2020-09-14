<script>
    import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem
    } from 'sveltestrap';

    let current = 'calculadora';
    
</script>

<nav id="navbar">
    <Navbar color="light" light expand="md">
        <Collapse navbar expand="lg">
            <Nav class="ml-auto" navbar>
                <NavItem 
                    class="{current === 'calculadora' ? 'active' : ''}">
                    <NavLink href="#calculadora" on:click="{() => current = 'calculadora'}">Calculadora</NavLink>
                </NavItem>
                <NavItem
                    class="{current === 'resultado' ? 'active' : ''}">
                    <NavLink href="#resultado" on:click="{() => current = 'resultado'}">Entenda o seu resultado</NavLink>
                </NavItem>
                <NavItem
                    class="{current === 'infograficos' ? 'active' : ''}">
                    <NavLink href="#infograficos" on:click="{() => current = 'infograficos'}">Infográficos</NavLink>
                </NavItem>
                <NavItem
                    class="{current === 'alertas' ? 'active' : ''}">
                    <NavLink href="#alertas" on:click="{() => current = 'alertas'}">Fique atento</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
</nav>

<style>
    #navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 999;
        background-color: #f8f9fa !important;
        box-shadow: 0 0 8px rgba(0,0,0, .25);
    }
    :global(.navbar) {
        border-radius: 4px;
    }
    :global(.navbar-light .navbar-nav .active>.nav-link) {
        border-radius: 4px;
        background-color: #2d3e4f;
        color: white;
    }
    :global(.navbar-nav .nav-link) {
        padding-top: 2px;
        padding-bottom: 2px;
        color: white;
    }
    @media (min-width: 801px) {
        #navbar {
            display: flex;
        }
    }
</style>