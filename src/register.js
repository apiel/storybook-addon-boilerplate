import * as React from 'react';
import addons from '@storybook/addons';

class Panel extends React.Component {
    render() {
        return (
            <div>
                abc
            </div>
        );
    }
}

addons.register('storybook/my-addon', (api) => {
    addons.addPanel('storybook/my-addon/panel', {
        title: 'My Panel',
        render() {
            return <Panel channel={addons.getChannel()} api={api} />;
        }
    });
});
