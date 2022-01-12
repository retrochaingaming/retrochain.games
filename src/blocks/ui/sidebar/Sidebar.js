import React from 'react';
import { Link } from 'react-scroll/modules';

const Sidebar = () => {
    window.onscroll = function() {
        var rect      = document.querySelector( "#aside-sticky" ).getBoundingClientRect();
        var offsetTop = rect.top + window.scrollY;

        var position             = window.pageYOffset - offsetTop;
        var parentwidth          = window.getComputedStyle( document.getElementById( "aside-sticky" ), null );
        var parentContainerWidth = parentwidth.getPropertyValue( "width" );
        var parentPaddingLeft    = parentwidth.getPropertyValue( "padding-left" );
        var parentPaddingRight   = parentwidth.getPropertyValue( "padding-right" );

        var parentContainerWidthSplit = parentContainerWidth.split( "px" );
        var parentPaddingLeftSplit    = parentPaddingLeft.split( "px" );
        var parentPaddingRightSplit   = parentPaddingRight.split( "px" );

        var parentWidthAfterCalc = parentContainerWidthSplit[0] - parentPaddingLeftSplit[0] - parentPaddingRightSplit[0];

        if ( position > 0 ) {
            document.getElementById( 'aside' ).classList.add( 'sticky-fixed-lg' );
            document.getElementById( 'aside' ).style.width = parentWidthAfterCalc + 'px';
        } else {
            document.getElementById( 'aside' ).classList.remove( 'sticky-fixed-lg' );
            document.getElementById( 'aside' ).style.width = null;
        }
    };

    window.onresize = function() {
        var rect      = document.querySelector( "#aside-sticky" ).getBoundingClientRect();
        var offsetTop = rect.top + window.scrollY;

        var position             = window.pageYOffset - offsetTop;
        var parentwidth          = window.getComputedStyle( document.getElementById( "aside-sticky" ), null );
        var parentContainerWidth = parentwidth.getPropertyValue( "width" );
        var parentPaddingLeft    = parentwidth.getPropertyValue( "padding-left" );
        var parentPaddingRight   = parentwidth.getPropertyValue( "padding-right" );

        var parentContainerWidthSplit = parentContainerWidth.split( "px" );
        var parentPaddingLeftSplit    = parentPaddingLeft.split( "px" );
        var parentPaddingRightSplit   = parentPaddingRight.split( "px" );

        var parentWidthAfterCalc = parentContainerWidthSplit[0] - parentPaddingLeftSplit[0] - parentPaddingRightSplit[0];

        if ( position > 0 ) {
            document.getElementById( 'aside' ).classList.add( 'sticky-fixed-lg' );
            document.getElementById( 'aside' ).style.width = parentWidthAfterCalc + 'px';
        } else {
            document.getElementById( 'aside' ).classList.remove( 'sticky-fixed-lg' );
            document.getElementById( 'aside' ).style.width = null;
        }
    };

    return (
        <div className="col-md-12 col-lg-4 col-xl-4" id="aside-sticky">
            <aside id="aside" className="widget-area">
                <div className="widget">
                    <h6 className="widget-title">
                        <Link title="Content" className="scroll-to-id" to="content" spy={ true } smooth={ true } duration={ 0 } href="#content">Content</Link>
                    </h6>

                    <ul>
                        <li>
                            <Link title="Typography" className="scroll-to-id" to="typography" spy={ true } smooth={ true } duration={ 0 } href="#typography">Typography</Link>
                        </li>

                        <li>
                            <Link title="Icons" className="scroll-to-id" to="icons" spy={ true } smooth={ true } duration={ 0 } href="#icons">Icons</Link>
                        </li>

                        <li>
                            <Link title="Images" className="scroll-to-id" to="images" spy={ true } smooth={ true } duration={ 0 } href="#images">Images</Link>
                        </li>

                        <li>
                            <Link title="Tables" className="scroll-to-id" to="tables" spy={ true } smooth={ true } duration={ 0 } href="#tables">Tables</Link>
                        </li>

                        <li>
                            <Link title="Figures" className="scroll-to-id" to="figures" spy={ true } smooth={ true } duration={ 0 } href="#figures">Figures</Link>
                        </li>
                    </ul>
                </div>

                <div className="widget">
                    <h6 className="widget-title">
                        <Link title="Components" className="scroll-to-id" to="components" spy={ true } smooth={ true } duration={ 0 } href="#components">Components</Link>
                    </h6>

                    <ul>
                        <li>
                            <Link title="Alert" className="scroll-to-id" to="alert" spy={ true } smooth={ true } duration={ 0 } href="#alert">Alerts</Link>
                        </li>

                        <li>
                            <Link title="Badge" className="scroll-to-id" to="badge" spy={ true } smooth={ true } duration={ 0 } href="#badge">Badge</Link>
                        </li>

                        <li>
                            <Link title="Buttons" className="scroll-to-id" to="buttons" spy={ true } smooth={ true } duration={ 0 } href="#buttons">Buttons</Link>
                        </li>

                        <li>
                            <Link title="Button group" className="scroll-to-id" to="button-group" spy={ true } smooth={ true } duration={ 0 } href="#button-group">Button group</Link>
                        </li>

                        <li>
                            <Link title="Card" className="scroll-to-id" to="card" spy={ true } smooth={ true } duration={ 0 } href="#card">Card</Link>
                        </li>

                        <li>
                            <Link title="Slider" className="scroll-to-id" to="slider" spy={ true } smooth={ true } duration={ 0 } href="#slider">Slider</Link>
                        </li>

                        <li>
                            <Link title="Collapse" className="scroll-to-id" to="collapse" spy={ true } smooth={ true } duration={ 0 } href="#collapse">Collapse</Link>
                        </li>

                        <li>
                            <Link title="Dropdowns" className="scroll-to-id" to="dropdowns" spy={ true } smooth={ true } duration={ 0 } href="#dropdowns">Dropdowns</Link>
                        </li>

                        <li>
                            <Link title="Forms" className="scroll-to-id" to="forms" spy={ true } smooth={ true } duration={ 0 } href="#forms">Forms</Link>
                        </li>

                        <li>
                            <Link title="Input group" className="scroll-to-id" to="input-group" spy={ true } smooth={ true } duration={ 0 } href="#input-group">Input group</Link>
                        </li>

                        <li>
                            <Link title="List group" className="scroll-to-id" to="list-group" spy={ true } smooth={ true } duration={ 0 } href="#list-group">List group</Link>
                        </li>

                        <li>
                            <Link title="Media object" className="scroll-to-id" to="media-object" spy={ true } smooth={ true } duration={ 0 } href="#media-object">Media object</Link>
                        </li>

                        <li>
                            <Link title="Modal" className="scroll-to-id" to="modal" spy={ true } smooth={ true } duration={ 0 } href="#modal">Modal</Link>
                        </li>

                        <li>
                            <Link title="Navs" className="scroll-to-id" to="navs" spy={ true } smooth={ true } duration={ 0 } href="#navs">Navs</Link>
                        </li>

                        <li>
                            <Link title="Pagination" className="scroll-to-id" to="pagination" spy={ true } smooth={ true } duration={ 0 } href="#pagination">Pagination</Link>
                        </li>

                        <li>
                            <Link title="Pop-up" className="scroll-to-id" to="pop-up" spy={ true } smooth={ true } duration={ 0 } href="#pop-up">Pop-up</Link>
                        </li>

                        <li>
                            <Link title="Scroll" className="scroll-to-id" to="scroll" spy={ true } smooth={ true } duration={ 0 } href="#scroll">Scroll</Link>
                        </li>

                        <li>
                            <Link title="Scrollbar" className="scroll-to-id" to="scrollbar" spy={ true } smooth={ true } duration={ 0 } href="#scrollbar">Scrollbar</Link>
                        </li>
                    </ul>
                </div>

                <div className="widget">
                    <h6 className="widget-title">
                        <Link title="Utilities" className="scroll-to-id" to="utilities" spy={ true } smooth={ true } duration={ 0 } href="#utilities">Utilities</Link>
                    </h6>

                    <ul>
                        <li>
                            <Link title="Borders" className="scroll-to-id" to="borders" spy={ true } smooth={ true } duration={ 0 } href="#borders">Borders</Link>
                        </li>

                        <li>
                            <Link title="Clearfix" className="scroll-to-id" to="clearfix" spy={ true } smooth={ true } duration={ 0 } href="#clearfix">Clearfix</Link>
                        </li>

                        <li>
                            <Link title="Colors" className="scroll-to-id" to="colors" spy={ true } smooth={ true } duration={ 0 } href="#colors">Colors</Link>
                        </li>

                        <li>
                            <Link title="Display" className="scroll-to-id" to="display" spy={ true } smooth={ true } duration={ 0 } href="#display">Display</Link>
                        </li>

                        <li>
                            <Link title="Embed" className="scroll-to-id" to="embed" spy={ true } smooth={ true } duration={ 0 } href="#embed">Embed</Link>
                        </li>

                        <li>
                            <Link title="Flex" className="scroll-to-id" to="flex" spy={ true } smooth={ true } duration={ 0 } href="#flex">Flex</Link>
                        </li>

                        <li>
                            <Link title="Float" className="scroll-to-id" to="float" spy={ true } smooth={ true } duration={ 0 } href="#float">Float</Link>
                        </li>

                        <li>
                            <Link title="Overflow" className="scroll-to-id" to="overflow" spy={ true } smooth={ true } duration={ 0 } href="#overflow">Overflow</Link>
                        </li>

                        <li>
                            <Link title="Position" className="scroll-to-id" to="position" spy={ true } smooth={ true } duration={ 0 } href="#position">Position</Link>
                        </li>

                        <li>
                            <Link title="Shadows" className="scroll-to-id" to="shadows" spy={ true } smooth={ true } duration={ 0 } href="#shadows">Shadows</Link>
                        </li>

                        <li>
                            <Link title="Sizing" className="scroll-to-id" to="sizing" spy={ true } smooth={ true } duration={ 0 } href="#sizing">Sizing</Link>
                        </li>

                        <li>
                            <Link title="Spacing" className="scroll-to-id" to="spacing" spy={ true } smooth={ true } duration={ 0 } href="#spacing">Spacing</Link>
                        </li>

                        <li>
                            <Link title="Stretched link" className="scroll-to-id" to="stretched-link" spy={ true } smooth={ true } duration={ 0 } href="#stretched-link">Stretched link</Link>
                        </li>

                        <li>
                            <Link title="Text" className="scroll-to-id" to="text" spy={ true } smooth={ true } duration={ 0 } href="#text">Text</Link>
                        </li>

                        <li>
                            <Link title="Vertical alignment" className="scroll-to-id" to="vertical-alignment" spy={ true } smooth={ true } duration={ 0 } href="#vertical-alignment">Vertical alignment</Link>
                        </li>

                        <li>
                            <Link title="Visibility" className="scroll-to-id" to="visibility" spy={ true } smooth={ true } duration={ 0 } href="#visibility">Visibility</Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
