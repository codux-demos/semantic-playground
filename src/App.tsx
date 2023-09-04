import { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import { ReactComponent as ViteLogo } from './assets/vite.svg';
import { ReactComponent as TypescriptLogo } from './assets/typescript.svg';
import { ReactComponent as ScssLogo } from './assets/scss.svg';
import styles from './App.module.scss';
import { Card, Image, Icon, Feed, Button } from 'semantic-ui-react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.gall}>
            <Card>
                <Image
                    src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                    wrapped
                    ui={false}
                ></Image>
                <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className="date">Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description></Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name="user" />
                        22 Friends
                    </a>
                </Card.Content>
                Matthew is a musician living in Nashville.
            </Card>
            <Card>
                <Image
                    src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                    wrapped
                    ui={false}
                />
                <Card.Content extra>
                    <Card.Content>
                        <Card.Header>Matthew</Card.Header>
                        <Card.Meta>
                            <span className="date">Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>
                            Matthew is a musician living in Nashville.
                        </Card.Description>
                    </Card.Content>
                    <a>
                        <Icon name="user" />
                        22 Friends
                    </a>
                </Card.Content>
            </Card>
            Matthew is a musician living in Nashville.
            <Card>
                <Image
                    src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                    wrapped
                    ui={false}
                />
                <Button basic color="blue">
                    Blue
                </Button>
                <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className="date">Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description></Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name="user" />
                        22 Friends
                    </a>
                </Card.Content>
            </Card>
            <Feed>
                <Feed.Event>
                    <Feed.Label>
                        <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                            <Feed.User>Elliot Fu</Feed.User> added you as a friend
                            <Feed.Date>1 Hour Ago</Feed.Date>
                        </Feed.Summary>
                        <Feed.Meta>
                            <Feed.Like>
                                <Icon name="like" />4 Likes
                            </Feed.Like>
                        </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                    <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/matt.jpg"></Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                            <a>Matt Troy</a> added <a>2 new illustrations</a>
                            <Feed.Date>4 days ago</Feed.Date>
                        </Feed.Summary>
                        <Feed.Extra images>
                            <a>
                                <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            </a>
                            <a></a>
                        </Feed.Extra>
                        <Feed.Meta>
                            <Feed.Like>
                                <Icon name="like" />1 Like
                            </Feed.Like>
                        </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                    <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
                    <Feed.Content>
                        <Feed.Summary
                            date="2 Days Ago"
                            user="Jenny Hess"
                            content="add you as a friend"
                        />
                        <Feed.Meta>
                            <Feed.Like>
                                <Icon name="like" />8 Likes
                            </Feed.Like>
                        </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                    <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
                    <Feed.Content>
                        <Feed.Summary>
                            <a>Joe Henderson</a> posted on his page
                            <Feed.Date>3 days ago</Feed.Date>
                        </Feed.Summary>
                        <Feed.Extra text>
                            Ours is a life of constant reruns. We're always circling back to where
                            we'd we started, then starting all over again. Even if we don't run
                            extra laps that day, we surely will come back for more of the same
                            another day soon.
                        </Feed.Extra>
                        <Feed.Meta>
                            <Feed.Like>
                                <Icon name="like" />5 Likes
                            </Feed.Like>
                        </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                    <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/justen.jpg" />
                    <Feed.Content>
                        <Feed.Summary>
                            <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                            <Feed.Date>4 days ago</Feed.Date>
                        </Feed.Summary>
                        <Feed.Extra images>
                            <a>
                                <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            </a>
                            <a>
                                <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            </a>
                        </Feed.Extra>
                        <Feed.Meta>
                            <Feed.Like>
                                <Icon name="like" />
                                41 Likes
                            </Feed.Like>
                        </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        </div>
    );
}

export default App;
