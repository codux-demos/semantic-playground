import classNames from 'classnames';
import styles from './demo.module.scss';
import { Button } from 'semantic-ui-react';

export interface DemoProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Demo = ({ className }: DemoProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            Semantic UI Is Great
            <Button.Group>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </Button.Group>
            <Button.Group
                buttons={[
                    { key: 'align left', icon: 'align left' },
                    { key: 'align center', icon: 'align center' },
                    { key: 'align right', icon: 'align right' },
                    { key: 'align justify', icon: 'align justify' },
                ]}
            />
            <Button.Group>
                <Button>Cancel</Button>
                <Button.Or />
                <Button positive>Save</Button>
            </Button.Group>
                <Button basic color="black">
                    Black
                </Button>
        </div>
    );
};
