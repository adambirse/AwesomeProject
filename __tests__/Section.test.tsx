/**
 * @format
 */

import 'react-native';
import React from 'react';
import Section from '../components/Section';

import {it, expect} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Text} from 'react-native';

it('renders correctly with default title', () => {
  const section = renderer.create(<Section />);

  const text = section.root.findAllByType(Text);
  expect(text.length).toBe(2);
  expect(text[0].props.children).toBe('Default title');
});
