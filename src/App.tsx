import React, { Suspense, useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { ErrorBoundary, Loading } from '@nareshbhatia/react-force';
import { createBrowserHistory } from 'history';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { theme } from './components';
import { HomePage } from './pages';
import { HistoryAdapter, RouterView } from 'mobx-state-router';
import { RootStore } from './stores';
import { RootContext } from './contexts';

export const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    onError: e => {
        console.log(e);
    }
});

export const rootStore = new RootStore();

const historyAdapter = new HistoryAdapter(rootStore.routerStore, createBrowserHistory());
historyAdapter.observeRouterStateChanges();

export const viewMap = {
    home: <HomePage />
};

export const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                    <RootContext.Provider value={rootStore}>
                        <ThemeProvider theme={theme}>
                            <CssBaseline />
                            <Shell />
                        </ThemeProvider>
                    </RootContext.Provider>
                </Suspense>
            </ErrorBoundary>
        </ApolloProvider>
    );
};

export const Shell: React.FC = () => {
    const { routerStore } = useContext(RootContext);

    return <RouterView routerStore={routerStore} viewMap={viewMap} />;
};
