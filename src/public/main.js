const PUBLIC_VAPID_KEY= 'BDnLlZFwTuLY1lxlj-xkpvbif-90stJWEk4uz2NUk5pKlLxrWyzmvbYr79Gz-lQCb31I4cvIYkQPvUk_t2G6nyI'



const subscription = async () => {

    console.log('new service worker');

    await fetch('/subscription',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        }
    });
    console.log('Subscribed!')    
}

subscription();