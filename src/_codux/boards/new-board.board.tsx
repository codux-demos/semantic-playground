import { createBoard } from '@wixc3/react-board';
import { Accordion, Button, Icon, Input } from 'semantic-ui-react';

export default createBoard({
    name: 'New Board',
    Board: () => (
        <div>
            <Button primary>Primary</Button>
            <Button icon circular color="black">
                <Icon name="instagram" />
            </Button>
            <Button icon circular color="facebook">
                <Icon name="facebook" />
            </Button>
            <Button icon circular color="youtube">
                <Icon name="youtube" />
            </Button>
            <div>
                <Input
                    action={{
                        color: 'black',
                        labelPosition: 'right',
                        icon: 'book',
                        content: 'Join now',
                    }}
                    defaultValue="http://ww.short.url/c0opq"
                />
            </div>
        </div>
    ),
    environmentProps: {},
});
