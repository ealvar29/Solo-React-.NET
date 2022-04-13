import React, { useState } from 'react';

export default function Expense() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("expense")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    console.log(items)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    return (
        <div>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.name} {item.cost}
                        </li>
                    ))}
                </ul>
        </div>
    );
}