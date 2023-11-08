import logo from './logo.svg'
import './App.css'
import { jsx as _jsx } from 'react/jsx-runtime'
import { jsxs as _jsxs } from 'react/jsx-runtime'

export const App = () => {
	const currentYear = new Date().getFullYear() // декларативный

	return _jsx('div', {
		className: 'App',
		children: _jsxs('header', {
			className: 'App-header',
			children: [
				_jsx('img', {
					src: logo,
					className: 'App-logo',
					alt: 'logo',
				}),
				_jsxs('p', {
					children: [
						'Edit ',
						_jsx('code', {
							children: 'src/App.js',
						}),
						' and save to reload.',
					],
				}),
				_jsx('a', {
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
					children: 'Learn React',
				}),
				_jsx('p', {
					children: currentYear,
				}),
			],
		}),
	})
}
