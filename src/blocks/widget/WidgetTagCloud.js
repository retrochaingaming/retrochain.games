import React from 'react';

const WidgetTagCloud = () => {
    return (
        <div className="widget widget_tag_cloud">
            <h6 className="widget-title">Tags</h6>

            <div className="tagcloud">
                <a title="Beauty" href={ process.env.PUBLIC_URL + "/news" } className="tag-cloud-link">Hairstyle</a>
                <a title="Cosmetic" href={ process.env.PUBLIC_URL + "/news" } className="tag-cloud-link">Beard</a>
                <a title="Health" href={ process.env.PUBLIC_URL + "/news" } className="tag-cloud-link">Cosmetic</a>
                <a title="Makeup" href={ process.env.PUBLIC_URL + "/news" } className="tag-cloud-link">Shave</a>
            </div>
        </div>
    );
};

export default WidgetTagCloud;
