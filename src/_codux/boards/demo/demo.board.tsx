import { createBoard } from '@wixc3/react-board';
import { Demo } from '../../../components/demo/demo';

export default createBoard({
    name: 'Demo',
    Board: () => <Demo />,
    environmentProps: {
        canvasWidth: 692,
        canvasHeight: 582,
    },
});
