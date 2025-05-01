import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))

function FactComponent() {
	return (
		<div>
			<h1>Fun facts about React</h1>
			<ul>
				<li><b>Was first released in 2013</b></li>
				<li><b>Was originally created by Jordan Walke</b></li>
				<li><b>Has well over 100k stars on Github</b></li>
				<li><b>Is maintained by Meta</b></li>
				<li><b>Powers thousands of enterprise apps, including mobile apps</b></li>
			</ul>
		</div>
	)
}

root.render(
	<div>
		<img src="/src/assets/react.svg" id='react-img' alt='React logo'/>
		<FactComponent />
	</div>
)
