import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const LinksBadges = () => {
    return (
        <div id="links-badges">
            <h4>Links</h4>
            <p>Using the contextual <code>.badge-*</code> classes on an <code>&lt;a&gt;</code> element quickly provide <em>actionable</em> badges with hover and focus states.</p>

            <div className="bd-example">
                <a href="#links-badges/action" className="badge badge-primary ">Primary</a>
                <a href="#links-badges/action" className="badge badge-secondary ">Secondary</a>
                <a href="#links-badges/action" className="badge badge-success ">Success</a>
                <a href="#links-badges/action" className="badge badge-danger ">Danger</a>
                <a href="#links-badges/action" className="badge badge-warning ">Warning</a>
                <a href="#links-badges/action" className="badge badge-info ">Info</a>
                <a href="#links-badges/action" className="badge badge-light ">Light</a>
                <a href="#links-badges/action" className="badge badge-dark">Dark</a>
            </div>

            <PrismCode
                code={
                '<a href="#" className="badge badge-primary">Primary</a>\n' +
                '<a href="#" className="badge badge-secondary">Secondary</a>\n' +
                '<a href="#" className="badge badge-success">Success</a>\n' +
                '<a href="#" className="badge badge-danger">Danger</a>\n' +
                '<a href="#" className="badge badge-warning">Warning</a>\n' +
                '<a href="#" className="badge badge-info">Info</a>\n' +
                '<a href="#" className="badge badge-light">Light</a>\n' +
                '<a href="#" className="badge badge-dark">Dark</a>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default LinksBadges;
