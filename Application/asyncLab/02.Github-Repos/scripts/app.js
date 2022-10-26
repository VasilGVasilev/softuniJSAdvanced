function loadRepos() {
	// read data
	const username = document.getElementById('username').value;
	const list = document.getElementById('repos');
	// with promises
	// request
	fetch(`https://api.github.com/users/${username}/repos`)
		.then(handleRes)
		.then(displayRepos)
		.catch(handleError);

	function handleRes(res){
		if(res.ok == false){
			throw new Error(`${res.status} ${res.statusText}`);
		}
		return res.json();
	}
	// display data
	function displayRepos(data){
		list.innerHTML = '';
		for(let repo of data){
			list.innerHTML+= `<li>
			<a href="${repo.html_url}" target="_blank">
				${repo.full_name}
			</a>
			</li>`;
		}
	}
	function handleError(err){
		list.innerHTML = `${err.message}`
	}
}
	// with async/await 
	
async	function loadRepos() {
		// read data
		const username = document.getElementById('username').value;
		const list = document.getElementById('repos');
		// with promises
		// request
		try {
			const response = await fetch(`https://api.github.com/users/${username}/repos`)
			if(response.ok == false){
				throw new Error(`${res.status} ${res.statusText}`);
			}
			const data = await response.json();
					// display data
			list.innerHTML = '';
			for(let repo of data){
				list.innerHTML+= `<li>
				<a href="${repo.html_url}" target="_blank">
					${repo.full_name}
				</a>
				</li>`;
			}
		} catch (error) {
			list.innerHTML = `${error.message}`
		}
	}