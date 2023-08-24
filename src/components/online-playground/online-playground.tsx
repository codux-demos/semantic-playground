import classNames from 'classnames';
import styles from './online-playground.module.scss';
import { Button, Image, Label, Segment, Icon, Card, Form, Progress } from 'semantic-ui-react';

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
                    <Button color="black">Read Artical</Button>
                    <Button basic color="black">
                        Decomentation
                    </Button>
                </div>
            </div>
            <div className={classNames(styles['grid-element'], styles.Main)}>
                <div className={styles.buttons}>
                    <Label color="olive" tag>
                        New
                    </Label>
                    <Label color="teal" tag>
                        Upcoming
                    </Label>
                    <Label color="purple" tag>
                        Featured
                    </Label>
                </div>
                <div className={classNames(styles['Two-Columns'])}>
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
                <div className={styles['Two-Columns']}>
                    <Segment attached color="black">
                        <Label color="black" ribbon content="Hotel" icon="hotel" />
                        <span>Account Details</span>

                        <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                    </Segment>

                    <Segment attached color="orange">
                        <Label color="orange" ribbon="right" content="Overview" />
                        <span>Account Details</span>

                        <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                    </Segment>
                </div>
            </div>
            <div className={styles['grid-element']}>
                <div className={classNames(styles['grid-element'], styles.right)}>
                    <Card fluid={true}>
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
            </div>
            <div className={styles['grid-element']}>
                <div className={styles['Two-Columns']}>
                    <Button as="div" labelPosition="right">
                        <Button color="red">
                            <Icon name="heart" />
                            Like
                        </Button>
                        <Label basic color="red" pointing="left">
                            2,104
                        </Label>
                    </Button>
                    <Button.Group>
                        <Button>Cancel</Button>
                        <Button.Or />
                        <Button positive>Save</Button>
                    </Button.Group>
                </div>
                <Form>
                    <Form.Field inline={false} className={styles['one-line']}>
                        <span className={styles['input']}>
                            <input type="text" placeholder="Username" className={styles.input} />
                        </span>
                        <Label pointing="left" color="pink" size="medium" className={styles.label}>
                            That name is taken!
                        </Label>
                    </Form.Field>
                </Form>
                <Progress percent={64} indicating={false} color="teal" />
            </div>
            <div className={styles['grid-element']}>
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
                            Steve is your <strong>best friends</strong>
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
            </div>
        </div>
    );
};
