import React from 'react';
import {shallow} from 'enzyme';
import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
	it('Render without crashing', () => {
		shallow(<AuralStatus />);
	});

	it('Should Render an aural status update', () => {
		let test_status = 'You are listening to a game';
		let wrapper = shallow(<AuralStatus auralStatus={test_status}/>);
		expect(wrapper.contains(test_status)).toEqual(true);

	});
});