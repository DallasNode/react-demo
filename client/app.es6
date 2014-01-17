import React from 'react';
import Layout from 'components/layout';

var el = document.documentElement;
React.renderComponent(Layout(JSON.parse(el.dataset.props)), el);
