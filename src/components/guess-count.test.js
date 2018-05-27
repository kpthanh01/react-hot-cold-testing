import React from 'react';
import {shallow} from 'enzyme';
import GuessCount from './guess-count';

describe('<GuessCount />', () => {
	it('Render without crashing', () => {
		shallow(<GuessCount />);
	});

	it('Should render correct count', () => {
		const value = 3;
		const wrapper = shallow(<GuessCount guessCount ={value}/>);
		expect(wrapper.text()).toEqual(`You've made ${value} guesses!`);
	})
}); 