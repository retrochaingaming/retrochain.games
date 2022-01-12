import React from 'react';

const WidgetRecentEntries = () => {
    return (
        <div className="widget widget_recent_entries">
            <h6 className="widget-title">Recent posts</h6>

            <ul className="list-unstyled items">
                <li className="item">
                    <div className="row gutter-width-xs">
                        <div className="col-3">
                            <a href={ process.env.PUBLIC_URL + "/news-single-post" }>
                                <div className="img object-fit overflow-hidden">
                                    <div className="object-fit-cover transform-scale-h">
                                        <img src="assets/img/placeholder/81x81.jpg" alt="5 Benefits of Going to a BARBER" />
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-9 align-self-center">
                            <p className="item-t-head">
                                <a title="Women beauty presents" href={ process.env.PUBLIC_URL + "/news-single-post" }>5 Benefits of Going to a BARBER</a>
                            </p>
                        </div>
                    </div>
                </li>

                <li className="item">
                    <div className="row gutter-width-xs">
                        <div className="col-3">
                            <a href={ process.env.PUBLIC_URL + "/news-single-post" }>
                                <div className="img object-fit overflow-hidden">
                                    <div className="object-fit-cover transform-scale-h">
                                        <img src="assets/img/placeholder/81x81.jpg" alt="Which Trim Should I Choose?" />
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-9 align-self-center">
                            <p className="item-t-head">
                                <a title="Which Makeup Should I Choose?" href={ process.env.PUBLIC_URL + "/news-single-post" }>Which Trim Should I Choose?</a>
                            </p>
                        </div>
                    </div>
                </li>

                <li className="item">
                    <div className="row gutter-width-xs">
                        <div className="col-3">
                            <a href={ process.env.PUBLIC_URL + "/news-single-post" }>
                                <div className="img object-fit overflow-hidden">
                                    <div className="object-fit-cover transform-scale-h">
                                        <img src="assets/img/placeholder/81x81.jpg" alt="Best Cosmetics for Your HAIR" />
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-9 align-self-center">
                            <p className="item-t-head">
                                <a title="Best Cosmetics for Your Body and Soul" href={ process.env.PUBLIC_URL + "/news-single-post" }>Best Cosmetics for Your HAIR</a>
                            </p>
                        </div>
                    </div>
                </li>

                <li className="item">
                    <div className="row gutter-width-xs">
                        <div className="col-3">
                            <a href={ process.env.PUBLIC_URL + "/news-single-post" }>
                                <div className="img object-fit overflow-hidden">
                                    <div className="object-fit-cover transform-scale-h">
                                        <img src="assets/img/placeholder/81x81.jpg" alt="5 Benefits of Going to a BARBER" />
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-9 align-self-center">
                            <p className="item-t-head">
                                <a title="Women beauty presents" href={ process.env.PUBLIC_URL + "/news-single-post" }>5 Benefits of Going to a BARBER</a>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default WidgetRecentEntries;
