import { createBoard } from '@wixc3/react-board';
import { OnlinePlayground } from '../../../components/online-playground/online-playground';

export default createBoard({
    name: 'OnlinePlayground',
    Board: () => <OnlinePlayground />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 640,
        windowBackgroundColor: '#d0c7ed',
    },
});
