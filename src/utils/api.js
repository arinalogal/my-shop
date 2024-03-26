const BASE_URL = 'http://localhost:3000';

export const api = {
    get (url, params) {
        const filteredParams = params
            ? Object.fromEntries(Object.entries(params).filter(value => value[1]))
            : null;

        const searchParams = filteredParams
            ? new URLSearchParams(filteredParams)
            : null;

        const queryParams = searchParams
            ? searchParams.size > 0 ? `?${searchParams.toString()}` : ''
            : '';

        return fetch(BASE_URL + url + queryParams, {
            headers: { 
                'Content-Type': 'application/json'
            }
        })
            .then(async (res) => {
                const data = await res.json();

                return {
                    headers: res.headers,
                    data
                };
            });
    },
    post (url, params) {
        return fetch(BASE_URL + url, {
            method: 'post',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
            .then(res => res.json());
    },
    patch (url, params) {
        return fetch(BASE_URL + url, {
            method: 'PATCH',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
            .then(res => res.json());
    },
    delete (url, params) {
        return fetch(BASE_URL + url, {
            method: 'DELETE',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
            .then(res => res.json());
    },
}