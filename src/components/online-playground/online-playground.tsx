import classNames from 'classnames';
import styles from './online-playground.module.scss';
import {
    Button,
    Image,
    Label,
    Segment,
    Icon,
    Card,
    Form,
    Progress,
    Breadcrumb,
    Accordion,
    Menu,
    List,
} from 'semantic-ui-react';

export interface OnlinePlaygroundProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const OnlinePlayground = ({ className }: OnlinePlaygroundProps) => {
    return (
        <div className={styles['grid-container']}>
            <div className={classNames(styles['grid-element'], styles['Page-title'])}>
                <h1 className={styles['title-font']}>Semantic UI Is Great</h1>
                <p className={styles['prgrp-font']}>
                    ytgu jgjg hjjk swldk e3 dkmd dxm xksn . sdmxs xnodnwclo . dkcec . sekdnc . dksn
                    xksmxlz xksxc skxc pednfc xsocxnx{' '}
                </p>
                <div className={styles['button-size']}>
                    <Button color="black">Read Article</Button>
                    <Button basic color="black">
                        Documentation
                    </Button>
                </div>
            </div>
            <div className={classNames(styles['grid-element'], styles.Main)}>
                <div className={styles.buttons}>
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
                <div className={styles['Two-Columns']}>
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
                <div className={styles['Two-Columns']}>
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
                            content={<a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>}
                        />
                        <List.Item
                            icon="linkify"
                            content={<a href="http://www.semantic-ui.com">semantic-ui.com</a>}
                        />
                    </List>
                </div>
            </div>
            <div className={styles['grid-element']}>
                <div className={classNames(styles['grid-element'], styles.right)}>
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
            <div className={styles['grid-element']}>
                <div className={classNames(styles['Three-columns'])}>
                    <Button.Group
                        buttons={[
                            { key: 'align left', icon: 'align left' },
                            { key: 'align center', icon: 'align center' },
                            { key: 'align right', icon: 'align right' },
                            { key: 'align justify', icon: 'align justify' },
                        ]}
                    />
                    <Button.Group
                        buttons={[
                            { key: 'align left', icon: 'bold' },
                            { key: 'align center', icon: 'underline' },
                            { key: 'align right', icon: 'text width' },
                        ]}
                    />
                </div>
                <div className={classNames(styles['Three-columns'])}>
                    <Button animated>
                        <Button.Content visible>Next</Button.Content>
                        <Button.Content hidden>
                            <Icon name="arrow right" />
                        </Button.Content>
                    </Button>
                    <Button animated="vertical">
                        <Button.Content hidden>Shop</Button.Content>
                        <Button.Content visible>
                            <Icon name="shop" />
                        </Button.Content>
                    </Button>
                    <Button animated="fade">
                        <Button.Content visible>Sign-up for a Pro account</Button.Content>
                        <Button.Content hidden>$12.99 a month</Button.Content>
                    </Button>
                </div>
                <div className={styles['Three-columns']}>
                    <Label image>
                        <img src="https://react.semantic-ui.com/images/avatar/small/christian.jpg" />
                        Christian
                        <Icon name="delete" />
                    </Label>
                    <Label image>
                        <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                        Elliot
                        <Icon name="delete" />
                    </Label>
                    <Label image>
                        <img src="https://react.semantic-ui.com/images/avatar/small/zoe.jpg" />
                        Zoe
                        <Icon name="delete" />
                    </Label>
                </div>
                <div className={styles['Three-columns']}>
                    <Label as="a" color="blue" image>
                        <img src="https://react.semantic-ui.com/images/avatar/small/nan.jpg" />
                        Veronika
                        <Label.Detail>Bff</Label.Detail>
                    </Label>
                    <Label as="a" color="teal" image>
                        <img src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
                        Jenny
                        <Label.Detail>Friend</Label.Detail>
                    </Label>
                    <Label as="a" color="yellow" image>
                        <img src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
                        Joe<Label.Detail>Co-worker</Label.Detail>
                    </Label>
                </div>
                <div className={classNames(styles['top-margin'], styles['Three-columns'])}>
                    <Menu compact>
                        <Menu.Item as="a">
                            <Icon name="mail" /> Messages
                            <Label color="red" floating>
                                22
                            </Label>
                        </Menu.Item>
                        <Menu.Item as="a">
                            <Icon name="users" /> Friends
                            <Label color="teal" floating>
                                24
                            </Label>
                        </Menu.Item>
                    </Menu>
                    <div className={styles['another-gap']}>
                        <Button as="div" labelPosition="right">
                            <Button color="red">
                                <Icon name="heart" />
                                Like
                            </Button>
                            <Label basic color="red" pointing="left">
                                27,804
                            </Label>
                        </Button>
                    </div>
                </div>
            </div>
            <div className={styles['grid-mb']}>
                <Form>
                    <Form.Field inline={false} className={styles['one-line']}>
                        <span className={styles['input']}>
                            <input type="text" placeholder="Username" />
                        </span>
                        <Label pointing="left" color="blue" size="medium" className={styles.label}>
                            That name is taken!
                        </Label>
                    </Form.Field>
                </Form>
                <div className={styles['prog-size']}>
                    <Progress percent={25} indicating={false} color="grey" />
                </div>
                <div className={classNames(styles['Two-Columns'], styles['Img-size'])}>
                    <Image
                        fluid
                        label={{ color: 'gr', corner: 'left', icon: 'close' }}
                        src="https://react.semantic-ui.com/images/wireframe/image.png"
                        className={styles['Img-size']}
                        size="small"
                    />
                    <Image
                        fluid
                        label={{ color: 'red', corner: 'right', icon: 'heart' }}
                        src="https://react.semantic-ui.com/images/wireframe/image.png"
                        floated="right"
                        className={styles['Img-size']}
                        size="small"
                    ></Image>
                </div>
            </div>
            <div className={classNames(styles['grid-element'], styles['grid-rb'])}>
                <Card fluid={true}>
                    <Card.Content>
                        <Image
                            floated="right"
                            size="mini"
                            src="https://semantic-ui.com/images/avatar2/small/molly.png"
                        />
                        <Card.Header>Molly Sanders</Card.Header>
                        <Card.Meta>Friends of Elliot</Card.Meta>
                        <Card.Description>
                            Steve is your <strong>best friend</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className="ui two buttons">
                            <Button basic color="green">
                                Approve
                            </Button>
                            <Button basic color="red">
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
                <div className={styles.icons}>
                    <Button icon color="facebook" circular={true}>
                        <Icon name="facebook" />
                    </Button>
                    <Button icon color="linkedin" circular={true}>
                        <Icon name="linkedin" />
                    </Button>
                    <Button icon color="twitter" circular={true}>
                        <Icon name="twitter" />
                    </Button>
                    <Button icon color="youtube" circular={true}>
                        <Icon name="youtube" />
                    </Button>
                </div>
                <div className={styles.buttons}>
                    <Button.Group>
                        <Button>Cancel</Button>
                        <Button.Or />
                        <Button positive>Save for later</Button>
                    </Button.Group>
                </div>
            </div>
        </div>
    );
};
