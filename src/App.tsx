import { useState } from 'react';
import styles from './App.module.scss';
import { Card, Menu, Feed } from 'semantic-ui-react';
import Classnames from 'classnames';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <div className={Classnames(styles.gallery, styles.reset)}></div>
            <div />
        </div>
    );
}

export default App;
