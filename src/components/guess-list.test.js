import React from 'react';
import {shallow} from 'enzyme';
import GuessList from './guess-list';

describe('<GuessList /', () => {
	it('Render without crashing', () => {
		shallow(<GuessList guesses={[]}/>);
	});

	it('Should render with list of guesses', () =>{
		const list = [4, 8, 13];
		const wrapper = shallow(<GuessList guesses={list}/>);
		const items = wrapper.find('li');
		expect(items.length).toEqual(list.length);
		list.forEach((element, index) => {
			expect(items.at(index).text()).toEqual(element.toString());
		});
	});
});