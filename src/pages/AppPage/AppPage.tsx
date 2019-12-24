import React, { FC } from 'react';
import { ViewVerticalContainer } from '@nareshbhatia/react-force';

import { AppBar, NewIdea } from '../../components';

export const AppPage: FC = () => {
    return (
        <ViewVerticalContainer>
            <AppBar />
            <NewIdea />
        </ViewVerticalContainer>
    );
};
