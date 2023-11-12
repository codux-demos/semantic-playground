import classNames from 'classnames';
import {
    Button,
    Card,
    Form,
    Icon,
    Image,
    Label,
    List,
    Menu,
    Progress,
    Segment,
} from 'semantic-ui-react';
import styles from './App2.module.scss';

function App() {
    return (
        <div className={styles['container']}>
            <div className={styles['flex-container']}>
                <div>
                    <h1 className={styles.title}>Semantic UI Is Great</h1>
                    <p className={styles.description}>
                        With Semantic UI, you can create beautiful websites using human-friendly
                        HTML and intuitive javascript. It’s the ultimate web design tool!
                    </p>
                    <div className={styles['buttons-gap']}>
                        <Button color="black">Read Article</Button>
                        <Button basic color="black">
                            Documentation
                        </Button>
                    </div>
                </div>
                <div>
                    <div className={styles.labels}>
                        <Label color="pink" tag>
                            New
                        </Label>
                        <Label color="purple" tag>
                            Upcoming
                        </Label>
                        <Label color="violet" tag>
                            Featured
                        </Label>
                    </div>
                    <div className={styles['two-columns']}>
                        <Segment attached color="teal">
                            <Label color="teal" ribbon content="Hotel" icon="hotel" />
                            <span>Account Details</span>

                            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                        </Segment>

                        <Segment attached color="olive">
                            <Label color="olive" ribbon="right" content="Overview" />
                            <span>Account Details</span>

                            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                        </Segment>
                    </div>
                    <div className={styles['two-columns']}>
                        <div className={styles['div-img-size']}>
                            <Image
                                src="https://semantic-ui.com/images/avatar2/small/molly.png"
                                size="small"
                                circular
                                bordered={true}
                            />
                        </div>
                        <List floated="right">
                            <List.Item icon="users" content="Semantic UI" />
                            <List.Item icon="marker" content="New York, NY" />
                            <List.Item
                                icon="mail"
                                content={
                                    <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
                                }
                            />
                            <List.Item
                                icon="linkify"
                                content={<a href="http://www.semantic-ui.com">semantic-ui.com</a>}
                            />
                        </List>
                    </div>
                </div>

                <div className={styles['right-card']}>
                    <Card fluid={true} color="violet">
                        <Image
                            fluid={true}
                            centered={true}
                            src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                            wrapped
                            ui={true}
                        />
                        <Card.Content>
                            <Card.Header>Matthew</Card.Header>
                            <Card.Meta>
                                <span className="date">Joined in 2015</span>
                            </Card.Meta>
                        </Card.Content>
                        <Card.Content extra={true}>
                            <a>
                                <Icon name="user" />
                                22 Friends
                            </a>
                        </Card.Content>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default App;
