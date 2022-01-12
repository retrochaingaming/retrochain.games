import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Dropdown, DropdownButton, ButtonGroup, SplitButton } from 'react-bootstrap';

const Directions = () => {
    return (
        <div id="directions">
            <h4>Directions</h4>

            <div id="dropup">
                <h5>Dropup</h5>
                <p>Trigger dropdown menus above elements by adding <code>.dropup</code> to the parent element.</p>

                <div className="bd-example">
                    { ['up'].map( ( direction ) => (
                        <DropdownButton
                            as={ ButtonGroup }
                            key={ direction }
                            id={ `dropdown-button-drop-${ direction }` }
                            drop={ direction }
                            title={ ` Drop ${ direction } ` }
                            className=""
                        >
                            <Dropdown.Item href="#directions/action" eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item href="#directions/action" eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#directions/action" eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#directions/action" eventKey="4">Separated link</Dropdown.Item>
                        </DropdownButton>
                    ) ) }

                    { ['up'].map( ( direction ) => (
                        <SplitButton
                            key={ direction }
                            id={ `dropdown-button-drop-${ direction }` }
                            drop={ direction }
                            title={ `Drop ${ direction }` }
                            className=""
                        >
                            <Dropdown.Item href="#directions/action" eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item href="#directions/action" eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#directions/action" eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#directions/action" eventKey="4">Separated link</Dropdown.Item>
                        </SplitButton>
                    ) ) }
                </div>

                <PrismCode
                    code={
                    '<div className="btn-group dropup">\n' +
                    '  <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropup</button>\n' +
                    '  <div className="dropdown-menu" >\n' +
                    '    <a className="dropdown-item" href="#">Action</a>\n' +
                    '    <a className="dropdown-item" href="#">Another action</a>\n' +
                    '    <a className="dropdown-item" href="#">Something else here</a>\n' +
                    '    <div className="dropdown-divider"></div>\n' +
                    '    <a className="dropdown-item" href="#">Separated link</a>\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    '\n' +
                    '<div className="btn-group dropup">\n' +
                    '  <button type="button" className="btn btn-primary">Split dropup</button>\n' +
                    '  <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
                    '    <span className="sr-only">Toggle Dropdown</span>\n' +
                    '  </button>\n' +
                    '  <div className="dropdown-menu" >\n' +
                    '    <a className="dropdown-item" href="#">Action</a>\n' +
                    '    <a className="dropdown-item" href="#">Another action</a>\n' +
                    '    <a className="dropdown-item" href="#">Something else here</a>\n' +
                    '    <div className="dropdown-divider"></div>\n' +
                    '    <a className="dropdown-item" href="#">Separated link</a>\n' +
                    '  </div>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="dropright">
                <h5>Dropright</h5>
                <p>Trigger dropdown menus at the right of the elements by adding <code>.dropright</code> to the parent element.</p>

                <div className="bd-example">
                    { ['right'].map( ( direction ) => (
                        <DropdownButton
                            as={ ButtonGroup }
                            key={ direction }
                            id={ `dropdown-button-drop-${ direction }` }
                            drop={ direction }
                            title={ ` Drop ${ direction } ` }
                            className=""
                        >
                            <Dropdown.Item href="#directions/action" eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item href="#directions/action" eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#directions/action" eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#directions/action" eventKey="4">Separated link</Dropdown.Item>
                        </DropdownButton>
                    ) ) }

                    { ['right'].map( ( direction ) => (
                        <SplitButton
                            key={ direction }
                            id={ `dropdown-button-drop-${ direction }` }
                            drop={ direction }
                            title={ `Drop ${ direction }` }
                            className=""
                        >
                            <Dropdown.Item href="#directions/action" eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item href="#directions/action" eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#directions/action" eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#directions/action" eventKey="4">Separated link</Dropdown.Item>
                        </SplitButton>
                    ) ) }
                </div>

                <PrismCode
                    code={
                    '<div className="btn-group dropright">\n' +
                    '  <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropright</button>\n' +
                    '  <div className="dropdown-menu">\n' +
                    '    <a className="dropdown-item" href="#">Action</a>\n' +
                    '    <a className="dropdown-item" href="#">Another action</a>\n' +
                    '    <a className="dropdown-item" href="#">Something else here</a>\n' +
                    '    <div className="dropdown-divider"></div>\n' +
                    '    <a className="dropdown-item" href="#">Separated link</a>\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    '\n' +
                    '<div className="btn-group dropright">\n' +
                    '  <button type="button" className="btn btn-primary">Split dropright</button>\n' +
                    '  <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
                    '    <span className="sr-only">Toggle Dropright</span>\n' +
                    '  </button>\n' +
                    '  <div className="dropdown-menu">\n' +
                    '    <a className="dropdown-item" href="#">Action</a>\n' +
                    '    <a className="dropdown-item" href="#">Another action</a>\n' +
                    '    <a className="dropdown-item" href="#">Something else here</a>\n' +
                    '    <div className="dropdown-divider"></div>\n' +
                    '    <a className="dropdown-item" href="#">Separated link</a>\n' +
                    '  </div>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="dropleft">
                <h5>Dropleft</h5>
                <p>Trigger dropdown menus at the left of the elements by adding <code>.dropleft</code> to the parent element.</p>

                <div className="bd-example">
                    { ['left'].map( ( direction ) => (
                        <DropdownButton
                            as={ ButtonGroup }
                            key={ direction }
                            id={ `dropdown-button-drop-${ direction }` }
                            drop={ direction }
                            title={ ` Drop ${ direction } ` }
                            className=""
                        >
                            <Dropdown.Item href="#directions/action" eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item href="#directions/action" eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#directions/action"  eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#directions/action" eventKey="4">Separated link</Dropdown.Item>
                        </DropdownButton>
                    ) ) }

                    { ['left'].map( ( direction ) => (
                        <SplitButton
                            key={ direction }
                            id={ `dropdown-button-drop-${ direction }` }
                            drop={ direction }
                            title={ `Drop ${ direction }` }
                            className=""
                        >
                            <Dropdown.Item href="#directions/action" eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item href="#directions/action" eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#directions/action" eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#directions/action" eventKey="4">Separated link</Dropdown.Item>
                        </SplitButton>
                    ) ) }
                </div>

                <PrismCode
                    code={
                    '<div className="btn-group dropleft">\n' +
                    '  <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropright</button>\n' +
                    '  <div className="dropdown-menu">\n' +
                    '    <a className="dropdown-item" href="#">Action</a>\n' +
                    '    <a className="dropdown-item" href="#">Another action</a>\n' +
                    '    <a className="dropdown-item" href="#">Something else here</a>\n' +
                    '    <div className="dropdown-divider"></div>\n' +
                    '    <a className="dropdown-item" href="#">Separated link</a>\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    '\n' +
                    '<div className="btn-group dropright">\n' +
                    '  <button type="button" className="btn btn-primary">Split dropright</button>\n' +
                    '  <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
                    '    <span className="sr-only">Toggle Dropright</span>\n' +
                    '  </button>\n' +
                    '  <div className="dropdown-menu">\n' +
                    '    <a className="dropdown-item" href="#">Action</a>\n' +
                    '    <a className="dropdown-item" href="#">Another action</a>\n' +
                    '    <a className="dropdown-item" href="#">Something else here</a>\n' +
                    '    <div className="dropdown-divider"></div>\n' +
                    '    <a className="dropdown-item" href="#">Separated link</a>\n' +
                    '  </div>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>
        </div>
    );
};

export default Directions;
