import { createBoard } from '@wixc3/react-board';
import { LayoutIndicator } from '../../../components/layout-indicator/layout-indicator';

export default createBoard({
    name: 'LayoutIndicator',
    Board: () => <LayoutIndicator />,
    environmentProps: {},
});
