import React from 'react';
import { shallow } from 'enzyme';

import Header from './header';

describe('<Header />', () => {
	it('Reders without crashing', () => {
		shallow(<Header />);
	});
});