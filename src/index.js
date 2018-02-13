import React from 'react';
import { render } from 'react-dom';
import { MenuEditorLanding, StoreEditorLanding, StoreBasicInfos } from './pages';

const rootElement = document.getElementById('root');
render(<StoreBasicInfos />, rootElement);