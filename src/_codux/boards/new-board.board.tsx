import { createBoard } from '@wixc3/react-board';
import { Accordion, Button, Icon, Input, Divider } from 'semantic-ui-react';

export default createBoard({
    name: 'New Board',
    Board: () => (
        <div>
            <Button primary>Primary</Button>
            <Button icon circular color="black">
                <Icon name="instagram" />
            </Button>
            <Button basic color="violet">
                Violet
            </Button>
            <Button basic color="olive">
                Olive
            </Button>
            <Button basic color="teal">
                Teal
            </Button>
            <Button basic>Standard</Button>
            <div style={{ width: '450px' }}>
                <Divider />
            </div>
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
