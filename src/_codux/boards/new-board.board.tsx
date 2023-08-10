import { createBoard } from '@wixc3/react-board';
import { Accordion, Button, Icon } from 'semantic-ui-react';

export default createBoard({
    name: 'New Board',
    Board: () => (
        <div>
            <Button icon circular color="black">
                <Icon name="instagram" />
            </Button>
            <Button icon circular color="facebook">
                <Icon name="facebook" />
            </Button>
            <Button icon circular color="youtube">
                <Icon name="youtube" />
            </Button>
        </div>
    ),
});
