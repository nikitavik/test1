

const requestBody = {
    title: 'foo',
    body: 'bar',
    userId: 1,
}

const fetchSomeThing = async () => {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST', // mode: 'no-cors',
            body: JSON.stringify(requestBody),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            }
        })

        console.log(response.json());
    } catch (e) {
        console.log(e)
    }

}

fetchSomeThing()
