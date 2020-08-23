import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const TwittersView = () => (
    <AppContext.Consumer>
        {(context) => (
            <div>
                <List items={context.twitter} type='twitter'/>
            </div>
        )}
    </AppContext.Consumer>
);

export default TwittersView;