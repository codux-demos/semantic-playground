import { createBoard } from '@wixc3/react-board';
import App from '../../../App2';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    isSnippet: true,
});
