import { createBoard } from '@wixc3/react-board';
import { PresentationPlayground } from '../../../components/presentation-playground/presentation-playground';

export default createBoard({
    name: 'PresentationPlayground',
    Board: () => <PresentationPlayground />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
    },
});
