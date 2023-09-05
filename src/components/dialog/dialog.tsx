import classNames from 'classnames';
import styles from './dialog.module.scss';
import { Button, Header, Input } from 'semantic-ui-react';

export interface DialogProps {
    className?: string;
    files?: number;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Dialog = ({ className, files }: DialogProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Header size="small">Commit your changes</Header>
            <p>
                Record the changes you made on this branch with commit. Your changes will remain
                local until you sync them to a remote repository
            </p>
            <div className={styles.paragraph}>
                <p>commit {files} files </p>
                <Input placeholder="Enter a commit message to describe your changes" />
            </div>
            <div className={styles.footer}>
                <Button basic color="blue">
                    Cancel
                </Button>
                <Button primary>Continue</Button>
            </div>
        </div>
    );
};
