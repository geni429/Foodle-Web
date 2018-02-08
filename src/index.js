import React from 'react';
import { render } from 'react-dom';
import { MenuEditorLanding, StoreEditorLanding } from './pages';

const rootElement = document.getElementById('root');
render(<StoreEditorLanding />, rootElement);