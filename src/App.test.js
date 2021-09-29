import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import PlayCard from './components/PlayCard';

Enzyme.configure({ adapter: new Adapter() });
