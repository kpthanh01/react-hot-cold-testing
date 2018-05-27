import React from 'react';
import {shallow} from 'enzyme';
import Feedback from './feedback';

describe('<Feedback />', () => {
	it('Render without crashing', () => {
		shallow(<Feedback />);
	});

	it('Render with some feedback', () => {
		let test_feedback = "Temporary test feedback";
		let test_guess = [2,4,5];
		let wrapper = shallow(<Feedback feedback={test_feedback} guessCount={test_guess}/>);
		expect(wrapper.contains(test_feedback)).toEqual(true);
	});
});