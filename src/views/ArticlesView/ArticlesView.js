import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const ArticlesView = () => (
    <AppContext.Consumer>
        {(context) => (
            <div>
                <List items={context.article} type='article'/>
            </div>
        )}
    </AppContext.Consumer>
);

export default ArticlesView;