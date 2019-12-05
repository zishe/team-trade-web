import React from 'react';

import { RootStore } from '../stores/RootStore';

export const RootContext = React.createContext(new RootStore());
